import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Transactions } from './transaction.model';
import { TransactionService } from './transaction.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Transactions] })],
  providers: [TransactionService],
  exports: [TransactionService]
})
export class TransactionModule { }
