import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '@/api/auth/strategy';
import { ControllerErrorHandler, ServiceErrorHandler } from '@/shared/error-handlers';
import { TeamService } from '@/api/team/team.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ControllerErrorHandler, ServiceErrorHandler, TeamService]
})
export class AuthModule {}
