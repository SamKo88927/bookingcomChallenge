import React, { useState } from 'react'
import DropdownList from './DropdownList'
import hoteldisplay from "./../../data/crud_hotel_display.png"
import Input from './Input'


const Form = ({ inputData, backgroundColor, button }) => {
  const [file, setFile] = useState([])
  return (
    <div className="flex p-5  mt-3 text-white rounded flex-col bg-Crud-hotel bg-left-top bg-cover" style={{ backgroundColor: backgroundColor }} >
      {inputData.map((item, index) =>
        item.id == "type" || item.id == "city" ?
          <DropdownList key={index} data={item} set={item.set} />
          :
          item.id == "photos" ?
            <div key={index}>
              <Input  id={item.id} name={item.name} placeholder={item.placeholder} />
              <input className='my-3' type="file" id="img" accept='image/png,jpeg' onChange={(e)=>setFile([e.target.files])} multiple />
              {!file ? 
               <img src={hoteldisplay} width="500px" alt="" />
              :
               file.map((item)=>
               <img src={URL.createObjectURL(item[0])} width="500px" alt="" />
               )
              }
            </div>
            :
            item.id == "desc" ?
              <div key={index}>
                <label className='my-3 md:w-32' htmlFor={item.id}>{item.name}</label>
                <textarea className='w-full h-80 text-black p-1' placeholder={item.placeholder}></textarea>
              </div>
              :
              <Input key={index} id={item.id} name={item.name} placeholder={item.placeholder} />
      )}
      <button >{button}</button>
    </div>
  )
}

export default Form