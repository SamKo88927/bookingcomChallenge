import mongoose from "mongoose"
//ES6後import 與export 取代了原本舊版的require
import express  from "express"; 
import dotenv from "dotenv"
import hotelsApiRoute from "./ApiRoutes/hotels.js"
import roomsApiRoute from "./ApiRoutes/rooms.js"
import usersApiRoute from "./ApiRoutes/users.js"
import authApiRoute from "./ApiRoutes/auth.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const connect = async() => {
    try{
     await mongoose.connect(process.env.MONGODB)
        console.log("Connected to mongoDB")
    }catch(error){
        console.log("disconnected to mongoDB")
    }
}

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected!")
})
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!")
})

const port =5000;
app.listen(port,()=>{
     connect();
    console.log(`connected to ${port} backend`)
    //並要像npm start 一樣啟動它，
})
app.use(cookieParser())
app.use(express.json())//讓上傳的req.body可以視為json

///middlewares中間代理商概念
app.use("/api/v1/hotels",hotelsApiRoute)
app.use("/api/v1/rooms",roomsApiRoute)
app.use("/api/v1/users",usersApiRoute)
app.use("/api/v1/auth",authApiRoute)

//如果上述ApiRoute傳接有問題可以來這邊回傳錯誤訊息
app.use((error,req,res, next )=>{
    const errorStatus =error.status || 500 ;
    const errorMessage =error.message || "中間ApiRoute出錯";
    return res.status(errorStatus).json({ //return回去讓他可以被next(error) catch
        status:errorStatus,
        Message:errorMessage,
    })
})
