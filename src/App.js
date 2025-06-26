import React, { useState,useEffect,useRef} from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import { set } from "immutable";
import ButtonWithTooltip from "./ButtonWithTooltip.jsx";
import Input from "./Input.jsx";
import SecondParent from "./SecondParent.jsx";
const App = () => { 
   const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)


   return<>
   Outer most parent: {count}<button onClick={()=>setCount((prev)=> prev+1)}>Count++</button><br/>
    {count2}<button onClick={()=>setCount2((prev)=> prev+1)}>Count2++</button><br/>
    <SecondParent count={count}/>
   </> 
}
export default App;