import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FilesEnity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    fileUrl:string

    @Column()
    fileName:string
    
}