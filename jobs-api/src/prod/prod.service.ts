import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Prod, ProdDocument } from './schemas/prod.schema';
import {Model} from 'mongoose'

@Injectable()
export class ProdService {
    constructor(
        @InjectModel('Prod') private readonly prodModel:Model<ProdDocument>
    ){}
    //create user
    async createProd(prod:Prod):Promise<Prod>{
        const newProd = new this.prodModel(prod)
        return await newProd.save()
    }
    //readProd
    async readProd(){
        return await this.prodModel.find()
    }
    //update Prod
    async updateProd(id:string,data:Prod):Promise<Prod>{
        return await this.prodModel.findByIdAndUpdate(id,data,{new:true})
    }
    //delete
    async deleteProd(id:string){
        return await this.prodModel.findByIdAndDelete(id);
    }
    //finby id
    async findByID(id:string){
        return await this.prodModel.findById(id)
    }
}
