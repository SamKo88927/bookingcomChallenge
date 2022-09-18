import React from 'react'
import "./skeleton.scss"


const Skeleton = ({ type,length}) => {
const number = length
    const PopularHotelSkeleton = () => (

        <div className="popularHotelSK" >
            <div className='imgSK' />
            <div className="InfoSK">
                <div className="titleSK" />
                <div className="subTitleSK" />
                <div className="priceSK" />
                <div className="rateAndCommentSK" />
            </div>
        </div>
    );
    const AmountSkeleton = () => (
        <div className="amountSK" />
    );

    if (type === "popularHotel") return Array(number).fill(<PopularHotelSkeleton />).keys();

    if (type === "Amount") return (<AmountSkeleton />);
    //amount 不用是因為他有上面得data.js的UI內資料不像PopularHotels是整個傳過來的資料總數都不確定
    //而Amount是因為是我們的測試做的type與city就都知道有這麼多就不用在傳入length告訴他要生成多少個遮罩
}

export default Skeleton

