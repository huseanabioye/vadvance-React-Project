import React from 'react'
import { useState } from 'react'

export const UseState = () => {
    const [counter, setCounter] = useState(0);
    const handdleButton = () =>{
       setCounter(counter + 1) 
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button className='btn' onClick={handdleButton}>click me</button>
    </div>
  )
}



