import * as argon from 'argon2';
import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from '@/api/auth/dto';
import { PrismaService } from '@/prisma-module/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { IServiceData, ServiceError } from '@/shared/interfaces';
import { JWT_SECRET, TOKEN_EXPIRES_IN } from '@/configs/env.config';
import { TeamService } from '@/api/team/team.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
    private teamService: TeamService
  ) {}
  async login(loginDto: LoginDto): Promise<IServiceData> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: loginDto.email
        }
      });

      if (!user) {
        return {
          businessError: {
            type: ServiceError.FORBIDDEN,
            message: 'Invalid Credential(s)'
          }
        };
      }

      const passwordMatches = await argon.verify(user.password, loginDto.password);

      if (!passwordMatches) {
        return {
          businessError: {
            type: ServiceError.FORBIDDEN,
            message: 'Invalid Credential(s)'
          }
        };
      }

      const { password, ...userWithoutPassword } = user;

      return {
        data: await this.signToken(userWithoutPassword)
      };
    } catch (e) {
      return {
        prismaError: e
      };
    }
  }

  async signToken(user: object): Promise<{ token: string }> {
    const payload = {
      user
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: TOKEN_EXPIRES_IN,
      secret: JWT_SECRET
    });

    return {
      token: token
    };
  }

  async register(registerDto: RegisterDto): Promise<IServiceData> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: registerDto.email
        }
      });
      if (user) {
        return {
          businessError: {
            type: ServiceError.FORBIDDEN,
            message: 'Email already exists'
          }
        };
      }

      const newUser = await this.prisma.user.create({
        data: {
          email: registerDto.email,
          password: await argon.hash(registerDto.password),
          firstName: registerDto.firstName,
          lastName: registerDto.lastName
        }
      });

      const newTeamResp = await this.teamService.create({
        name: registerDto.teamName
      });

      const newTeam = newTeamResp.data as any;

      const permission = await this.prisma.permission.findUnique({
        where: {
          name: 'admin'
        }
      });

      const userTeam = await this.prisma.userTeam.create({
        data: {
          userId: newUser.id,
          teamId: newTeam.id,
          permissionId: permission.id
        }
      });

      const { password, ...userWithoutPassword } = newUser;

      return {
        data: await this.signToken(userWithoutPassword)
      };
    } catch (e) {
      return {
        prismaError: e
      };
    }
  }
}
