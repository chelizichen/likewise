import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SongsEnity } from "./songs.enity";
import { AddSongDTO, SongNameDTO, SongsDTO } from "./songs.pipe";

@Injectable()
export class SongsSerivce{
    constructor(@InjectRepository(SongsEnity) private readonly repo:Repository<SongsEnity>){}
    async deleteSongById(id: number) {
        return await this.repo.delete({
            id
        })
    }

    async addSongs(body: AddSongDTO) {
        const {singer,songName,time,type,rank} = body
        const newSong = this.repo.create({
            singer,
            songName,
            time,
            type,
            rank,
        })
        return this.repo.save(newSong)
    }

    async findByType(body: SongsDTO) {
        const { type } = body
        return this.repo.findBy({
            type
        })
    }
    async getAllSongs(){
        return await this.repo.find()
    }
    async findByName(body:SongNameDTO){
        const { songName } = body
        return await this.repo.query(`select * from songs_enity where songName like "%${songName}%"`)
    }
    async findById(id:number){
        return await this.repo.findOneBy({
            id
        })
    }
}