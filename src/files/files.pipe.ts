import { IsString } from "class-validator";

export class FilesDTO{
    @IsString()
    fileUrl:string
    
    @IsString()
    fileName:string
}