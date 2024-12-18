import mongoose from "mongoose";
import Category from "../model/category.model.js";

const ProductSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true
    },
    category_id:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Category",
     required:true,
    }
},{
    timestamps:false
})
const Product=mongoose.model("product",ProductSchema);
export default Product;