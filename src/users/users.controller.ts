import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import {UserPipe} from './user.pipe'
@Controller('user')
export class UsersController{
    constructor(private readonly UsersService:UsersService) {}

    @Post('/signup')
    createUser(@Body() body:UserPipe)
    {
        return this.UsersService.create(body)
    }
    @Get('/findlist')
    find(@Query() query)
    {
        // const { email } = query
        // console.log(email);
        return this.UsersService.find(query.email)
    }

}