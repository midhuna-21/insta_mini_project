import post from "../models/postModel"
import user from "../models/userModel"

export const createPost = async(req,res)=>{
   try{
      const {post_title,description,userTags,userId}=req.body
      const isUser = await user.findById({_id:userId})
      let images =[]
      if(req.file){

      }
      if(isUser){
         const newPost = new post({
            post_title,
            description,
            userTags,
            images:images
         })
      }
   }catch(error){
      console.error(error)
      res.status(400).json({message:'An error occurred while creating post'})
   }
}