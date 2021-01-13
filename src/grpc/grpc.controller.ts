import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { Metadata, ServerUnaryCall } from 'grpc';
import { CreateTransaction } from 'src/rest/dto/create-transaction';
import { Transactions } from 'src/transaction/transaction.model';
import { TransactionService } from 'src/transaction/transaction.service';
import { BalanceResponse, CheckTransactions, Transaction } from './build/transaction';

@Controller('grpc')
export class GrpcController {

    constructor(private readonly transactionService: TransactionService) { }

    @GrpcMethod('TransactionService', 'CreateTransaction')
    async createTransaction(data: Transaction, metadata: Metadata, call: ServerUnaryCall<any>): Promise<Transactions> {
        return this.transactionService.createTransaction(data as CreateTransaction)
    }

    @GrpcMethod('TransactionService', 'ListTransaction')
    async listTransactions(data: CheckTransactions, metadata: Metadata, call: ServerUnaryCall<any>): Promise<any> {
        const transactions = await this.transactionService.listTransaction(data.id)

        return { transactions }
    }

    @GrpcMethod('TransactionService', 'Balance')
    async queryTransaction(data: CheckTransactions, metadata: Metadata, call: ServerUnaryCall<any>): Promise<BalanceResponse> {
        const balance = await this.transactionService.checkBalance(data.id)

        return { balance }
    }
}
