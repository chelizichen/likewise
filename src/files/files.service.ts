import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createWriteStream } from "fs";
import { join } from "path";
import { Repository } from "typeorm";
import { FilesEnity } from "./files.enity";

@Injectable()
export class FilesService{
    constructor(@InjectRepository(FilesEnity) private readonly repo:Repository<FilesEnity>){}
    async UpLoadFile(file){
        const name:string = Date.now() + file.originalname
        const buffer = file.buffer
        const url:string = "/Users/leemulus/Desktop/Nest/like-wise/dist/files/" + name
        // const writeFiles = createWriteStream(join(__dirname,"../../dist/",'upload',name))
        const writeFiles = createWriteStream(join(__dirname,name))
        writeFiles.write(buffer)
        const fileInfo = this.repo.create({
            fileName:name,
            fileUrl:url
        })
        console.log(fileInfo);
        
        return await this.repo.save(fileInfo)
    }
}