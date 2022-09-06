import express from "express"
import { createRoom, deleteRoom, getAllRooms, getHotelRooms, getRoom, updatedRoom } from "../RoutesController/room.js";

const router = express.Router()

//前面的url是/api/v1/rooms
//創建第一個room 
router.post("/:hotelid",createRoom);
//更改room updatedRoom
router.put("/:id",updatedRoom)
//刪除room
router.delete("/:hotelid/:id",deleteRoom)
//讀取單筆room 資料 不用hotelid
//是因為會多此一舉roomid來抓
router.get("/:id",getRoom)
//抓取rooms所有資料
router.get("/",getAllRooms)
//抓取一個hotel 的rooms所有資料
router.get("/findHotel/:hotelid/",getHotelRooms)

export default router