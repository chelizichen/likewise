import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEnity } from "./users.enity";
import { AuthService } from "./auth.service";

@Module({
    imports:[TypeOrmModule.forFeature([UserEnity])],
    controllers:[UsersController],
    providers:[UsersService,AuthService],
    exports:[UsersService]
})
export class UsersModule{}