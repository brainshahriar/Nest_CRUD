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

    @Get(':id')
    async findbyID(@Res() res,@Param('id') id: string ){
        const job = await this.jobsService.findbyID(id);
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
    async update(@Res() res,@Param('id') id: string ,@Body() jobdto:jobDto){
        await this.jobsService.update(id,jobdto);
        return res.status(HttpStatus.OK).json({
            response:"updated"
        });
    }

    @Delete(':id')
    async delete(@Res() res,@Param('id') id: string){
         await this.jobsService.delete(id);
            return res.status(HttpStatus.OK).json({
            response:"Deleted"
        });
    }
}
