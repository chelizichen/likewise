import { Exclude, Expose } from 'class-transformer'
import {IsEmail, IsNumber, IsOptional, IsString} from 'class-validator'
export type adminType = "超级管理员" | "普通管理员" | "普通用户"
export type ExtractAdmin = Extract<adminType,"超级管理员"|"普通管理员">

// export 
export class ADMINUserPipe{
    // 用户类型
    @IsString()
    adminType:adminType

    @IsString()
    password:string

    @IsEmail()
    email:string

    @IsString()
    userName:string

    // 用户
    @IsString()
    userType:ExtractAdmin
}

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

export class EmailPipe{
    @IsEmail()
    email:string
    
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

    @IsString()
    @IsOptional()
    adminType:adminType

    @IsString()
    userType:ExtractAdmin
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