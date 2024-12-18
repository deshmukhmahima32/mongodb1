// import { response } from 'express';
import  Product from '../model/product.model.js';
import Category from '../model/category.model.js';


export const addProductPage=async(request,response,next)=>{
     const {id,name,price,category_id}=request.body;
     try{
            const newproduct=new Product({id,name,price,category_id});
            const savedproduct=await newproduct.save();
            response.status(201).json({message:" product addedd successfully"});
     }catch(error){
          response.status(500).json({error:"internal server error"});
     }
     
}
export const viewProductPage1 = async (request, response, next) => {
    try {
      
      const result = await Product.find().populate("category_id");
  
      
      response.status(200).json({ result });
    } catch (err) {
      console.error("Error fetching products:", err); 
      response.status(500).json({ error: "Internal server error" });
    }
  };
  export const viewProductPage = async (request, response, next) => {
    try {
      
      const result = await Product.find()
  
      
      response.status(200).json({ result });
    } catch (err) {
      console.error("Error fetching products:", err); 
      response.status(500).json({ error: "Internal server error" });
    }
  };
 
export const deleteProductPage=async(request,response,next)=>{
     console.log(request.body)
     const {id}=request.body;

     try{
          let product=await Product.findOne({id})
          if(product){
               await Product.deleteOne({id})
               response.status(201).json({message:" product delete successfully"});
               
           
          }
          else{
               response.status(404).json({message:" product not found "});
          }

     }catch(error){
          response.status(500).json({error:"internal server error"});
     }
}