import React, { useState,useEffect} from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import { set } from "immutable";
const App = () => { 
   
    const [showTimer, setShowTimer] = useState(true);




   return<>
       {showTimer && <Timer  customText="this is good clock " />}
       <button onClick={()=>setShowTimer(!showTimer)}>remove timer from app</button>



   </> 
}
export default App;