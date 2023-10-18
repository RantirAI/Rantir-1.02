import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClsModule } from 'nestjs-cls';
import { ScheduleModule } from '@nestjs/schedule';

import { AuthModule } from '@/api/auth/auth.module';
import { UserProxy } from '@/shared/async-storage';

@Module({
	imports: [
		ClsModule.forFeature(UserProxy),
		ConfigModule.forRoot({ isGlobal: true }),
		ScheduleModule.forRoot(),
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
