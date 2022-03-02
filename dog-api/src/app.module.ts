import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [BreedsModule,MongooseModule.forRoot('mongodb+srv://shahriar:shahriarb33343536373839@cluster0.aushq.mongodb.net/breeds?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
