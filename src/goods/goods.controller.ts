import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { GoodsPipe } from "./goods.pipe";
import { GoodsService } from "./goods.service";

@Controller("goods")
export class GoodsController
{
    constructor(private readonly GoodsService:GoodsService){}
    @Get()
    getItem(@Body() body:GoodsPipe):string
    {
        return this.GoodsService.getItem()
    }
    @Post('list')
    postList(@Query() query)
    {
        return query
    }
    @Get('list')
    getList(@Query() query)
    {
        console.log(query);
        return query
    }
} 