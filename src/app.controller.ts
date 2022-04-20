import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  constructor(private authService: AuthService) {}

  //regra de segurança dentro de local.strategy
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user;
  }
}
