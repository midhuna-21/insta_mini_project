import mongoose from "mongoose";

export const connect =async()=>{
   try{
      mongoose.connect(process.env.MONGO_URI).then(()=>{
         console.log('mongoose connected successfully')
      }).catch((error)=>{
         console.error(error)
      })
   }catch(error){
      console.error("An error while connecting mongoose")
      
   }
}