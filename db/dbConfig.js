import mongoose from "mongoose"
import dotenv  from "dotenv"
const ConnectMongo=async()=>{

    try{
        dotenv.config();
        const mongoURI = process.env.MONGO_URI;
        
        await mongoose.connect(mongoURI,{
            

        });
        console.log("mongodb connected successfully");
        
    }catch(err){
        console.log('mongodb not connecterd ',err);
        process.exit(1);
    }
}
export default ConnectMongo;