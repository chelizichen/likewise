import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer";
import { map, Observable } from "rxjs";

export type ClassConstructor={
    new(...args:any[]):{}
}
export function Serialze(dto:ClassConstructor){
    return UseInterceptors(new SerializeInterceptor(dto))
} 
export class SerializeInterceptor implements NestInterceptor
{
    constructor( private dto:ClassConstructor){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        // 执行某些事 在请求被处理之前
        console.log('步骤1请求处理之前');
        
        return next.handle().pipe(
            // 处理完请求 但是在发出之前
            map((data:any)=>{
                console.log('步骤3 请求处理完 但在发送之前',data);
                return plainToInstance(this.dto,data,{
                    excludeExtraneousValues:true
                })
            })
        )
    }
} 
