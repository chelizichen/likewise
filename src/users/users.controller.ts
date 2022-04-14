import { Body, Controller, Delete, Get, Param, Post, Query,Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import {UpdateDTO, UserPipe} from './user.pipe'
@Controller('user')
export class UsersController{
    constructor(private readonly UsersService:UsersService) {}

    @Post('/signup')
    createUser(@Body() body:UserPipe)
    {
        return this.UsersService.create(body)
    }
    @Get("/:id") // 在Url 中 Id 会被解析称为 string  的类型
    findUser(@Param("id") id:string)
    {
        return this.UsersService.findOne(parseInt(id))
    }

    @Get()
    findAllUsers(@Query('email') email:string)
    {
        return this.UsersService.find(email)
    }

    @Delete("/:id")
    deleteUser(@Param("id") id:string)
    {
        console.log(id);
        console.log(typeof id);
        
        return this.UsersService.remove(parseInt(id))
    }

    @Patch("/:id")
    updateUser(@Param("id") id:string,@Body() body:UpdateDTO)
    {
        return this.UsersService.update(parseInt(id),body)
    }


}