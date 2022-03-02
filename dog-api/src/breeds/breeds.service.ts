import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Breed ,BreedDocument} from 'src/schemas/breeds.schema';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Model } from 'mongoose';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed.name) private breedModel: Model<BreedDocument>) {}

  async create(createBreedDto: CreateBreedDto) : Promise<Breed> {
      return new this.breedModel(createBreedDto).save();
  }

  findAll() {
    return this.breedModel.find();
  }

  findOne(id: number) {
    return this.breedModel.findOne({name});
  }

  update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
