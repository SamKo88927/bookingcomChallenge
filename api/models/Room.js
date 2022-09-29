import mongoose from 'mongoose';
const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true,
    },
    roomNumbers:[{
       number:Number, unavailableDates:[{type:Date}]
    }],
    
},{timestamps:true})
export default mongoose.model("Room",RoomSchema)

// [ 到時候要紀錄的訂房時間就會以時間戳章的方式記在roomNumber這邊
//     {number:1022, unavilbaleDates:[01.02.2022,02.02.2023]}
// ]
