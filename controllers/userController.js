import user from "../models/userModel";
import bcrypt from "bcryptjs";
import randomstring from "randomstring";
import post from "../models/postModel";
import jwt from 'jsonwebtoken';

function generateOtp() {
    return randomstring.generate({
        length: 6,
        charser: "numeric",
    });
}

function generateTokens(userId){
   let jwtsecretkey = process.env.JWT_SECRET;
   let data = userId
   const token = jwt.token(data,jwtsecretkey)
   res.cookie('token',token,{
      expires:'1hr'
   })
   return token
}
export const register = async (req, res) => {
    try {
        const { name, email, password, phone_no } = req.body;
        const isExistUser = await user.findOne({ email: email });
        if (isExistUser) {
            return res.status(409).json({ message: "user Already exist" });
        }
        const securePassword = bcrypt.hash(password);
        // const otp=await generateOtp()
        const userData = new user({
            name,
            email,
            securePassword,
            phone_no,
        });
        await userData.save();
        res.status(200).json("user adding successfully");
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "An error occurred while registering user",
        });
    }
};


export const login = async (req, res) => {
   try {
       const { email, password } = req.body;
       const isExistUser = await user.findOne({ email: email });
       if (!isExistUser) {
           return res.status(404).json({ message: "user not exist" });
       }
       const comparedPassword = bcrypt.compare(password,isExistUser.password);
       if(comparedPassword){
         const userId = isExistUser._id
         const generateToken = await generateTokens(userId)

         res.status(200).json("user logged successfully");
       }
       
   } catch (error) {
       console.error(error);
       res.status(400).json({
           message: "An error occurred while logging user",
       });
   }
};

