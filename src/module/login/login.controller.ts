import { Body, Controller, Get, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { LoginService } from './login.service';
import { SigninReqDto, SigninResDto } from './dto/signin.dto';

// @Controller('login')
@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post('/signin')
  async signin(@Body() signinReqDto: SigninReqDto): Promise<SigninResDto> {
    return await this.loginService.signin(signinReqDto)
  }
}
