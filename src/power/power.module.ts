import { Module } from "@nestjs/common";
import { PowerController } from "./power.controller";
import { PowerService } from "./power.service";

@Module({
    controllers:[PowerController],
    providers:[PowerService]
})
export class PowerModule{}