import React, { useState,useEffect,useRef} from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import { set } from "immutable";
import ButtonWithTooltip from "./ButtonWithTooltip.jsx";
import Input from "./Input.jsx";
const App = () => { 
   

    let myLocal=0
    const ref = useRef(0)
    const [mycount,setCount]= useState(0)



    const inputRef = useRef(null)




   return<>
    <button onClick={()=>{myLocal+=1}}>change local variable</button>
    <button  onClick={()=>{ref.current +=1}}>change ref</button>
    <button  onClick={()=>{setCount((prevCount)=>prevCount+1)}}>change state</button>
        
    <div>
        <span>local var:{myLocal}</span><br/>
        <span>ref : {ref.current}</span><br/>
        <span> state variable :{mycount}</span>
    </div>

    <h4>Timer Example</h4>
    <Timer/>


    <h5>DOM example</h5>
    {/* <input ref={inputRef} type="text"/> */}
    {/* one way is the we can creat our own ref by changin props name and it will work  */}
    {/* <Input inputRef={inputRef}/>   */}
    <Input ref={inputRef}/>
    <button  onClick={()=>{
        console.log(inputRef.current.getBoundingClientRect())
        if(inputRef.current) inputRef.current.focus()
    }}>Focus the inputbox</button>
   </> 
}
export default App;