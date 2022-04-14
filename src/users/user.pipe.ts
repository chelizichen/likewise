import {IsEmail, IsOptional, IsString} from 'class-validator'
export class UserPipe
{
    @IsString()
    password:string

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
}