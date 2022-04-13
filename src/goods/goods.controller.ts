import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { GoodsPipe } from "./goods.pipe";
import { GoodsService } from "./goods.service";
interface queryType
{
    id:number
}
@Controller("goods")
export class GoodsController
{
    constructor(private readonly GoodsService:GoodsService){}
    @Get()
    findOne(@Query() query:queryType)
    {
        return this.GoodsService.findOne(query.id)
    }
    @Post()
    create(@Body() body:GoodsPipe,@Query() query)
    {
        return this.GoodsService.create(body.content)
    }
    @Patch()
    findAll()
    {
        return this.GoodsService.findAll()
    }
} 