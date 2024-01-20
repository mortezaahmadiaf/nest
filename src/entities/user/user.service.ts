import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
}
