import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TransactionModule } from 'src/transaction/transaction.module'
import { GrpcController } from './grpc.controller'

@Module({
    imports:[
        ConfigModule,
        TransactionModule
    ],
    controllers: [GrpcController]
})
export class GrpcModule { }
