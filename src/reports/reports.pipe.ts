import { IsNumber } from "class-validator";

export class PriceDTO
{
    @IsNumber()
    price:number
}