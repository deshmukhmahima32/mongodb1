import mongoose from "mongoose";
const CategorySchema=mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:false
});


const Category=mongoose.model("category",CategorySchema);

export default Category;