import express from "express";
import { viewProductPage,addProductPage,deleteProductPage,viewProductPage1 } from "../controller/product.controller.js";
const router=express.Router();

router.post('/add-product',addProductPage);

router.get('/view-product',viewProductPage);
router.get('/',viewProductPage1);
router.delete('/delete-product',deleteProductPage);
export default router;
