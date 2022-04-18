import { Body, Controller, Get, HttpCode, NotFoundException, Param, Post } from "@nestjs/common";
import { UserPipe } from "src/users/user.pipe";
import { UsersService } from "src/users/users.service";
import { PriceDTO } from "./reports.pipe";
import { ReportsService } from "./reports.service";

@Controller('reports')
export class ReportsController{
    constructor(
        private readonly ReportsService:ReportsService,
        private readonly UserService:UsersService
    ) {}

    @Post('/:id')
    async find(@Param("id") id,@Body() body:UserPipe){
        console.log('被请求了');
        const {email,password} = body
        try{
            const data:any = await this.UserService.find(email)
            if(password === data[0].password)
            {
                console.log('验证成功');
                return this.ReportsService.findReports(parseInt(id))
            }
            else
            {
                return  new NotFoundException("数据没有找到")
            }
        }catch(e)
        {
            console.log(e);
            // throw new NotFoundException("数据没有找到")
            // console.log(e);
        }
    }
    @Post("/price")
    create(@Body() body:PriceDTO)
    {
        return this.ReportsService.createReports(body)
    }
        // if(password === data[0].password)
        // {
        //     console.log('验证成功');
        //     return this.ReportsService.findReports(parseInt(id))
        // }
        // console.log(data);
        // console.log();
        // console.log(this.UserService.find(email));
        // if(this.UserService.find(email))
}