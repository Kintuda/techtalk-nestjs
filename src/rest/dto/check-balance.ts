import { IsUUID,IsNotEmpty } from 'class-validator'

export class CheckBalance {
    @IsUUID(4)
    @IsNotEmpty()
    id: string
}