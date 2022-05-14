import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SongsEnity } from "./songs.enity";
import { SongsDTO } from "./songs.pipe";

@Injectable()
export class SongsSerivce{
    constructor(@InjectRepository(SongsEnity) private readonly repo:Repository<SongsEnity>){}
    async testPost(body: SongsDTO) {
        const { type } = body
        return this.repo.findBy({
            type
        })
    }
    testGet()
    {
        return "123"
    }
}