import { Controller, Get } from "@nestjs/common";
import { ReportsService } from "./reports.service";

@Controller('reports')
export class ReportsController{
    constructor(private readonly ReportsService:ReportsService) {}
    @Get('test')
    testGet(){}
}