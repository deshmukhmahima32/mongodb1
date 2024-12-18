// import { response } from 'express';
import Category from '../model/category.model.js';
import Product from '../model/product.model.js'


export const addCategoryPage=async(request,response,next)=>{
     const {id,name}=request.body;
     try{
            const newcategory=new Category({id,name});
            const savedCategory=await newcategory.save();
            response.status(201).json({message:" category addedd successfully"});
     }catch(error){
          response.status(500).json({error:"internal server error"});
     }
     
}

export const viewCategoryPage=async(request,response,next)=>{
     try{
          const result =await Category.find();
          response.status(201).json({result});
     }
     catch{
          response.status(500).json({error:"internal server error"});
     }
}
 
export const deleteCategoryPage=async(request,response,next)=>{
     console.log(request.body)
     const {id}=request.body;

     try{
          let category=await Category.findOne({id})
          if(category){
               await Category.deleteOne({id})
               response.status(201).json({message:" category addedd successfully"});
               
           
          }
          else{
               response.status(404).json({message:" category not found "});
          }

     }catch(error){
          response.status(500).json({error:"internal server error"});
     }
}