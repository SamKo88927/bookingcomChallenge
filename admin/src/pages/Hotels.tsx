import React from 'react'
import { Header } from '../components'
import Crud from '../components/Crud'
import { useStateContext } from '../contexts/ContextProvider'
import hotelLogo from "./../data/crud_hotel_logo.png"
import hotelLogo1 from "./../data/crud_hotel_logo1.png"
import hotelLogo2 from "./../data/crud_hotel_logo2.png"
import hotelLogo3 from "./../data/crud_hotel_logo3.png"
const Hotels = () => {
    const { currentColor, currentMode } = useStateContext();
    console.log(currentColor)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="資料管理" title="飯店上傳、更新、讀取" />
      <div className="flex-wrap max-w-full flex justify-center p-2.5 gap-2" >
      <div className="md:max-w-[49%] w-full">
      <Crud type="創建" Logo={hotelLogo} title="建立飯店資料" backgroundColor={currentColor} />
      </div>
      <div className=" md:max-w-[49%] w-full">
      <Crud type="更新" Logo={hotelLogo1} title="更新飯店資料" backgroundColor={currentColor} />
      </div>
      <div className="md:max-w-[49%] w-full">
      <Crud type="讀取" Logo={hotelLogo2} title="讀取飯店資料" backgroundColor={currentColor} />
      </div>
      <div className="md:max-w-[49%] w-full">
      <Crud type="刪除" Logo={hotelLogo3} title="刪除飯店資料" backgroundColor={currentColor} />
      </div>
      </div>
    </div>
  )
}

export default Hotels


//     min-width: 49%;
//     @media screen and (max-width: 540px) {
//         max-width: 100%;
//     }
// }'