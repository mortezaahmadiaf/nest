import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @Post()
  postHello(): string {
    return this.userService.postHello();
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
}
