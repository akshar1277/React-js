import React, { useState,useEffect,useRef,lazy,Suspense} from "react";
import Button from "./Button.jsx";
// import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import { set } from "immutable";
import ButtonWithTooltip from "./ButtonWithTooltip.jsx";
import Input from "./Input.jsx";
import SecondParent from "./SecondParent.jsx";
import PrintTable from "./PrintTable.jsx";

const Text = lazy(()=>import('./Text.jsx'))

const App = () => { 
   const [showText,toogleText]= useState(false)

   return<>

    <button onClick={()=>toogleText((prev)=>!prev)}>Toggle Text </button>
    {
        showText && 
        <Suspense fallback={<div>I am loading </div>}>
            <Text>Hello guys</Text>
        </Suspense>
      
    }
   
   </> 
}
export default App;