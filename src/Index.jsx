import React, { useState } from 'react'

const Incrementer = () => {
    const [num,numChange]=useState(0);
    const testFunc=()=>{
        numChange(num+1)
    }
  return (
    <div>
      <h2>Hello Incrementer</h2>
      <button onClick={()=>testFunc} >Click ME</button>
      <div>{num}</div>
    </div>
  )
}

export default Incrementer
