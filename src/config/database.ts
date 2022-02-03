import { IDatabaseDriver, Connection } from '@mikro-orm/core';
import {
  MikroOrmModuleOptions,
  MikroOrmOptionsFactory,
} from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';
import { Accounts } from '../account/account.model';
import { Transactions } from '../transaction/transaction.model';

export class MikroORMConfig implements MikroOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createMikroOrmOptions():
    | MikroOrmModuleOptions<IDatabaseDriver<Connection>>
    | Promise<MikroOrmModuleOptions<IDatabaseDriver<Connection>>> {
    return {
      user: this.configService.get<string>('DB_USER', 'postgres'),
      dbName: this.configService.get<string>('DB_NAME', 'techtalk'),
      password: this.configService.get<string>('DB_PWD', 'docker'),
      host: this.configService.get<string>('DB_HOST', 'localhost'),
      port: 5432,
      type: 'postgresql',
      entities: [Accounts, Transactions],
    };
  }
}
