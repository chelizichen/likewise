import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReportsEnity } from "./reports.enity";

@Injectable()
export class ReportsService
{
    constructor(
        @InjectRepository(ReportsEnity) private readonly Repo : Repository<ReportsEnity>,
        
    ) {}
    findReports(id:number)
    {
        return this.Repo.findOneBy({id})
    }
    createReports(body)
    {
        const {price} = body
        const content = this.Repo.create({
            price
        })
        return this.Repo.save(content)
    }
}