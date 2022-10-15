import React, { useState } from 'react'


const Title = ({img,title}) => {
  return (
    <div className="flex justify-between" >
    <img src={img} alt="" width="100px"/>
    <title className='flex text-3xl font-semibold'>{title}</title>
    </div>
  )
}

export default Title