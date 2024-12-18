import mongoose from "mongoose";
const cartItemSchema=mongoose.Schema({
    cart_id:{
        type:mongoose.Schema.Types.ObjectId,ref:"Cart",
        required:true
    },
product_id:{
    type:mongoose.Schema.Types.ObjectId,ref:"Product",
    required:true

    }

},{
    timestamps:false
})

const CartItmes=mongoose.model("cartitems",cartItemSchema);
export default CartItmes;