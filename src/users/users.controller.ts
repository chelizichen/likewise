import { Body, Controller, Delete, Get, Param, Post, Query,Patch, NotFoundException, HttpCode, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import {AdminUserDTO, InfoPipe, UpdateDTO, UserDTO, UserPipe} from './user.pipe'
import { SerializeInterceptor } from "src/interceptor/serialize.interceptor";
@Controller('user')
export class UsersController{
    constructor(private readonly UsersService:UsersService) {}

    @Post('/signup')
    async createUser(@Body() body:UserPipe){
        return await this.UsersService.create(body)
    }

    @Post('/info')
    async findByEmail(@Body() body:InfoPipe)
    {
        return await this.UsersService.findByEmail(body)
    }

    @UseInterceptors(new SerializeInterceptor(UserDTO))
    @Get("/:id") // 在Url 中 Id 会被解析称为 string  的类型
    async findUser(@Param("id") id:string){
        console.log('步骤2 请求处理完但未发出');
        return await this.UsersService.findOne(parseInt(id))
    }

    @UseInterceptors(new SerializeInterceptor(AdminUserDTO))
    @Get("/admin/:id")
    async adminFindUser(@Param("id") id:string){
        console.log('步骤2 请求处理完但未发出');
        return await this.UsersService.findOne(parseInt(id))
    }

    @Get()
    async findAllUsers(@Query('email') email:string){
        return this.UsersService.find(email)
    }

    @Get("/admin/delete/:id")
    async deleteUser(@Param("id") id:string){
        return await this.UsersService.remove(parseInt(id))
    }

    @Post("/admin/update/:id")
    AdminupdateUser(@Param("id") id:string,@Body() body:UpdateDTO){
        return this.UsersService.AdminUpdate(parseInt(id),body)
    }
    @Post("/update")
    updateUser(@Body() body:UpdateDTO){
        return this.UsersService.Update(body)
    }
}