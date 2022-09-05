import user from "../models/user.js"


export const updatedUser = async (req, res, next) => {
    try{
        const updatedUser = await user.findByIdAndUpdate(req.params.id,{$set:req.body}
            ,{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}
export const deletedUser = async (req, res, next) => {
    try{
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("用戶成功刪除")
    } catch (error) {
        next(error)
    }
}
export const getUser = async (req, res, next) => {
    try{
        const getUser= await user.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}
export const getUsers = async (req, res, next) => {
    try{
        const getUsers= await user.find()
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}