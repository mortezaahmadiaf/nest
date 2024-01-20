import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from 'src/entity-models';

@Module({
  imports: [SequelizeModule.forFeature([models.User])],
  exports: [SequelizeModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
