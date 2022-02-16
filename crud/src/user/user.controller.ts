import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private productservice:UserService){ }

@Post('create')
 async createPost(@Res() res, @Body() createProductDTO : CreateProductDto ){
    // console.log(createProductDTO)
    const product = await this.productservice.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
        message:'Created',
        product:product
    });
}
@Get('/')
async getProducts(@Res() res){
    const products = await this.productservice.getProducts();
    return res.status(HttpStatus.OK).json(
        products
    );
}
@Get('/:productID')
async getProduct(@Res() res , @Param('productID')productID){
    const product = await this.productservice.getProduct(productID);
    if(!product) throw new NotFoundException('Product Does Mot Exists');
    return res.status(HttpStatus.OK).json(product);
}
@Delete('/:productID')
async deleteProduct(@Res() res ,@Param('productID')productID){
    const productDeleted = await this.productservice.deleteProduct(productID);
    if(!productDeleted) throw new NotFoundException('Not Found');
    return res.status(HttpStatus.OK).json({
        message:"Delete Success",
        productDeleted
    })
}
@Put('/:productID')
async updateProduct(@Res() res ,@Body() createProductDTO : CreateProductDto,@Param('productID')productID){
    const updateProduct = await this.productservice.updateProduct(productID,createProductDTO);
    if(!updateProduct) throw new NotFoundException('Deleted');
    return res.status(HttpStatus.OK).json({
        message:"Update Success",
        updateProduct
    })
}

}
