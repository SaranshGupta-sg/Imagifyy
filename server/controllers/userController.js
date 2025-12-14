import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { useMemo } from "react";

const registerUser = async (requestAnimationFrame, res) => {
    try {
        const {name,email,password} = requestAnimationFrame.body;

        if (!name || !email || !password) {
            return res.json({success:false, message: 'Missing Details'})
       }

       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password, salt)

       const userData = {
        name,
        email,
        password: hashedPassword
       }

       const newUser = new userModel(userData)
       const user = await newUser.save()

       const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

       res.json({success: true, token, user: {name: user.name}})
 
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

