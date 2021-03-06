import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createWriteStream } from "fs";
import { join } from "path";
import { SongsSerivce } from "src/songs/songs.service";
import { UsersService } from "src/users/users.service";
import { Repository } from "typeorm";
import { SetFavoInterface } from "./favo.controller";
import { FavoEnity } from "./favo.enity";

@Injectable()
export class FavoService {
    constructor(@InjectRepository(FavoEnity) private readonly repo:Repository<FavoEnity>,
        private readonly UserService:UsersService,
        private readonly SongsService:SongsSerivce
    ){}
    async SetFavo(query:SetFavoInterface){
        const { userId, songId } = query
        const UserObj = await this.UserService.findOne(userId)
        const SongObj = await this.SongsService.findById(songId)
        const item = await this.repo.create({
            userId:UserObj['id'],
            songId:SongObj['id']
        })
        return await this.repo.save(item)
    }
    async findAllFav(id: number) {
        console.log("id",id);
        const SongId = await this.repo.findBy({
            userId:id
        })
        console.log(SongId);
        const allSongs = []
        for(let v of SongId){
            console.log(v.songId);
            allSongs.push(await this.SongsService.findById(v.songId))
        }
        return allSongs
        // console.log(SongId);
        
    }
    async SetDisFav(query: SetFavoInterface) {
        const { userId, songId } = query
        const UserObj = await this.UserService.findOne(userId)
        const SongObj = await this.SongsService.findById(songId)
        const item = await this.repo.findOneBy({
            userId:UserObj['id'],
            songId:SongObj['id']
        })
        return await this.repo.delete(item)
    }
}
