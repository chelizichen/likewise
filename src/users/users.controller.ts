import { Body, Controller, Delete, Get, Param, Post, Query,Patch, NotFoundException, HttpCode, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import {AdminUserDTO, ADMINUserPipe, DelUserDTO, InfoPipe, UpdateDTO, UserDTO, UserPipe} from './user.pipe'
import { SerializeInterceptor } from "src/interceptor/serialize.interceptor";
import { AuthService } from "./auth.service";
@Controller('user')
export class UsersController{
    constructor(private readonly UsersService:UsersService,
        private readonly AuthService:AuthService) {}

    @Post('/signup')
    async createUser(@Body() body:UserPipe){
        return await this.AuthService.signUp(body)
    }
    
    @Post("/signin")
    async login(@Body() body:UserPipe){
        return await this.AuthService.signIn(body)
    }
    
    @Post("/admin/create")
    async adminCreateUser(@Body() body:ADMINUserPipe){
        const { userType } = body
        if(userType === "普通管理员" || userType === "超级管理员"){
            return await this.UsersService.adminCreate(body)
        }else{
            return "您不是管理员"
        }
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
    async AdminupdateUser(@Param("id") id:string,@Body() body:UpdateDTO){
        return await this.UsersService.AdminUpdate(parseInt(id),body)
    }
    @Post("/update")
    async updateUser(@Body() body:UpdateDTO){
        return await this.UsersService.Update(body)
    }

    @Post("/list")
    async postAllUser(){
        return await this.UsersService.getAllUser()
    }
    @Get("/list")
    async getAllUser(){
        return await this.UsersService.getAllUser()
    }

    @Post("/deluser")
    async name(@Body() body:DelUserDTO) {
        if(body.userType === "超级管理员" || body.userType === "普通用户"){
            return await this.UsersService.delUserById(body.id)
        }else{
            return "删除失败"
        }
    }

    // @Post("/add")
    // async addcolumn(){
    //     const connection = getConnection()
    //     const queryRunner:QueryRunner = connection.createQueryRunner()
    //     return await this.UsersService.addUserType(queryRunner);
    // }
}