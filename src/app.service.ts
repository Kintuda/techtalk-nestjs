import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  heathCheck(): string {
    return 'ok';
  }
}
