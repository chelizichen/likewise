import { IsNumber } from "class-validator"

export class SetFavoDto{
    @IsNumber()
    userId:number

    @IsNumber()
    songId:number
}