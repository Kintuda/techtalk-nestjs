import { ApiProperty } from '@nestjs/swagger'

export class ResponseBalance {
    @ApiProperty()
    balance: number
}