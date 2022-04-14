import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEnity } from "./users.enity";

@Module({
    imports:[TypeOrmModule.forFeature([UserEnity])],
    controllers:[UsersController],
    providers:[UsersService],
})
export class UsersModule{}