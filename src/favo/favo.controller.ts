import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { SetFavoDto } from "./favo.pipe";
import { FavoService } from "./favo.service";

export interface SetFavoInterface{
    userId:number,
    songId:number
}

@Controller('favo')
export class FavoController {
    constructor(private readonly FavoService:FavoService){}
    @Get("/setFavo")
    async SetFavo(@Query() query:SetFavoInterface){
        return await this.FavoService.SetFavo(query)
    }

    @Post()
    testPOST(@Body() body:SetFavoDto){
        console.log(body);
        return 123
    }
    @Get("setDisFavo")
    async SetDisFav(@Query() query:SetFavoInterface){
        return await this.FavoService.SetDisFav(query)
    }

    @Get('/findAll')
    async findAllFav(@Query("id") id:any){
        return await this.FavoService.findAllFav(id)
    }
}