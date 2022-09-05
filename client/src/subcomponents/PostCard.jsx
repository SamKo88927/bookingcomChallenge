import React from 'react'
import "./postCard.scss"
const PostCard = ({ dataArray }) => {
  return (
    <>
      {dataArray.map((item, index) => {
        return (
          <div className="CardContainer" key={index}>
            <img className='imgBg' src={item.img} alt="" />
            <div className="itemInfo">
              <h1>{item.name} <img src={item.flag} alt="" /></h1>
              <p>{item.amount}</p>
            </div>
          </div>
        )})
      }
    </>
  )
}

export default PostCard