import { NovaRotaService } from './nova-rota.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [NovaRotaService],
  exports: [NovaRotaService],
})
export class NovaRotaModule {}
