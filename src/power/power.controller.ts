import { Controller, Get } from "@nestjs/common";
import { PowerService } from "./power.service";

@Controller("power")
export class PowerController
{
    constructor(private readonly PowerService:PowerService){}
    @Get()
    getPower()
    {
        return this.PowerService.getPower()
    }
}