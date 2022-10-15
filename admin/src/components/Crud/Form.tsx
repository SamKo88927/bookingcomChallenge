import React, { useEffect, useState } from 'react'
import DropdownList from './DropdownList'
import hoteldisplay from "./../../data/crud_hotel_display.png"
import Input from './Input'
import axios from 'axios'


const Form = ({ state, inputData, backgroundColor, button, setButton }) => {
  const [file, setFile] = useState()

  const handleInputPhotos = async(e) => {
    e.preventDefault()
    setFile(e.target.files[0])
    const ImgData = new FormData()
    ImgData.append("file", e.target.files[0] )
    ImgData.append("upload_preset", "sambooking") 
    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/dgr5mhnbn/image/upload",ImgData)
        const {url}= res.data
        state(prev=>({...prev,[e.target.id]: url}))
        console.log(res)
    } catch (err){}
  }
 

  const handleInputDesc = (e) => {
    state(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  return (
    <div className="flex p-5  mt-3 text-white rounded flex-col  bg-left-top bg-cover" style={{ backgroundColor: backgroundColor }} >
      {inputData.map((item, index) =>
        item.id == "type" || item.id == "city" ?
          <DropdownList state={state} key={index} data={item} set={item.set} />
          :
          item.id == "photos" ?
            <div key={index}>
              <Input state={state} id={item.id} name={item.name} placeholder={item.placeholder} />
              <input className='my-3 
              file:bg-white
              file:text-sky-500
              hover:file:bg-sky-500
              hover:file:text-white 
              file:rounded-lg file:border-0
              file:p-3' type="file" id="img" accept='image/png,jpeg' onChange={handleInputPhotos} multiple />
              <a className="group block max-w-full mx-auto p-6 rounded-lg bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center gap-5">
                  <img className="h-48 w-48 rounded-lg" src={file ? URL.createObjectURL(file) : hoteldisplay} alt="" />
                  <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">飯店照片預覽圖
                    <p className="text-slate-500 group-hover:text-white text-sm">SamkoBooking飯店照片上傳</p>
                  </h3>
                </div>
              </a>
            </div>
            :
            item.id == "desc" ?
              <div key={index}>
                <label className='my-3 md:w-32' htmlFor={item.id}>{item.name}</label>
                <textarea id={item.id} className='w-full h-80 text-black p-1' placeholder={item.placeholder} onChange={handleInputDesc}></textarea>
              </div>
              :
              <Input state={state} key={index} id={item.id} name={item.name} placeholder={item.placeholder} />
      )}
      <button className='mt-4 border-1 py-3 
      border-white rounded-sm text-white 
      cursor-pointer hover:bg-black' onClick={() => setButton(true)} >{button}</button>
    </div>
  )
}

export default Form