import { Injectable } from "@nestjs/common";

@Injectable()
export class PowerService
{
    getPower()
    {
        return 'power is getting'
    }
}