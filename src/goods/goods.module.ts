import { Module } from "@nestjs/common";
import { GoodsController } from "./goods.controller";
import { GoodsRepository } from "./goods.repository";
import { GoodsService } from "./goods.service";

@Module({
    // imports:[],
    controllers:[GoodsController],
    providers:[GoodsService,GoodsRepository]
})
export class GoodsModule
{
    
}