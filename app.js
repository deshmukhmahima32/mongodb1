import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ConnectMongo from "./db/dbConfig.js";
import UserRouter from "./routes/user.route.js";
import ProductRouter from "./routes/product.route.js"
import CategoryRouter from "./routes/category.route.js"
import CartRouter from "./routes/cart.route.js"

dotenv.config();
const app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

ConnectMongo();
app.use("/user",UserRouter);
app.use("/product",ProductRouter);
app.use("/category",CategoryRouter);
app.use("/cart",CartRouter)

app.get('/', (req, res) => {
    res.send('API is running...');
  });


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server started.....");
    
})





