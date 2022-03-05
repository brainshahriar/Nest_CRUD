import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { ProdController } from './prod/prod.controller';
import { ProdService } from './prod/prod.service';
import { ProdModule } from './prod/prod.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://shahriar:shahriarb33343536373839@cluster0.aushq.mongodb.net/crud?retryWrites=true&w=majority'), JobsModule, ProdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
