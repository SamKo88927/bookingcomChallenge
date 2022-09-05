import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./announcement.scss"
const Announcement = ({ type }) => {
    return (
        <div className='announcement'>
            <div className="container">
                {type === "Upper half"
                    ?
                    // true
                    <>
                        <div className="checktext">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            此為差旅行程
                        </div>
                        <div className="infoDes">
                            <FontAwesomeIcon icon={faInfoCircle} />
                            獲得所需建議。在出發之前，查看最新的新冠肺炎（COVID-19）相關限制。了解更多 鐵人挑戰GO
                        </div>
                        <div className="discountInfo">
                            <div className="left">
                                <img src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg" alt="" />
                            </div>
                            <div className="right">
                                <h2>省 15% 或更多</h2>
                                <span>這個夏天，讓夢想之旅成真！2022 年 9 月 30 日前預訂並住房就可省一筆，還有跟著參賽完成第一個動態網站為自己開創新事業</span>
                                <button>逛逛優惠</button>
                            </div>
                        </div>
                    </>
                    :
                    // false
                    <div className="GlobalBanner">
                        <img src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop@2x/1f5a273d871549f00bf6692f7ff612b5e8eda038.png" alt="" />
                        <div className="BannerInfoDes">
                            <h2>優惠立即享</h2>
                            <span>登入您的 Booking.com 帳戶，尋找藍色的 Genius 圖標，輕鬆省一筆，鐵人挑戰後面會越來越難，加油！</span>
                            <div className='Bannerbtn'>
                                <button >登入</button> <button>註冊</button>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default Announcement