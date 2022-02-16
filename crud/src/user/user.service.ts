import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('Product') private readonly productModel : Model<Product>){}

    async getProducts():Promise<Product[]>{
        const products = await this.productModel.find();
        return products;
    }
    async getProduct(productID : string): Promise<Product>{
        const product = await this.productModel.findById(productID);
        return product;
    }
    async createProduct(createProductDTO:CreateProductDto):Promise<Product>{
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }
    async deleteProduct(productID : string) : Promise<Product>{

        const deleteProduct = await this.productModel.findByIdAndDelete(productID);
        return deleteProduct;
    }
    async updateProduct(productID:string,createProductDTO:CreateProductDto):Promise<Product>{
        const updateProduct = await this.productModel.findByIdAndUpdate(productID,createProductDTO,{new:true});
        return updateProduct;
    }

}
