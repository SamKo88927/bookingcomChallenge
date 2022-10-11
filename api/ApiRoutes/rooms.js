import express from "express"
import { createRoom, deleteRoom, getAllRooms, getHotelRooms, getRoom, getRoomData, updatedRoom, updatedRoomDates } from "../RoutesController/room.js";
import { verifyAdmin, verifyUser } from "../JWT_Token.js";

const router = express.Router()

//前面的url是/api/v1/rooms
//創建第一個room 
router.post("/:hotelid",verifyAdmin,createRoom);
//更改room updatedRoom
router.put("/:id",verifyAdmin,updatedRoom)

//一樣是更新但我們只更新上傳unavailableDates的資料
router.put("/reservartiondates/:id",verifyUser,updatedRoomDates)

//刪除room
router.delete("/:hotelid/:id",verifyAdmin,deleteRoom)
//讀取單筆room 資料 不用hotelid
//是因為會多此一舉roomid來抓
router.get("/find/:id",getRoom)

//配合admin的爬梳而創立用roomNumberID來抓完整roomId資料
router.get("/findroom/:id",getRoomData)

//抓取rooms所有資料
router.get("/",getAllRooms)
//抓取一個hotel 的rooms所有資料
router.get("/findHotel/:hotelid/",getHotelRooms)

export default router