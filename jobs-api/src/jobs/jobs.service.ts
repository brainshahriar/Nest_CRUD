import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { jobDto } from './dto/jobs.dto';
import { Job } from './interfaces/jobs.interface';

@Injectable()
export class JobsService {
    constructor(@InjectModel('Job') private readonly jobModel : Model<Job>){}

    async find(id:string): Promise<Job>{
        return await this.jobModel.findOne({_id:id})
    }

    async create(jobdto:jobDto){
        return new this.jobModel(jobdto).save();
        
    }

    async update(id:string,job:Job):Promise<Job>{
        return await this.jobModel.findByIdAndDelete(id , job);
    }
   async delete(id:string): Promise<Job>{
       return await this.jobModel.findByIdAndRemove(id);
   }
}
