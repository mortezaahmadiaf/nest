import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { config } from 'src/configs';

@Module({
  imports: [config.mysql, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
