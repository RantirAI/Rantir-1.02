import { Controller, Post, Body, HttpCode, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthDto, SignUpDto } from './dto';
import { ControllerErrorHandler } from '@/shared/error-handlers';
import { IServiceData } from '@/shared/interfaces';

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private controllerErrorHandler: ControllerErrorHandler
	) {}

	@HttpCode(200)
	@Post('/signin')
	async signIn(@Body() loginDto: AuthDto) {
		const resp: IServiceData = await this.authService.signIn(loginDto);
		return this.controllerErrorHandler.handleResponse(resp);
	}

	@Post('/signup')
	async signUp(@Body() signUpDto: SignUpDto) {
		const resp: IServiceData = await this.authService.signUp(signUpDto);
		return this.controllerErrorHandler.handleResponse(resp);
	}
}
