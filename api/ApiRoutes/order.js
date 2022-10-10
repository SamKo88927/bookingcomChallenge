import express from "express"
import { createOrder, deleteAllOrder, deleteOrder, getAllOrders, getOrder, getOrderData, updatedOrder } from "../RoutesController/order.js"
//這邊前面的url是/api/v1/Order
const router = express.Router()
//創建第一筆order資料
router.post("/",createOrder)
//抓取第一筆order資料練習
router.get("/find/:id",getOrder)
//將第一筆order資料做修改練習
router.put("/:id",updatedOrder)
//刪除order資料
router.delete("/:id",deleteOrder)
//刪除all order資料
router.delete("/",deleteAllOrder)
//抓取所有order資料
router.get("/",getAllOrders)
//抓取所有order資料name
router.get("/data/",getOrderData)
export default router