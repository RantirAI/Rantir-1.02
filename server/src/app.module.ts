import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma-module/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';
import { ControllerErrorHandler, ServiceErrorHandler } from '@/shared/error-handlers';
import { TeamModule } from './api/team/team.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule, TeamModule],
  controllers: [],
  providers: [ControllerErrorHandler, ServiceErrorHandler]
})
export class AppModule {}
