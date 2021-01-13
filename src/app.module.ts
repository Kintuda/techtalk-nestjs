import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GrpcModule } from './grpc/grpc.module'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Accounts } from './account/account.model'
import { Transactions } from './transaction/transaction.model'

import { ConfigModule, ConfigService } from '@nestjs/config'
import { RestModule } from './rest/rest.module'
import { GraphqlModule } from './graphql/graphql.module'

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        user: 'postgres',
        dbName: 'techtalk',
        password: 'docker',
        host: 'localhost',
        port: 5432,
        type: 'postgresql',
        entities: [
          Accounts,
          Transactions
        ]
      }),
      inject: [ConfigService],
    }),
    GraphqlModule,
    RestModule,
    GrpcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
