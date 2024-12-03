import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { LoginModule } from './module/login/login.module';
import { PdfModule } from './module/pdf/pdf.module';

@Module({
  imports: [UsersModule, LoginModule, PdfModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
