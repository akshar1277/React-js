import React ,{useCallback}from 'react'
import ThirdParent from './ThirdParent.jsx'
const SecondParent = (props) => {
    const {count} = props
    const hendleChange =useCallback( ()=>{
        
        console.log("heheh haha  the count is now",count)
    },[count])//in this depedency array we have to pass reactive variable (variable which cause rerender, props, state and function . )



  return <>
   i am second parent<br/>
   <ThirdParent hendleChange={hendleChange}></ThirdParent>
  </>
}

export default SecondParent