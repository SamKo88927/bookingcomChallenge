import React from 'react'


const Input = ({state,id,name,placeholder}) => {
  const handleInput=(e)=>{
   state(prev=>({...prev,[e.target.id]: e.target.value}))
  }

  return (
    <div className='mt-3 flex flex-col md:flex-row md:items-center'>
    <label className='md:w-32' htmlFor={id}>{name}</label>
    <div className='bg-white p-2 rounded-sm border border-lightgrey md:w-full'>
    <input  className='focus:outline-none border-none text-black w-full md:w-full' id={id} placeholder={`ex.${placeholder}`}
    onChange={handleInput}/>
    </div>
    </div>
  )
}

export default Input