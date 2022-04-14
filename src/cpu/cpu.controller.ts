import { Controller, Get } from "@nestjs/common";
import { CpuService } from "./cpu.service";

@Controller('cpu')
export class CpuController{
    constructor(private readonly CpuService:CpuService) {}
    @Get()
    getCpu()
    {
        return this.CpuService.getCpu()
    }
}