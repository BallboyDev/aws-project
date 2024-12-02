import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { LoginModule } from './module/login/login.module';

@Module({
  imports: [UsersModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
