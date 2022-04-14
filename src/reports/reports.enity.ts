import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReportsEnity{
    // 主键
    @PrimaryGeneratedColumn()
    id:number
    // 键
    @Column()
    price:number

}