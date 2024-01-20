import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/entity-models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  getHello(): string {
    return 'get User!';
  }

  postHello(): string {
    return 'post User!';
  }
  putHello(): string {
    return 'put User!';
  }
  patchHello(): string {
    return 'patch User!';
  }
  deleteHello(): string {
    return 'delete User!';
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async addOne(user: any): Promise<any> {
    return this.userModel.create(user);
  }

  findOne(id: string): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<any> {
    const user = await this.findOne(id);
    const res = await user?.destroy();
    return res;
  }
}
