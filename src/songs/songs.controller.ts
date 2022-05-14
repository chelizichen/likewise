import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { SerializeInterceptor } from "src/interceptor/serialize.interceptor";
import { CommonUserDTO, SongsDTO } from "./songs.pipe";
import { SongsSerivce } from "./songs.service";

@Controller("songs")
export class SongsController{
    constructor(private readonly SongsService:SongsSerivce){}
    @Get()
    testGet()
    {
        return this.SongsService.testGet()
    }

    @UseInterceptors(new SerializeInterceptor(CommonUserDTO))
    @Post("/type")
    async testPost(@Body() body:SongsDTO){
        return await this.SongsService.testPost(body)
    }
}