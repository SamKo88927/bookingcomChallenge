import mongoose from 'mongoose';
const HotelSchema = new mongoose.Schema({
    name:{
        type:String,//住宿名稱
        required:true,//一定需要
    },// required 加上去後如果post上去沒有這欄，會上傳失敗
    type:{
        type:String,//住宿型態，到時候會有飯店、公寓、民宿等等的
        required:true,//產品也常常會需要這種分類
    },
    city:{
        type:String,//同於地址的城市，將會特別列出來
        required:true,//到時候有不同的城市如台北就可以用這個來filter
    },
    address:{
        type:String,//在城市下的確切子資料，將會在hotelPage等完整資訊顯示
        required:true,
    },
    distance:{
        type:String,//這欄可寫可不寫是模擬到市中心的距離
        //為同為資料描述的同一種
    },
    photos:{
        type:[String],//很重要的住宿照片一環 因為會有很多照片所以使用array
       required:true,
    },
    title:{//對這個飯店的標題，可為甚麼 花蓮第一景觀民宿等等的
        type:String,
        required:true,
    },
    desc:{//對這個飯店的詳細描述，稍微介紹飯店規格啊形式等等的
        type:String,
        required:true,
    },
    rating:{//到時候的最重要評分，將會可以紀錄這個飯店的評價好壞
        type:Number,//型態就跟上面不同為數字 並可以打分0~10
        min:0,
        max:10, 
    },
    rooms:{
        type:[String],//住宿的衍伸資料，房間到時候就是必須紀錄這些房間能不能被訂房
        //這邊原本應該是要required:true,必須要的但跟下面的comment一樣我們會拉出來room做model
        //所以可以等room確認創建好後在這邊做串連
        //所以就先不用required:true
    },
    cheapestPrice:{//住宿的價格 這邊為什麼不是用price
        type:Number,//是因為通常到時候真正要顯示的是room不同房型的價格
        required:true,  //這邊搜尋後希望是通常都會展示最便宜的那個房型價格
    },//所以會跟rooms的價格串接，而這邊就是那邊最便宜得那一個
    popularHotel:{
        type:Boolean,//這個是為了到時候配合homPage我們的放在我們的最熱門住宿那邊，就像產品最熱門銷售的概念，設定如果為true這個資料就可以放上熱門榜
        default:false,
    },
    comments:{ //先紀錄到時候有的comment數 並如果要在創建comment可以再開一個model 並在裡面用一樣的方式紀錄是哪一個user留的與他等等的詳細資料
        type:Number,
        default:0,
    }
})
export default mongoose.model("Hotel",HotelSchema)
