import { Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, AfterInsert, AfterRemove, IsNull } from 'typeorm'
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

    @Column()
    userType:string

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