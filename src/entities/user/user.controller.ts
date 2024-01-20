import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entity-models/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @Get('/all')
  async getAll(): Promise<Array<User>> {
    return await this.userService.findAll();
  }
  @Get(':id')
  async findOne(@Param() param: { id: string }): Promise<User | null> {
    return await this.userService.findOne(param.id);
  }
  @Post()
  postHello(): string {
    return this.userService.postHello();
  }
  @Post('/add')
  addOne(@Body() body: User): any {
    return this.userService.addOne(body);
  }

  @Put()
  putHello(): string {
    return this.userService.putHello();
  }
  @Patch()
  patchHello(): string {
    return this.userService.patchHello();
  }
  @Delete()
  deleteHello(): string {
    return this.userService.deleteHello();
  }
  @Delete(':id')
  async remove(@Param() param: { id: string }): Promise<User> {
    return await this.userService.remove(param.id);
  }
}
