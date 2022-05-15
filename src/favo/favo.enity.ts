import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FavoEnity{
    @PrimaryColumn()
    userId:number

    @PrimaryColumn()
    songId:number
}