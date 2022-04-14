import {IsEmail, IsString} from 'class-validator'
export class UserPipe
{
    @IsString()
    password:string

    @IsEmail()
    email:string
}