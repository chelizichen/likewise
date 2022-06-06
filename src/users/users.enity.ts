import { Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, AfterInsert, AfterRemove, IsNull } from 'typeorm'
import { adminType } from './user.pipe';
enum UserRole {
    SUPERADMIN="超级管理员",
    ADMIN="普通管理员",
    CommonUser="普通用户"
}
@Entity() // 标注为一个实体类
export class UserEnity{
    @PrimaryGeneratedColumn()
    id:number;

    @PrimaryColumn()
    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    userName:string

    @Column({
        default:UserRole.CommonUser
    })
    userType:adminType

    @AfterInsert()
    logInsert()
    {
        console.log(`insert ID is ${this.id}`);
    }
    @AfterRemove()
    logRemove()
    {
        console.log(`remove Id is ${this.id}`);
    }

}