import { HttpCode, Injectable, NotFoundException, Query } from "@nestjs/common";
import { UserEnity } from "./users.enity";
import {  Connection, QueryRunner, Repository, TableColumn } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { InfoPipe, UserPipe } from "./user.pipe";
@Injectable()
export class UsersService
{
    constructor(@InjectRepository(UserEnity) private readonly repo:Repository<UserEnity>){}
    async findByEmail(body:InfoPipe) { 
        const { email } = body
        return this.repo.findOneBy({
            email
        })
    }
    async delUserById(id: number) {
        return await this.repo.delete({
            id
        })
    }
    async create(body:UserPipe){
        const {password,email,userName} = body
        const f_user = await this.repo.findOneBy({
            email
        })
        if(!f_user){
            const c_user =  await this.repo.create({
                password,
                email,
                userName
            })  
            return await this.repo.save(c_user)
        }
        else
        {
            if(f_user.email === email && f_user.password === password ){
                return {
                    Code:201,
                    msg:'登陆成功',
                    user:f_user
                }
            }
            else{
                return  {
                    Code:404,
                    msg:'密码错误'
                }
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
    async getAllUser() {
        const user = await this.repo.find()
        return user
    }

    

    // async addUserType(queryRunner:QueryRunner){
    //     let colum = new TableColumn({
    //         name:"userType",
    //         type:"varchar",
    //         isNullable:true,
    //     })
    //     return queryRunner.addColumn("user_enity",colum)
    // }
}

