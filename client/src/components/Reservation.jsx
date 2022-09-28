import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React from 'react'
import { useContext } from 'react'
import { OptionsContext } from '../context/OptionsContext'
import useFetch from '../hooks/useFetch'
import "./reservation.scss"
const Reservation = ({ openSetting, hotelid,DatesLength }) => {
    const { data, loading, error } = useFetch(`/rooms/findHotel/${hotelid}`)
    const {date,options} = useContext(OptionsContext)
    return (
        <div className='Reservation'>
            <div className="container">
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
                                        {room.title}<br/><p>{room.desc}</p>
                                    </div>
                                    <div >
                                        {room.maxPeople}
                                    </div>
                                    <div >
                                        TWD {room.price}
                                    </div>

                                    <div >
                                        TWD {room.price*DatesLength}
                                    </div>

                                    <div >
                                        {room.roomNumbers?.map((item, i) => (
                                            <span key={i}>
                                                <input type="checkbox" value={item._id} />
                                                {item.number}<br/>
                                            </span>
                                        ))}
                                    </div>
                                    </div>)
                                )}
                        </div>
                        <button className='reservationbtn'> 現在預訂</button>
                    </div>
                </div >
            </div>
            </div>
        </div >
    )
}

export default Reservation














// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { SearchContext } from '../context/SearchContext'
// import useFetch from '../hooks/useFetch'
// import "./reservation.scss"
// import { motion } from "framer-motion";
// const Reservation = ({ openSetting, hotelid }) => {
//     const [select, setSelect] = useState([])
//     const { data, loading, error } = useFetch(`/api/v1/rooms/findHotel/${hotelid}`)
//     const { date } = useContext(SearchContext)

//     console.log(date)
//     // const getDateInRange = (startDate, endDate) => {
//     //     const date = startDate
//     //     const datelist = []
//     //     const listIndex = 0
//     //     while (date <= endDate) {
//     //         datelist[listIndex].push(date?.getTime())
//     //         date.setDate(date.getDate() + 1)
//     //         listIndex++
//     //     }
//     //     return datelist
//     // }
//     // const datesRange = getDateInRange(date[0]?.startDate, date[0]?.endDate)
//     const isNotAvailableDate = (roomNumber) => {
//         // const isitNotAvailable = roomNumber.unavailbaleDates.some(date => datesRange.includes(date.getTime()))

//         // return isitNotAvailable
//     }
//     const handleCheck = (e) => {
//         const checked = e.target.checked
//         {
//             checked ?
//                 setSelect((prev) => ([...prev, e.target.value]))
//                 : setSelect(select.filter((item) => item != e.target.value))
//         }
//     }

//     const handleReserve = async () => {
//         // try{
//         //     await Promise.all(setSelect.map(roomId)=>{
//         //         const res= axios
//         //     })
//         // }catch{

//         // }
//     }

//     console.log(select)
//     return (
//         <div className='Reservation'>
//             <motion.div
//                 className="container"
//                 initial={{ scale: 0 }}
//                 animate={{  scale: 1 }}
//                 transition={{
//                     type: "spring",
//                     stiffness: 260,
//                     damping: 20
//                 }}
//             >
//                 <div className="wrapper">
//                     <div className="Rheader">
//                         <h2 className='title'>空房情況</h2>
//                         <h3>幾號幾號幾晚 大人小孩 </h3>
//                         <FontAwesomeIcon icon={faCircleXmark} onClick={() => openSetting(false)} />
//                     </div>
//                     <div className="Rbody">
//                         <div className="roomTitle">
//                             <div className="roomTitleName">
//                                 客房類型
//                             </div>
//                             <div className="roomTitleMaxpeople">
//                                 適合人數
//                             </div>
//                             <div className="roomTitlePrice">
//                                 房型今日價格
//                             </div>
//                             <div className="roomTitleNumber">
//                                 選擇房型編號
//                             </div>
//                             <div className="roomTitleBtnspace">
//                             </div>
//                         </div>
//                         <div className='roomData'>
//                             <div className='roomColumn'>
//                             {loading && <>載入中</>}
//                                 {data.map((room, i) =>
//                                 (
//                                     <div className="roomInfo" key={i}>
//                                         {/* {room.title}{room.desc}{room.price} */}
//                                         <div className="roomName">
//                                             {room.title}<br />
//                                             <p>{room.desc}</p>
//                                         </div>
//                                         <div className="roomMaxpeople">
//                                             {room.maxPeople}
//                                         </div>
//                                         <div className="roomPrice">
//                                             TWD {room.price}
//                                         </div>
//                                         <div className="roomNumber">
//                                             {room.roomNumbers?.map((item, i) => (
//                                                 <span key={i}>
//                                                     <input type="checkbox" value={item._id} disabled={isNotAvailableDate(item)} onClick={handleCheck} />
//                                                     {item.number}
//                                                 </span>

//                                             ))}
//                                         </div>
//                                     </div>)
//                                 )}
//                             </div>
//                             <button className='reservationbtn' onClick={handleReserve}> 現在預訂</button>
//                         </div>
//                     </div >

//                 </div>
//             </motion.div>
//         </div >
//     )
// }

// export default Reservation