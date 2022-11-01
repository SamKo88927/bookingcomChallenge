import jwt from "jsonwebtoken";
import { errorMessage } from "./errorMessage.js";

const JWT_Token = (req, res, next, callBackFunction) => {
    const token = req.cookies.JWT_token;//在index.js 使用app.use(cookieParser()) 來抓取
    //沒抓到Token就顯示
    if (!token) { next(errorMessage(401, "請先登入")) }
    jwt.verify(token, process.env.JWT, (err, payload) => {//cookie解碼
        if (err) { next(errorMessage(403, "TOKEN無效，解開JWT失敗")) }
        req.userData = payload;//解碼後應該是我們一開始sign的user.id與user.isadmin
        //next()
        callBackFunction()//讓我們下列的()=>{}才能順利運作
    })
}
export const verifyUser = (req, res, next) => {
    JWT_Token(
        req, res, next, () => { //req.params.id 是user的id
            const apiUserId = req.params.id
            if (req.userData.id == apiUserId || req.userData.isAdmin) { next() }
            //next 讓他可以往下執行到實際要做的RoutesController
            else { next(errorMessage(403, "只能修改個人自己的權限或是你不是管理員")) }
        }
    )
}
export const verifyAdmin = (req, res, next) => {
    JWT_Token(req, res, next, () => {
        if (req.userData.isAdmin) { next() }
        //如果是管理員就往下，代表管理員token認證成功
        else { next(errorMessage(403, "你沒有管理員權限")) }
    })
