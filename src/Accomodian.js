import React, { useState } from 'react'

function Accomodian({data,isShow,setShowIndex}) {
  
  console.log(data)
const handleClick=()=>{
    setShowIndex();
}
  return (
    <div className='mt-1 '>
        <div onClick={handleClick}  className='flex justify-between w-6/12 p-6 rounded-lg m-auto bg-slate-500 '>
            <span>{data.title}</span>
            {!isShow?<span>➕</span>:<span>➖</span>}
        </div>
       { isShow&&<div className='w-6/12 ml-auto mr-auto bg-slate-300 p-6 rounded-lg'>{data.description}</div>}
    </div>
  )
}

export default Accomodian