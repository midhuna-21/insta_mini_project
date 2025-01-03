import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
   post_title:{
      type:String,

   },
   images:{
      type:[String]
   },
   description:{
      type:String
   },
   userTag:{
      type:[String]
   },
   user:{
      type:String,
      ref:'users'
   }
})

const post = mongoose.model('post',postSchema);
export default post;