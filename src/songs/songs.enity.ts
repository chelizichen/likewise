import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SongsEnity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    songName:string

    @Column()
    singer:string

    @PrimaryColumn()
    @Column({default:0})
    rank:number

    @Column()   
    time:string

    @Column() // 1 飙升榜 2 新歌榜 3 原创榜
    type:number
}