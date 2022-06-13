import { BadRequestException, Injectable } from "@nestjs/common";
import { UserPipe } from "./user.pipe";
import { UsersService } from "./users.service";

@Injectable()   
export class AuthService{
    constructor(private UserService:UsersService){}

    // 注册验证
    async signUp(body:UserPipe){
        const {email,password,userName} = body
        const user = await this.UserService.findByEmail({email})
        if(user){
            throw new BadRequestException("用户已存在")
        }else{
            return await this.UserService.singUp({email,password,userName})
        }
        // return await this.UserService.create({email,password})
    }

    // 登陆验证
    async signIn(body:UserPipe){
        const {email,password} = body
        const user = await this.UserService.findByEmail({email})
        console.log(user);
        if(user){
            if(user.password === password){
                return {
                    Code:201,
                    msg:'登陆成功',
                    user
                }
            }
            else{
                throw new BadRequestException("密码错误")
            }
        }
        else{
            throw new BadRequestException("用户不存在")
        }
    }
}