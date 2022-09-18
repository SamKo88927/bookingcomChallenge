import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../components/Skeleton'

import "./popularHotels.scss"

const PopularHotels = ({ dataArray, loading }) => {
    // const isloading =true
    return (
        <div className='popularHotels'>
            {loading? 
            <Skeleton type="popularHotel" length={7} /> 
            //除入的遮罩是popularHotel並length={7}預設產生為七個
            :
                 <>{dataArray.map((item, index) =>
                            <Link to={`/hotels/${item._id}`} style={{ textDecoration: "none", color: "inherit" }}  key={index}>
                                <div className="item" >
                                    <img src={item.photos[0]} alt="" />
                                    <div className="itemInfo">
                                        <div className="title">
                                            {item.name}
                                        </div>
                                        <div className="subTitle">
                                            {item.city}
                                        </div>
                                        <div className="price">
                                            TWD {item.cheapestPrice.toLocaleString()} 起
                                        </div>
                                        <div className="rate">
                                            <button>{item.rating}</button>
                                            <span>{item.rating >= 9.5 ? "好極了" : "傑出"}</span>
                                            <p>{item.comments.toLocaleString()}則評論</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>)}</>
            }
        </div>
    )
}

export default PopularHotels