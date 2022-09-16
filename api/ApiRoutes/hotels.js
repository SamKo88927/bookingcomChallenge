import express from "express"
import Hotel from "../models/Hotel.js"
import { amountOfCities, amountOfType, createHotel, deleteHotel, getAllHotels, getHotel, updatedHotel } from "../RoutesController/hotels.js"
import { verifyAdmin } from "../JWT_Token.js"

//這邊前面的url是/api/v1/hotels
const router = express.Router()
//創建第一筆資料
router.post("/",verifyAdmin,createHotel)
//抓取第一筆資料練習
router.get("/find/:id",getHotel)
//將第一筆資料做修改練習
router.put("/:id",updatedHotel)
//刪除資料
router.delete("/:id",verifyAdmin,deleteHotel)
//抓取所有住宿資料 應為目前沒有重複api url除了post的創建一樣
//所以可以用/api/v1/hotels/ 的api url 配合get 來抓取所有住宿資料
router.get("/",getAllHotels)

//要來做"依住宿類型瀏覽"的種類資料統計與分析
router.get("/amountoftype", amountOfType)
//要來做"依住宿城市瀏覽"的種類資料統計與分析
router.get("/amountofcities", amountOfCities)

export default router