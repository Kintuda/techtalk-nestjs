import { ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { GraphqlModule } from './graphql/graphql.module'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Transport } from '@nestjs/microservices'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(GraphqlModule)

  const options = new DocumentBuilder()
    .setTitle('Techtalk example')
    .setDescription('techtalk API definition')
    .setVersion('1.0')
    .addTag('techtalk')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('doc', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
}


async function bootstrapGRPC() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      protoPath: join(__dirname, 'grpc/transaction.proto'),
      package: 'transaction',
    },
  })
  
  app.listen()
}


bootstrap()
