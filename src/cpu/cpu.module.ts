import { Module } from "@nestjs/common";
import { PowerModule } from "src/power/power.module";
import { CpuController } from "./cpu.controller";
import { CpuService } from "./cpu.service";

@Module({
    imports:[PowerModule],
    controllers:[CpuController],
    providers:[CpuService]
})
export class CpuModule{}