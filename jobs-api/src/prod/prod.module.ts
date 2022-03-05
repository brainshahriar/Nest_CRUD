import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdController } from './prod.controller';
import { ProdService } from './prod.service';
import { ProdSchema } from './schemas/prod.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:'Prod',schema:ProdSchema}])] ,
    controllers:[ProdController],
    providers:[ProdService]
})
export class ProdModule {} 
