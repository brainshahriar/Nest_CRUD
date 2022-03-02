import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { jobDto } from './dto/jobs.dto';
import { Job } from './interfaces/jobs.interface';

@Injectable()
export class JobsService {
    constructor(@InjectModel('Job') private readonly jobModel : Model<Job>){}

    async findAll(){
        return await this.jobModel.find();
    }

    async create(jobdto:jobDto){
        return new this.jobModel(jobdto).save();   
    }

    async update(id:string,job:jobDto){
        return await this.jobModel.findByIdAndUpdate(id , job , {new : true});
    }
   async delete(id:string,job:jobDto){
       return await this.jobModel.findByIdAndDelete(id,job);
   }
}
