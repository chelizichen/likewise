import { readFile,writeFile } from 'fs/promises'
export class GoodsRepository{
    async findAll()
    {
        const content = await readFile('goods.json','utf8')
        const message = JSON.parse(content)
        return message
    }

    async findOne(id:number)
    {
        const content = await readFile('goods.json','utf8');
        const message = JSON.parse(content)
        return message[id]
    }
    async create(goodsName:string)
    {
        const content = await readFile('goods.json','utf8')
        const message = JSON.parse(content)
        const id = Math.floor(Math.random()*99)
        message[id] = {id,content:goodsName}
    }
}