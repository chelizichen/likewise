import { Module } from "@nestjs/common";
import { GoodsController } from "./goods.controller";
import { GoodsService } from "./goods.service";

@Module({
    // imports:[],
    controllers:[GoodsController],
    providers:[GoodsService]
})
export class GoodsModule
{
    
}