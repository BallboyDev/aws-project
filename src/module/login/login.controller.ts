import { Controller, Get, Query, Req } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Get()
  login(@Query('userId') userId: string): object {
    return this.loginService.login(userId)
  }
}
