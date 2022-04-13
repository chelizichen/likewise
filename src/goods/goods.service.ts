import { Injectable } from "@nestjs/common";

@Injectable()
export class GoodsService
{
    getItem(){
        return 'hello GetItem'
    }
}