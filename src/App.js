import React, { useState } from 'react'
import { data } from './Data'
import Accomodian from './Accomodian'
function App() {
  const [shoeIndex,setShowIndex]=useState(0);
  return (
    <div>
      {data.map((ele,index)=>{
        return <Accomodian data={ele} isShow={index===shoeIndex?true:false} setShowIndex={()=>{setShowIndex(index)}}/>
      })}
    </div>
  )
}

export default App