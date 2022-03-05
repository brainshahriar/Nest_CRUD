import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdService } from './prod.service';
import { Prod } from './schemas/prod.schema';

@Controller('prods')
export class ProdController {
    constructor(private readonly prodService : ProdService){}

    @Post()
    async createProd(@Body() prodDto:Prod){
        return await this.prodService.createProd(prodDto);
    }
    @Get()
    async readProd(){
        return this.prodService.readProd();
    }
    @Put(':id')
    async updateProd(@Param('id') id:string , @Body() update:Prod){
        return await this.prodService.updateProd(id,update);
    }
    @Delete(':id')
    async deleteProd(@Param('id') id:string){
        return await this.prodService.deleteProd(id);
    }
    @Get(':id')
    async findByID(@Param('id') id:string){
        return await this.prodService.findByID(id);
    }
}
