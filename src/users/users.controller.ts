import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('user')
export class UsersController{
    constructor(private readonly UsersService:UsersService) {}
    @Get()
    getCpu()
    {
        // return this.UsersService
    }
}