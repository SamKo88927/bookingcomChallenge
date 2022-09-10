import express from "express"
import { login, register } from "../RoutesController/auth.js";

const router = express.Router()
//get 就像app.get 運用router把app.get可以分門別類 
//這邊auth是負責處理註冊與登入的地方
router.post("/register",register);
//用post是因為我們要把帳密那些使用者資料上傳，register等同於創建user
router.post("/login",login)


export default router

//而特別做login是因為我們到時候clientSide要將使用者的資料登入去查看是否有這個人
//而有login 卻沒有logOut 登出是因為登出可以在clientSide一樣直接清除資料，就不用
//登出還要回傳到伺服器，如果需要回傳到伺服器應該是要刪除user等不同的操作
