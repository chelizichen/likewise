import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportsController } from "./reports.controller";
import { ReportsEnity } from "./reports.enity";
import { ReportsService } from "./reports.service";

@Module({
    imports:[TypeOrmModule.forFeature([ReportsEnity])],
    controllers:[ReportsController],
    providers:[ReportsService]
})
export class ReportsModule{}