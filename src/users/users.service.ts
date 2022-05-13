import { HttpCode, Injectable, NotFoundException } from "@nestjs/common";
import { UserEnity } from "./users.enity";
import { Entity, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserPipe } from "./user.pipe";
@Injectable()
export class UsersService
{
    constructor(@InjectRepository(UserEnity) private readonly repo:Repository<UserEnity>){}
    async create(body:UserPipe){
        const {password,email} = body
        const f_user = await this.repo.findBy({
            email
        })
        if(!f_user){
            const c_user =  await this.repo.create({
                password,
                email
            })  
            return await this.repo.save(c_user)
        }
        else
        {
            return  {
                Code:301,
                msg:'用户已存在'
            }
        }
    }
    async find(email:string){
        const user = await this.repo.findBy({
            email
        })
        if(user.length == 0){
            return {
                Code:'404',
                Msg:'没有用户注册'
            }
        }
        return user
    }

    async findOne(id:number){
        const user = await this.repo.findOneBy({
            id
        }) 
        if(user === null){
            HttpCode(404)
            throw new NotFoundException('user not found ')
        }
        else
        {
            return user
        }
    }

    // update 时 需要使用 filter 过滤异常
    async AdminUpdate(id:number,attr:Partial<UserEnity>){
        const user = await this.findOne(id)
        if(!user)
        {
            throw new NotFoundException("没有找到数据")
        }
        Object.assign(user,attr)
        return await this.repo.save(user)
    }
    async Update(attr:Partial<UserEnity>){
        const { email } = attr
        const user = await this.repo.findOneBy({
            email
        })
        Object.assign(user,attr)
        return await this.repo.save(user)
    }

    async remove(id:number){
        const user = await this.findOne(id)
        if(!user)
        {
            throw new NotFoundException("没有找到数据")
        }

        return await this.repo.remove(user)
    }
}