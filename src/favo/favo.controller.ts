import { Controller, Get, Param, Query } from "@nestjs/common";
import { FavoService } from "./favo.service";

export interface SetFavoInterface{
    userId:number,
    songId:number
}

@Controller('favo')
export class FavoController {
    constructor(private readonly FavoService:FavoService){}
    @Get()
    async SetFavo(@Query() query:SetFavoInterface){
        return await this.FavoService.SetFavo(query)
    }

    @Get('/findAll')
    async findAllFav(@Query("id") id:any){
        return await this.FavoService.findAllFav(id)
    }
}