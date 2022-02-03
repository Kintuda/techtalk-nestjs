import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MikroORMConfig } from 'src/config/database';

import { TransactionModule } from '../transaction/transaction.module';
import { GraphqlResolver } from './graphql.resolver';

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => new MikroORMConfig(config).createMikroOrmOptions(),
      inject: [ConfigService],
    }),
    TransactionModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers:[GraphqlResolver]
})
export class GraphqlModule { }
