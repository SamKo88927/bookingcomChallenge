import jwt from "jsonwebtoken";
import { errorMessage } from "./errorMessage.js";


export const verifyToken =(req,res, next)=>{
const token = req.cookies.access_token;
if(!token){
    return  next(errorMessage(401, "你沒有權限"))

}
jwt.verify(token, process.env.JWT, (err,user)=>{
    if(err) return  next(errorMessage(403, "TOKEN過期"))
    req.user=user;
    next()
})
}
export const verifyUser =(req,res, next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id==req.params.id || req.user.isAdmin){
            next()
        }else{
            next(errorMessage(403, "你沒有權限"))
        }
    })
}
export const verifyAdmin =(req,res, next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            next(errorMessage(403,"你沒有此權限"))
        }
    })
}