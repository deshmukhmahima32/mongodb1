import express from "express";
import {addCartProduct, getCartItems,getCartItems1} from "../controller/cart.controller.js"
const router=express.Router();
// router.get('/view-cart',viewCartAction);
// router.delete("/delete-cart-product",deleteCartProduct);
router.post("/add-cart-product",addCartProduct);
router.get('/cart',getCartItems1);
router.get('/cart/:user_id',getCartItems1);
export default router;
