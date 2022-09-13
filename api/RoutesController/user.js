import { errorMessage } from "../errorMessage.js";
import User from "../models/User.js";

//更新使用者 跟hotel的CRUD一模一樣
export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    try{
    const updateUserNameWrong = await User.findOne({username:body.username})
    const updateEmailWrong= await User.findOne({email:body.email})
    const originalUser = await User.findById(id) // 找到原本要更新得使用者資料
    if(updateUserNameWrong && updateUserNameWrong.id != originalUser.id )return(next(errorMessage(400, "錯誤，此名稱已使用")))
    if(updateEmailWrong && updateEmailWrong.id != originalUser.id )return(next(errorMessage(400, "錯誤，此信箱已使用")))
    
    const updatedUser  = await User.findByIdAndUpdate(id,{$set:body}
            ,{new:true})
        res.status(200).json(updatedUser )
    } catch (error) {
        next(errorMessage(500,"更改用戶失敗",error))
    }
}
//刪除使用者
export const deletedUser = async (req, res, next) => {
    const id = req.params.id;
    try{
        await User.findByIdAndDelete(id)
        res.status(200).json("用戶成功刪除")
    } catch (error) {
        next(errorMessage(500,"刪除用戶失敗",error))
    }
}
//讀取使用者資料
export const getUser = async (req, res, next) => {
    const id = req.params.id;
    try{
        const getUser= await User.findById(id)
        res.status(200).json(getUser)
    } catch (error) {
        next(errorMessage(500,"讀取用戶失敗",error))
    }
}
//讀取全部使用者資料
export const getAllUsers = async (req, res, next) => {
    try{
        const getUsers= await User.find()
        res.status(200).json(getUsers)
    } catch (error) {
        next(errorMessage(500,"讀取全部用戶失敗",error))
    }
}
