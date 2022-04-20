import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('nova-rota')
export class NovaRotaController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getNovaRota() {
    return 'bem vindo a nova rota';
  }
}
