import { Injectable } from "@nestjs/common";
import { PowerService } from "src/power/power.service";

@Injectable()
export class CpuService{
    constructor(private readonly PowerService:PowerService) {}
    getCpu()
    {
        this.PowerService.getPower()
        return 'Cpu getting'
    }
}