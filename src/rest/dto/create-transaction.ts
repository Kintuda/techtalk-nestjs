import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTransaction {
    @Field()
    @ApiProperty({
        description: 'Conta da transacao',
        example: '09391280381290',
        required: true
    })
    @IsNotEmpty()
    account: string

    @Field()
    @ApiProperty({
        description: 'Valor da transacao',
        example: 10.00,
        required: true
    })
    @IsNotEmpty()
    amount: number

    @Field()
    @ApiProperty({
        enum: ['withdrawal', 'deposit', 'transfer'],
        description: 'Tipo da transacao',
        example: 'withdrawal',
        required: true
    })
    @IsNotEmpty()
    @IsEnum(['withdrawal', 'deposit', 'transfer'])
    type: 'withdrawal' | 'deposit' | 'transfer'
}