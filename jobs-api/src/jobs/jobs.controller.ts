import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { jobDto } from './dto/jobs.dto';
import { Job } from './interfaces/jobs.interface';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService : JobsService){}
    @Get()
    async find(@Res() res){
        const job = await this.jobsService.findAll();
        return res.status(HttpStatus.OK).json({
            response:job
        });
    }

    @Post()
    async create(@Res() res ,@Body() jobdto:jobDto){
        const job = await this.jobsService.create(jobdto);
        return res.status(HttpStatus.OK).json({
            response:job
        });
    }

    @Put(':id')
    async update(@Param('id') id: string ,@Body() jobdto:jobDto){
        return await this.jobsService.update(id,jobdto);
        // return res.status(HttpStatus.OK).json({
        //     response:job
        // });
    }

    @Delete(':id')
    async delete(@Res() res,@Param('id') id: string ,@Body() job:jobDto){
         await this.jobsService.delete(id,job);
            return res.status(HttpStatus.OK).json({
            response:"Deleted"
        });
    }
}
