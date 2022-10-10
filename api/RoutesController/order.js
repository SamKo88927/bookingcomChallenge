
import { errorMessage } from "../errorMessage.js"
import Order from "../models/Order.js"
export const createOrder = async(req,res,next)=>{ //新增next
    const newOrder = new Order(req.body) 
    try {
        const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    } catch (error) {
        res.send(error)
        next(errorMessage(500,"建立訂單失敗，請確認格式")) //後來我們想要客製化的
    }
}
export const getOrder = async(req,res,next)=>{
    const id = req.params.id;
    try{
       const getOrder = await Order.findById(id)
        res.status(200).json(getOrder)
    }catch(error){
        next(errorMessage(500,"找不到訂單資料，請檢查使否有此id",error)) //後來我們想要客製化的
    }
}
//更新版 將orders中的資料都改成想要爬梳的資料
export const getOrderData = async(req,res,next)=>{
    try{
        const OrdersList = await Order.find()
        res.status(200).json(OrdersList)
    }catch(error){
        next(errorMessage(500,"無法抓取所有訂單資料",error)) 
    }
}
export const updatedOrder =async(req,res,next)=>{
    const id = req.params.id;
    const body = req.body
    try{
       const updatedOrder = await Order.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updatedOrder)
    }catch(error){
        next(errorMessage(500,"修改失敗，請確認是否有其id與是否欄位輸入格式正確",error)) //後來我們想要客製化的
    }
}
export const deleteOrder = async(req,res,next)=>{
    const id = req.params.id;
    try{
        await Order.findByIdAndDelete(id)
        res.status(200).json("刪除訂單資料成功")
    }catch(error){
        next(errorMessage(500,"刪除失敗，請確認是否有其id",error)) //後來我們想要客製化的
    }
}
export const deleteAllOrder = async(req,res,next)=>{
    try{
        await Order.deleteMany()
        res.status(200).json("刪除訂單全部資料成功")
    }catch(error){
        next(errorMessage(500,"刪除失敗",error)) //後來我們想要客製化的
    }
}
export const getAllOrders = async(req,res,next)=>{
    try{
        const OrdersList = await Order.find()
        res.status(200).json(OrdersList)
    }catch(error){
        next(errorMessage(500,"無法抓取所有訂單資料",error)) 
    }
}
