import React from 'react'
import "./footer.scss"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="title">
                省時又省錢 !
                <span>
                    現在訂閱，我們將寄送最佳訂房優惠給您。
                </span>
            </div>
            <div className="emailcontainer">
                <div className="wrapper">
                    <input className='email' type="email" placeholder='您的電子郵件' />
                    <button className="sub">
                        訂閱 !
                    </button>
                </div>
                    <div className="checktext">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        請發送 Booking.com 免費 App 下載連結給我！
                    </div>
            </div>
            <div className="subcontainer">
                <button>將你的住宿註冊</button>
                <hr />
                <ul>
                    <li>
                        手機版
                    </li>
                    <li>
                        您的帳戶
                    </li>
                    <li>
                        線上修改訂單
                    </li>
                    <li>
                        客服支援
                    </li>
                    <li>
                        加入聯盟行銷
                    </li>
                    <li>
                        Booking.com 企業差旅服務
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer