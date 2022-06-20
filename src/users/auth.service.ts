import { BadRequestException, Injectable } from "@nestjs/common";
import { UserPipe } from "./user.pipe";
import { UsersService } from "./users.service";
import { randomBytes,scrypt as _scrypt } from 'crypto' // 密码 加密 解密的方法
import { promisify } from 'util'

let scrypt = promisify(_scrypt)

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
            const salt = randomBytes(8).toString('hex')
            const hash =  ( await scrypt(password,salt,32) ) as Buffer
            const result = salt + '.' + hash.toString('hex')
            const user = await this.UserService.singUp({email,password:result,userName})
            return user
        }
    }

    // 登陆验证
    async signIn(body:UserPipe){
        const {email,password} = body
        const user = await this.UserService.findByEmail({email})

        if(user){
            // 解密
            const [salt,storedHash] = user.password.split('.');
            const hash = ( await scrypt(password,salt,32) ) as Buffer
            if(storedHash === hash.toString('hex')){
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