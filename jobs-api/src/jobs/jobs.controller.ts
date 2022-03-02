import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { identity } from 'rxjs';
import { jobDto } from './dto/jobs.dto';
import { Job } from './interfaces/jobs.interface';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService : JobsService){}
    @Get(':id')
    find(@Param('id')id): Promise<Job>{
        return this.jobsService.find(id);
    }

    @Post()
    async create(@Res() res ,@Body() jobdto:jobDto){
        const job = await this.jobsService.create(jobdto);
        return res.status(HttpStatus.OK).json({
            response:job
        });
    }

    @Put(':id')
    update(@Param('id')id,@Body()job:jobDto):Promise<Job>{
        return this.jobsService.update(id,job);
    }

    @Delete(':id')
    delete(@Param('id')id):Promise<Job>{
        return this.jobsService.delete(id);
    }
}
