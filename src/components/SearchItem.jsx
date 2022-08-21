import React from 'react'
import "./searchItem.scss"
const SearchItem = ({active}) => {
  return (
    <div className={`SearchItm ${active}`}>
      <img className="itemImg" src="https://cf.bstatic.com/xdata/images/hotel/square600/347072190.webp?k=74cb5ec7f0ef6a6b424dca16d22b2e0b62c5438fbeef2e9f56bed64167dddbad&o=&s=1" alt="" />
      <div className="itmInfo">
        <div className="infoTitle">
          <h2 className='infoTitleH2'>
            台南微醺文旅|老宅古城|漫遊體驗
          </h2>
          <div className='infoTitleRight'>
            {/* {item.rate >= 9.5 ? "好極了" : "傑出"} */}
            傑出<br />
            1,223則評論
            <button className='infoTitleRate'>
              9.5
            </button>
          </div>
        </div>
        <div className="infoDes">
          <span className="far">中西區 台南 400公尺遠</span>
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
                五晚、1位
              </span>
              <span className="price">
                TWD 4534
              </span>
              <span className="tax">
                含稅費與其他費用
              </span>
              <button className='btn'>查看客房供應情況</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SearchItem
