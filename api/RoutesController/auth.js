import User from "../models/user.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        }
        )
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
} 


export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return (next(createError(404,"找不到該用戶")))
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return (next(createError(400,"密碼錯誤或是帳號")))
        
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin },process.env.JWT)
        const {password, isAdmin, ...otherDetails} =user._doc;
        res
        .cookie('access_token',token,{
            httpOnly: true
        })
        .status(200)
        .json({details:{...otherDetails}, isAdmin})
    } catch (error) {
        next(error)
    }
} 
