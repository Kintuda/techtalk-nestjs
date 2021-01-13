import { Module } from '@nestjs/common'
import { RestController } from './rest.controller'

import { ConfigModule } from '@nestjs/config'
import { TransactionModule } from 'src/transaction/transaction.module'

@Module({
    imports: [
        ConfigModule,
        TransactionModule
    ],
    controllers: [RestController]
})
export class RestModule { }
