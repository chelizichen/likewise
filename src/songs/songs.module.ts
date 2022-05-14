import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SongsController } from "./songs.controller";
import { SongsEnity } from "./songs.enity";
import { SongsSerivce } from "./songs.service";

@Module({
    imports:[TypeOrmModule.forFeature([SongsEnity])],
    controllers:[SongsController],
    providers:[SongsSerivce], 
    exports:[SongsSerivce]
})
export class SongsModule{}