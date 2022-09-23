import React from 'react'
import "./skeleton.scss"


const Skeleton = ({ type,length}) => {
const number = length
    const PopularHotelSkeleton = ({i}) => (
        <div className="popularHotelSK" key={i} >
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

   if (type === "popularHotel") return Array(number).fill().map((item,i)=><PopularHotelSkeleton key={i}/>);
    if (type === "Amount") return (<AmountSkeleton />);
    //而Amount是因為是我們的測試做的type與city就都知道有這麼多就不用在傳入length告訴他要生成多少個遮罩
}

export default Skeleton

