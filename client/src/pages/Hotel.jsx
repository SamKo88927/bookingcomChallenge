import { faAngleLeft, faAngleRight, faHeartCircleCheck, faLocationDot, faPeopleGroup, faSmokingBan, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { gsap } from "gsap";
import "./hotel.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import Reservation from '../components/Reservation';
import { OptionsContext } from '../context/OptionsContext';
import { ReservationDatesAndPrice } from '../datesCalculate';
import { format } from 'date-fns';

const Hotel = () => {

  const locationHotelUrl = useLocation()
  const hotelid = locationHotelUrl.pathname.split("/")[2]

  const [sliderIndex, setSiderIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${hotelid}`)
  console.log(data)
  let comments = useRef(null)
  const clickSlider = (index) => {
    setOpenSlider(true);
    setSiderIndex(index);
  }
  const handleHover = e => {
    gsap.to(comments, {
      css: {
        display: "flex",
        opacity: 1,
      },
      ease: "power3.inOut"
    })
  }
  //離開特效
  const handleHoverExit = e => {
    gsap.to(comments, {
      css: {
        display: "none",
        opacity: 0,
      },
      ease: "power3.inOut"
    })
  }
  const slideDirection = (direction) => {
    let newSliderIndex;
    let lastPicutre = data.photos.length - 1
    if (direction == "left") {
      sliderIndex == 0 ? newSliderIndex = lastPicutre : newSliderIndex = sliderIndex - 1

      setSiderIndex(newSliderIndex)
    } else {
      sliderIndex == lastPicutre ? newSliderIndex = 0 : newSliderIndex = sliderIndex + 1

      setSiderIndex(newSliderIndex)
    }
  }

  const {user} =useContext(LoginContext)

  const { city, date, options,dispatch } = useContext(OptionsContext)
  const hotelsPrice = data.cheapestPrice
  const { DatesLength, totalHotelsPrice } = ReservationDatesAndPrice(date[0]?.startDate, date[0]?.endDate, hotelsPrice)
  const [openReservation, setOpenReservation] = useState(false);
  const navgator = useNavigate()
  const handleReservation = () => {
    if (user) {
      setOpenReservation(true)
    } else {
      navgator("/login")
    }
  }

  return (
    <div className='hotel'>
      <Navbar />
      {openSlider &&
        <div className="slider">
          <div className="sliderWrapper">
            <div className="wrapperTitle">
              <div className='TitleName'>{data.name}</div>
              <span className="CloseSign" onClick={() => setOpenSlider(false)}>關閉
                <FontAwesomeIcon icon={faXmark} /></span>
            </div>
            <div className="wrapperBody">
              <FontAwesomeIcon icon={faAngleLeft} className="arrow" onClick={() => slideDirection("left")} />
              <img src={data.photos[sliderIndex]} alt="" />
              <FontAwesomeIcon icon={faAngleRight} className="arrow" onClick={() => slideDirection("right")} />
            </div>
          </div>
        </div>
      }
      <div className="HotelContainer">
        <div className="HotelWrapper">
          <div className="HotelHeaderBtn">
            <button>資訊 & 房價</button>
            <button>設施</button>
            <button>訂房須知</button>
            <button>房客評價</button>
          </div>
          <div className="hotelTitle">
            <div className="titleLeft">
              <span className="type">{data.type}</span>
              <span className='hotelName'>{data.name}</span>
              <span className='recommend'><span className="recommendSvg"><FontAwesomeIcon icon={faPeopleGroup} /></span>推薦四人住宿</span>
              <div className="address"><FontAwesomeIcon icon={faLocationDot} /> {data.address} <a>地理位置超棒－{data.distance}.顯示地圖</a></div>
            </div>
            <div className="titleRight">
              <button className="reservationBtn" onClick={handleReservation}>現在就預訂</button>
              <p> <FontAwesomeIcon icon={faHeartCircleCheck} /> <span>買貴退差價</span></p>
            </div>
          </div>
          <div className="hotelImgWrapper">

            <div className="popupcomment" onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} >
              <div className='commentInfo' onMouseEnter={e => handleHover(e)} ref={e => (comments = e)} >
                <button className='commentRate'>
                {data.rating}
                </button>
                傑出<br />
                {data.comments}則評論
              </div>
            </div>

            <div className="hotelImg">
              {data.photos?.slice(0, 6).map((item, i) => //不管他再怎麼多 如果剛好有到7張照片就可以觀看更多，並往上加
                i >= 5 ?
                  <div className="Imgwrap" key={i}>
                    <div className="more" onClick={() => clickSlider(i)} >{data.photos.length > 6 ? `+${data.photos.length - 6}張照片` : "觀看更多"}</div>
                    <img src={item} alt="img" />
                  </div>
                  :
                  <div className="Imgwrap" key={i}>
                    <img onClick={() => clickSlider(i)} src={item} alt="img" />
                  </div>
              )}
            </div>
          </div>
          <div className="hotelDes">
            <div className="hotelDesText">
            {data.title}
              <br />
              {data.desc}
              <h1>熱門設施</h1>
              <hr />
              <p className='textIcon'><FontAwesomeIcon icon={faWifi} className="wifi" />
                免費無線網路 <FontAwesomeIcon icon={faSmokingBan} />禁菸客房</p>
            </div>
            <div className="hotelDesPrice">
              <h2>住宿特色 </h2>
              <h3> {format(date[0]?.startDate, "MM/dd/yyyy")} - {format(date[0]?.endDate, "MM/dd/yyyy")}</h3>
              <p>入住 {DatesLength} 晚的最佳選擇！
                此住宿位於台南評分最高的地區，地理位置評分高達 {data.rating} 分
                深受獨行旅客歡迎</p>
              <h2>TWD {totalHotelsPrice}</h2>
              <button onClick={handleReservation} >現在就預訂</button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
      {openReservation && <Reservation openSetting={setOpenReservation} hotelid={hotelid} DatesLength={DatesLength}/>}
    </div>

  )
}

export default Hotel


