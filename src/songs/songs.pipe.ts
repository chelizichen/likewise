import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

// 普通用户请求歌曲
// 验证请求 需要传 至少Type 
// Singer Rank 为可选项
export class SongsDTO{
    @IsNumber()
    type:number

    @IsOptional()
    @IsString()
    singer:string

    @IsOptional()
    @IsNumber()
    rank:number
}

// 用户接受数据
// 并不返回ID
export class CommonUserDTO{
    @Exclude()
    id:number

    @Exclude()
    type:number

    @Expose()
    songName:string

    @Expose()
    singer:string

    @Expose()
    time:string

    @Expose()
    rank:number
}
