
import './App.css'
import React, { useState } from 'react'

function App() {
  const [num,setNum]=useState(0);
  const data=[{name:'Erick',age:20},{name:'John',age:36},{name:'George',age:31},{name:'Emmanuel',age:29}];
    const testFunc=()=>{
        numChange(num+1)
    }

  return (
    <>
     <h2>Hello world</h2>
      <h2>Hello Incrementer</h2>
      <button onClick={()=>setNum(num+1)} >Click ME</button>
      <div>{num}</div>
       {data.map((person)=>{
        const {name,age}=person;
        return <p>My name is {name} and i am {age} years old.</p>
      })}
     
    </>
  )
}

export default App
