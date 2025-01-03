import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
   name:{
      type:String,
      required:true
   },
   email:{
      type:String,
   },
   phone_no:{
      type:String,
   },
   password:{
      type:String,
   },
   otp:{
      type:String,
   },
   isVerified:{
      type:Boolean,
      default:false
   }
})

const user= mongoose.model('users',userSchema)
export default user