import mongoose from "mongoose";

const cartSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:"User",
        required:true
    }

},{
    timestamps:false
});

const Cart=mongoose.model("cart",cartSchema);
export default Cart;
