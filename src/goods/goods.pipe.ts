import { IsString } from "class-validator";


export class GoodsPipe{
    @IsString()
    content:string
}