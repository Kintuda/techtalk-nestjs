import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTransaction } from 'src/rest/dto/create-transaction';
import { Transactions } from 'src/transaction/transaction.model';
import { TransactionService } from 'src/transaction/transaction.service';
import { BalanceType } from './dto/check-balance';

@Resolver()
export class GraphqlResolver {
  constructor(private readonly transactionService: TransactionService) { }

  @Mutation(returns => Transactions)
  async createTransaction(
    @Args('transactionData') transactionData: CreateTransaction,
    ): Promise<Transactions> {
      return this.transactionService.createTransaction(transactionData)
  }

  @Query(() => [Transactions])
  async listTransaction(@Args('id') id: string): Promise<Transactions[]> {
      return this.transactionService.listTransaction(id)
  }

  @Query(() => BalanceType)
  async items(@Args('id') id: string): Promise<BalanceType> {
    const balance = await this.transactionService.checkBalance(id)

      return { balance }
  }
}