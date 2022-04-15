import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReportsEnity } from "./reports.enity";

@Injectable()
export class ReportsService
{
    constructor(@InjectRepository(ReportsEnity) private readonly Repo : Repository<ReportsEnity>) {
        
    }
    findReports()
    {
        return this.Repo.find()
    }
    createReports()
    {
        const content = this.Repo.create({
            
        })
        return this.Repo.save(content)
    }
}