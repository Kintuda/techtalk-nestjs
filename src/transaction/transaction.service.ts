import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Transactions } from './transaction.model';

@Injectable()
export class TransactionService {
    constructor(@InjectRepository(Transactions) private readonly transactionRepo: EntityRepository<Transactions>) { }

    async checkBalance(id: string): Promise<number> {
        const transactions = await this.transactionRepo.find({ account: id })

        return transactions.reduce((acc, val) => acc + val.amount, 0)
    }

    async createTransaction(payload: { account: string, amount: number, type: 'withdrawal' | 'deposit' | 'transfer' }): Promise<Transactions> {
        const transaction = new Transactions(
            payload.account,
            payload.amount,
            payload.type
        )

        await this.transactionRepo.persistAndFlush(transaction)

        return transaction
    }

    async listTransaction(account: string): Promise<Transactions[]> {
        return this.transactionRepo.find({ account: account })
    }
}
