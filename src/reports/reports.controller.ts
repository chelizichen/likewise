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
        const data:any = await this.UserService.find(email)
        if(password === data[0].password)
        {
            console.log('验证成功');
            return this.ReportsService.findReports(parseInt(id))
        }
        else
        {
            throw new NotFoundException("数据没有找到")
        }

    }
    @Post("/price")
    create(@Body() body:PriceDTO)
    {
        return this.ReportsService.createReports(body)
    }
}