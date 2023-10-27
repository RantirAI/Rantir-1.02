import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { PrismaService } from '@/prisma-module/prisma.service';
import { IServiceData } from '@/shared/interfaces';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTeamDto: CreateTeamDto): Promise<IServiceData> {
    try {
      return {
        data: await this.prisma.team.create({
          data: createTeamDto
        })
      };
    } catch (e) {
      return {
        prismaError: e
      };
    }
  }
}
