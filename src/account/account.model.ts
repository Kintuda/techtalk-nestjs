import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid'

@Entity()
export class Accounts {
    @PrimaryKey({ columnType: 'uuid', onCreate: () => uuid() })
    id!: string

    @Property({ nullable: true })
    description?: string

    @Property({ columnType: 'account_type', nullable: true })
    type?: 'savings' | 'checking'

    @Property()
    routingNumber!: string

    @Property({ columnType: 'timestamp', length: 6, onUpdate: () => new Date() })
    createdAt!: Date

    @Property({ columnType: 'timestamp', length: 6, onUpdate: () => new Date() })
    updatedAt!: Date

    constructor(type: 'savings' | 'checking', routingNumber: string) {
        this.type = type
        this.routingNumber = routingNumber
    }
}
