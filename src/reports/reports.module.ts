import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "src/users/users.module";
import { ReportsController } from "./reports.controller";
import { ReportsEnity } from "./reports.enity";
import { ReportsService } from "./reports.service";

@Module({
    imports:[TypeOrmModule.forFeature([ReportsEnity]),UsersModule],
    controllers:[ReportsController],
    providers:[ReportsService]
})
export class ReportsModule{}