import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ObjectType } from '@nestjs/graphql'
import { v4 as uuid } from 'uuid'

@Entity()
@ObjectType()
export class Transactions {

    @Field()
    @PrimaryKey({ columnType: 'uuid', onCreate: () => uuid() })
    id!: string;

    @Field()
    @Property({ columnType: 'uuid', nullable: true })
    account?: string;

    @Field()
    @Property({ columnType: 'float8', nullable: true })
    amount?: number;

    @Field()
    @Property({ columnType: 'transactions_type', nullable: true })
    type?: string;

    @Field()
    @Property({ columnType: 'timestamp', length: 6, onCreate: () => new Date() })
    createdAt!: Date;

    @Field()
    @Property({ columnType: 'timestamp', length: 6, onCreate: () => new Date(), onUpdate: () => new Date() })
    updatedAt!: Date;

    constructor(account: string, amount: number, type: 'withdrawal' | 'deposit' | 'transfer') {
        this.account = account
        this.amount = amount
        this.type = type
    }
}
