import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilesController } from "./files.controller";
import { FilesEnity } from "./files.enity";
import { FilesService } from "./files.service";

@Module({
    imports:[TypeOrmModule.forFeature([FilesEnity])],
    controllers:[FilesController],
    providers:[FilesService],
    exports:[FilesService]
})
export class FilesModule{}