import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { OptionsContext } from '../context/OptionsContext'
import useFetch from '../hooks/useFetch'
import "./reservation.scss"
import { motion } from "framer-motion";
import { LoginContext } from '../context/LoginContext'
import axios from 'axios'
import { ReservationDatesList } from '../datesCalculate'
import useCreateOrder from '../hooks/useCreateOrder'
import { useNavigate } from 'react-router-dom'

const Reservation = ({ openSetting, hotelid, DatesLength }) => {
    const { data, loading, error } = useFetch(`/rooms/findHotel/${hotelid}`)
    const { date, options } = useContext(OptionsContext)
    const { user } = useContext(LoginContext)
    //在這邊建立我們的order訂單，同時新增我們的room的unavailableDates的時間
    //並之後在爬梳unavailableDates如果發現有客戶有選的時間跟我們的unavailableDates有衝突就不讓他勾選

    const [roomNumber, setRoomNumber] = useState([])

    const [orderData, setOrderData] = useState({
        userId: user._id,
        hotelId: hotelid,
        RoomNumberId: [],
        ReservationDates: [
            {
                startDate: date[0].startDate,
                endDate: date[0].endDate,
            }
        ],
        totalPrice: 0,
        options: {
            adult: options.adult,
            children: options.children,
            rooms: options.room,
        }
    })

    const handleCheckBox = (e) => {
        const roomNumberId = e.target.value
        const checked = e.target.checked
        //這邊特別要製作把打勾的再取消掉，所以用到checked與filter來排除
        setRoomNumber(
            checked
                ? [...roomNumber, roomNumberId] //打勾存入image.png
                : roomNumber.filter((item) => item !== roomNumberId) //取消打勾的id刪除
        );
    }

    const { datesList } = ReservationDatesList(date[0]?.startDate, date[0]?.endDate)
    console.log(datesList)
    
    const [createOrderState, setCreateOrderState] = useState(false)
    const {order} = useCreateOrder("/order",orderData,createOrderState)

    //order就可以是創建成功的回傳的訂單資訊
    const updatedReservationDates = async () => {
        try {
          await Promise.all(
            roomNumber.map((roomNumberId) => {
              const res = axios.put(`/rooms/reservartiondates/${roomNumberId}`, {
                dates: datesList,
              });
            })
          );
        } catch (error) {
            console.log("上傳日期失敗")
        }
      };
    const navgate = useNavigate()
    const handleClick = async () => {
        try {//這邊要塞兩個 一個創建訂單 一個更新unavavilableDates
            await setOrderData((item) => ({ ...item, RoomNumberId: roomNumber }))
            setCreateOrderState(true)//更改值，讓useCreateOrder可以被啟動
            updatedReservationDates()
            setTimeout(()=>navgate("/"), 5000)
        } catch (err) {
            console.log("訂單或是住宿日期上傳失敗")
        }
    }

    const isNotAvailableDate = (roomNumber) => {
        const isitNotAvailable = 
        roomNumber.unavailableDates.some((dates) => datesList.includes(new Date(dates).getTime()))
        return isitNotAvailable
    }

    
    return (
        <div className='Reservation'>
            <motion.div
                className="container"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <div className="wrapper">
                    <div className="title">
                        <h2>空房情況</h2>
                        <p>{format(date[0]?.startDate, "MM/dd/yyyy")} - {format(date[0]?.endDate, "MM/dd/yyyy")} 入住 {DatesLength} 晚 </p>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => openSetting(false)} />
                    </div>
                    <div className="body">
                        <div className="roomTitle">
                            <div>客房類型</div>
                            <div>適合人數</div>
                            <div>房型今日價格</div>
                            <div>住宿總價格</div>
                            <div>選擇房型編號</div>
                        </div>
                        <div className='roomData'>
                            <div className='roomColumn'>
                                {loading && <>載入中</>}
                                {data.map((room, i) =>
                                (
                                    <div className="roomInfo" key={i}>
                                        <div >
                                            {room.title}<br /><p>{room.desc}</p>
                                        </div>
                                        <div >
                                            {room.maxPeople}
                                        </div>
                                        <div >
                                            TWD {room.price}
                                        </div>

                                        <div >
                                            TWD {room.price * DatesLength}
                                        </div>

                                        <div >
                                            {room.roomNumbers?.map((item, i) => (
                                                <span key={i}>
                                                    <input type="checkbox" value={item._id} onChange={handleCheckBox}  
                                                     disabled={isNotAvailableDate(item)} />

                                                    {item.number}<br />
                                                </span>
                                            ))}
                                        </div>
                                    </div>)
                                )}
                            </div>
                            <button className='reservationbtn' disabled={roomNumber.length == 0|| createOrderState} onClick={handleClick}> 現在預訂</button>
                        </div>
                    </div >
                </div>
            </motion.div>
        </div >
    )
}

export default Reservation

{/* <input type="checkbox" value={item._id} onChange={(e)=>setRoomNumber(e.target.value)} /> */ }












