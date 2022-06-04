import { Body, Controller, Get, Post, Query, UseInterceptors } from "@nestjs/common";
import { SerializeInterceptor } from "src/interceptor/serialize.interceptor";
import { AddSongDTO, CommonUserDTO, DeleteSongDto, ModifySongDto, SongNameDTO, SongsDTO } from "./songs.pipe";
import { SongsSerivce } from "./songs.service";

@Controller("songs")
export class SongsController{
    constructor(private readonly SongsService:SongsSerivce){}
    // 得到所有歌曲
    @Get()
    async getSongs()
    {
        return this.SongsService.getAllSongs()
    }

    @Post("/add")
    async addSongs(@Body() body:AddSongDTO){
        const { userType } = body
        if(userType === "普通管理员" || userType === "超级管理员"){
            return this.SongsService.addSongs(body)
        }
        return "您不是管理员"
    }
    
    // 根据Type 来查找歌曲
    @UseInterceptors(new SerializeInterceptor(CommonUserDTO))
    @Post("/type")
    async findByType(@Body() body:SongsDTO){
        return await this.SongsService.findByType(body)
    }
    @Post("/admin/type")
    async adMinFindByType(@Body() body:SongsDTO){
        return await this.SongsService.findByType(body)
    }

    // 根据曲名模糊查询
    @Post("/songname")
    async findByName(@Body() body:SongNameDTO){
        return await this.SongsService.findByName(body)
    }

    @Get("/songId")
    async findById(@Query("id") id:number) {
        return await this.SongsService.findById(id)
    }

    @Post("/del")
    async delSongById(@Body() body:DeleteSongDto) {
        const { userType } = body
        if(userType === "普通管理员" || userType === "超级管理员"){
            return await this.SongsService.deleteSongById(body.id)
        }
        else{
            return {
                msg:"您不是管理员不能删除数据",
                code:400
            }
        }
    }

    @Post("/modify")
    async modifySong(@Body() body:ModifySongDto){
        const { userType } = body
        if(userType === "普通管理员" || userType === "超级管理员"){
            const data = await this.SongsService.modifySong(body)
            return {
                data,
                code:201
            }
        }
        else{
            return {
                msg:"您不是管理员不能修改歌曲",
                code:400
            }
        }
    }

}