import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    createdAt:{
        type:Date,
        default:Date.now
    }
});