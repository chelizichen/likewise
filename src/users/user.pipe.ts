import { Exclude, Expose } from 'class-transformer'
import {IsEmail, IsNumber, IsOptional, IsString} from 'class-validator'
export class UserPipe
{
    @IsString()
    password:string

    @IsEmail()
    email:string
    
    @IsOptional()
    @IsString()
    userName:string
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