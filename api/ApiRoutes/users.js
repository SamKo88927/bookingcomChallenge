import express from "express"
import { deletedUser, getAllUsers, getUser, updateUser } from "../RoutesController/user.js"

const router = express.Router()
//get 就像app.get 運用router把app.get可以分門別類 
// router.get("/",(req,res)=>{
//     res.send("這邊是UsersApi End points連接點")
// })

//更新user
router.put("/:id",updateUser)
//刪除
router.delete("/:id",deletedUser)
//讀取 單一用戶資料
router.get("/:id",getUser)
//讀取全部用戶資料
router.get("/",getAllUsers)

export default router

// //更新user
// router.put("/:id",verifyUser,updateUser)
// //刪除
// router.delete("/:id",verifyUser,deletedUser)
// //讀取 單一用戶資料
// router.get("/:id",verifyUser,getUser)
// //讀取全部用戶資料
// router.get("/",verifyAdmin,getAllUsers)
