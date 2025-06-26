import React, { useState,memo } from 'react'

const ThirdParent = memo((props) => {
    const {hendleChange} = props
    const [counter,setCounter] = useState(0)


    let  startTime= performance.now()
    while(performance.now()-startTime < 800){
        //do nothing for 500 ms to emulate extremley slow code
    }


    const increment = () => {
        setCounter((prev)=> prev+1)
        hendleChange?.()
    }

  return <>
  
    i am a suuper super slow component
    <br/>
    {counter}
    <br/>
    <button onClick={increment}> Intcrement me</button>
  
  </>
})

export default ThirdParent