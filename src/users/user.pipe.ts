import { Exclude, Expose } from 'class-transformer'
import {IsEmail, IsNumber, IsOptional, IsString} from 'class-validator'
export type adminType = "超级管理员" | "普通管理员"
export class UserPipe{
    @IsString()
    password:string

    @IsEmail()
    email:string

    @IsOptional()
    @IsString()
    userName:string
}
export class InfoPipe{
    @IsString()
    email:string
    
    @IsOptional()
    password:string
}
export class UpdateDTO
{
    @IsString()
    @IsOptional()
    email:string

    @IsString()
    @IsOptional()
    password:string

    @IsString()
    @IsOptional()
    userName:string
}

export class DelUserDTO{
    @IsString()
    userType:adminType

    @IsNumber()
    id:number
}
export class UserDTO{
    // 一个是展示 一个是不展示
    @Expose()
    // @Exclude()
    id:number
    
    @Expose()
    email:string

    @Exclude()
    password:string

}

export class AdminUserDTO{
    // 一个是展示 一个是不展示
    @Expose()
    // @Exclude()
    id:number
    
    @Expose()
    email:string

    @Expose()
    password:string
}