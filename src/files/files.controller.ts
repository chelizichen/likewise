import { Controller, Header, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesService } from "./files.service";

@Controller("files")
export class FilesController{
    constructor(private readonly FilesService:FilesService){}
    @UseInterceptors(FileInterceptor("file"))
    @Post('/upload')
    async UploadFile(@UploadedFile() file){
        return await this.FilesService.UpLoadFile(file)
    }
    
}