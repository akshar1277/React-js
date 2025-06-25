import React, { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import { set } from "immutable";
const App = () => { 
    const [message,setMessage] = useState("hello user good morning");



    const changemessage = () => {
        // setMessage("hello user good evening");
        setMessage((prevMessage) => {
            console.log(prevMessage);
            return "hello user good evening";   
        });//setMessage also have callback function . 
    }   
    console.log(message)
   return<>
        <div> {message}</div>
        <button onClick={changemessage} > change message</button>
   </> 
}
export default App;