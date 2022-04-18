import { Body, Controller, Delete, Get, Param, Post, Query,Patch, NotFoundException, HttpCode, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import {AdminUserDTO, UpdateDTO, UserDTO, UserPipe} from './user.pipe'
import { SerializeInterceptor } from "src/interceptor/serialize.interceptor";
@Controller('user')
export class UsersController{
    constructor(private readonly UsersService:UsersService) {}

    @Post('/signup')
    createUser(@Body() body:UserPipe)
    {
        return this.UsersService.create(body)
    }
    @UseInterceptors(new SerializeInterceptor(UserDTO))
    @Get("/:id") // 在Url 中 Id 会被解析称为 string  的类型
    async findUser(@Param("id") id:string)
    {
        console.log('步骤2 请求处理完但未发出');
        const user = await this.UsersService.findOne(parseInt(id))
        if(user === null)
        {
            HttpCode(404)
            throw new NotFoundException('user not found ')
        }
        return user
    }

    @UseInterceptors(new SerializeInterceptor(AdminUserDTO))
    @Get("/admin/:id")
    async adminFindUser(@Param("id") id:string)
    {
        const user = await this.UsersService.findOne(parseInt(id))
        if(user === null)
        {
            HttpCode(404)
            throw new NotFoundException('user not found ')
        }
        return user
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