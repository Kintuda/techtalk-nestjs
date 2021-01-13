import { Transaction } from '@mikro-orm/core'
import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'
import { Transactions } from 'src/transaction/transaction.model'
import { TransactionService } from 'src/transaction/transaction.service'
import { ApiOkResponse } from '@nestjs/swagger'
import { CreateTransaction } from './dto/create-transaction'
import { ResponseBalance } from './dto/response-balance'
import { CheckBalance } from './dto/check-balance'

@Controller('rest')
export class RestController {
    constructor(private readonly transactionService: TransactionService) { }

    @Post()
    async createTransaction(@Body() payload: CreateTransaction): Promise<Transaction> {
        return this.transactionService.createTransaction(payload)
    }

    @Get('/:id')
    @ApiOkResponse({ type: Transactions, isArray: true })
    async listTransaction(@Param("id") id: string): Promise<Transactions[]> {
        return this.transactionService.listTransaction(id)
    }

    @Get('/balance/:id')
    @HttpCode(200)
    @ApiOkResponse({ type: ResponseBalance })
    async checkBalance(@Param() param: CheckBalance): Promise<ResponseBalance> {
        const balance = await this.transactionService.checkBalance(param.id)

        return { balance }
    }
}
