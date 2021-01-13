import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TransactionModule } from 'src/transaction/transaction.module';
import { GraphqlResolver } from './graphql.resolver';

@Module({
  imports: [
    TransactionModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  // controllers: [GraphqlController],
  providers:[GraphqlResolver]
})
export class GraphqlModule { }
