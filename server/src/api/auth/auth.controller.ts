import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { ControllerErrorHandler } from '@/shared/error-handlers';
import { IServiceData } from '@/shared/interfaces';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly controllerErrorHandler: ControllerErrorHandler
  ) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const resp: IServiceData = await this.authService.login(loginDto);
    return this.controllerErrorHandler.handleResponse(resp);
  }

  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    const resp: IServiceData = await this.authService.register(registerDto);
    return this.controllerErrorHandler.handleResponse(resp);
  }
}
