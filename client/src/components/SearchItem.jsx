import React from 'react'
import { Link } from 'react-router-dom'
import { ReservationDatesAndPrice } from '../datesCalculate'
import "./searchItem.scss"

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
const SearchItem = ({ active, dataDetail, conditions, dates }) => {
  const ItemTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#F5544A',
      padding: 10,
    },
  }));
  const hotelsPrice = dataDetail.cheapestPrice
  const { DatesLength, totalHotelsPrice } = ReservationDatesAndPrice(dates[0]?.startDate, dates[0]?.endDate, hotelsPrice)
  return (
    <div className={`SearchItem ${active}`}>
      <img className="itemImg" src={dataDetail.photos[0]} alt="" />
      <div className="itemInfo">
        <div className="infoTitle">
          <h2>
            {dataDetail.name}
          </h2>
          <div className='infoTitleRight'>
            {dataDetail.rating < 9.5 ? "傑出" : "極致好評"} <br />
            {dataDetail.comments}則評論
            <button className='infoTitleRate'>
              {dataDetail.rating}
            </button>
          </div>
        </div>
        <div className="infoDes">
          <span className="far">{dataDetail.distance}</span>
          <span className="discount">免費專機接送</span>
          <div className="infoDetail">
            <div className="detailLeft">
              <div className="equipment">
                <b>標準單人房－附共用衛浴</b>
                <p>一張單人床</p>
              </div>
              <div className="detailDes">
                <b>免費取消</b>
                <p>立即搶下優惠價－可取消</p>
                <b>此價格的客房在本站僅剩 1 間</b>
              </div>
            </div>
            <div className="detailRight">
              <span className="optionDes">
                {DatesLength == 0 ? <>請先選擇住宿日期</> : `總共 ${DatesLength} 晚`}
                <br />{conditions.adult} 位大人 {conditions.children != 0 && `、${conditions.children} 位小孩`}
              </span>
              <span className="price">
                {DatesLength == 0 ? `TWD ${dataDetail.cheapestPrice} 價格` : `TWD ${totalHotelsPrice} 價格`}
              </span>
              <span className="tax">
                含稅費與其他費用
              </span>

              {DatesLength == 0 ?
                <ItemTooltip title="請先輸入住宿日期，並按左側 搜尋 查看結果" followCursor>
                  <button className='btn' >查看客房供應情況</button>
                </ItemTooltip>
                :
                <Link to={`/hotels/${dataDetail._id}`}>
                  <button className='btn' >查看客房供應情況</button>
                </Link>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
