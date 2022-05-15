import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SongsModule } from "src/songs/songs.module";
import { UsersModule } from "src/users/users.module";
import { FavoController } from "./favo.controller";
import { FavoEnity } from "./favo.enity";
import { FavoService } from "./favo.service";

@Module({
    imports:[TypeOrmModule.forFeature([FavoEnity]),SongsModule,UsersModule],
    controllers:[FavoController],
    providers:[FavoService],
})
export class FavoModule{}