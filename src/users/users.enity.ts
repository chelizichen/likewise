import { Entity,Column,PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'
@Entity() // 标注为一个实体类
export class UserEnity{
    @PrimaryColumn()
    id:number

    @Column()
    email:string;

}