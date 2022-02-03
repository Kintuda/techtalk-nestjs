import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GrpcModule } from './grpc/grpc.module'
import { MikroOrmModule } from '@mikro-orm/nestjs'

import { ConfigModule, ConfigService } from '@nestjs/config'
import { RestModule } from './rest/rest.module'
import { MikroORMConfig } from './config/database'

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => new MikroORMConfig(config).createMikroOrmOptions(),
      inject: [ConfigService],
    }),
    RestModule,
    GrpcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
