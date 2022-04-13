import { Injectable } from "@nestjs/common";
import { GoodsRepository } from "./goods.repository";
@Injectable()
export class GoodsService
{
    constructor(private readonly GoodsRepository:GoodsRepository){}
    findOne(id:number)
    {
        return this.GoodsRepository.findOne(id)
    }
    findAll()
    {
        return this.GoodsRepository.findAll()
    }
    create(msg:string)
    {
        return this.GoodsRepository.create(msg)
    }
}