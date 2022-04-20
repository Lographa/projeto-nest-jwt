import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { NovaRotaController } from './nova-rota/nova-rota.controller';
import { NovaRotaModule } from './nova-rota/nova-rota.module';

@Module({
  imports: [UsersModule, AuthModule, NovaRotaModule],
  controllers: [AppController, NovaRotaController],
  providers: [AppService],
})
export class AppModule {}
