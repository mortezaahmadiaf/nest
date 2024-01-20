import { SequelizeModule } from '@nestjs/sequelize';
import { models } from '../entity-models';
export const mysql = SequelizeModule.forRoot({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  // password: 'root',
  database: 'test',
  models: [models.User],
  autoLoadModels: true,
});
