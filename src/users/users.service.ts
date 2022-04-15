import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEnity } from "./users.enity";
import { Entity, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserPipe } from "./user.pipe";
@Injectable()
export class UsersService
{
    constructor(@InjectRepository(UserEnity) private readonly repo:Repository<UserEnity>){}
    create(body:UserPipe)
    {
        const {password,email} = body
        const user =  this.repo.create({
            password,
            email
        })  
        // 若利用普通对象 使用 save 将不会调用hooks 
        // 只有在使用实例的情况下使用 save 才会 调用 hooks 
        return this.repo.save(user)
    }
    find(email:string){
        return this.repo.findBy({
            email
        })
    }

    findOne(id:number){
        return this.repo.findOneBy({
            id
        })
    }

    async update(id:number,attr:Partial<UserEnity>){
        const user = await this.findOne(id)
        if(!user)
        {
            throw new NotFoundException("没有找到数据")
        }
        Object.assign(user,attr)

        return this.repo.save(user)
    }
    async remove(id:number){
        const user = await this.findOne(id)
        if(!user)
        {
            throw new NotFoundException("没有找到数据")
        }

        return this.repo.remove(user)
    }
}