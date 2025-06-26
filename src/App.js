import React, { useState,useEffect,useRef} from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import { set } from "immutable";
import ButtonWithTooltip from "./ButtonWithTooltip.jsx";
import Input from "./Input.jsx";
import SecondParent from "./SecondParent.jsx";
import PrintTable from "./PrintTable.jsx";
const App = () => { 
   const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)


   return<>
    Counter1 : {counter1} <button onClick={()=>setCounter1((prev)=>prev +1)}> Count1++</button>
    <br/>
    Counter2: {counter2}<button onClick={()=>setCounter2((prev)=>prev +1)}> Count2++</button>
    <br/>
    <PrintTable num={counter1}/>
   </> 
}
export default App;