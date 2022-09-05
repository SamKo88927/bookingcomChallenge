import express from "express"
import { errorMessage } from "../errorMessage.js"
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getHotel, updatedHotel } from "../RoutesController/hotels.js"

const router = express.Router()
//創建第一筆資料
router.post("/",createHotel)
//抓取第一筆資料練習
router.get("/find/:id",getHotel)
//將第一筆資料做修改練習
router.put("/:id",updatedHotel)
//刪除資料
router.delete("/:id",deleteHotel)

export default router