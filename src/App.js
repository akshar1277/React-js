import React, { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
const App = () => { 

    const [data,setData] = useState([
        {id:'a',text:"text 1"},
        {id:'b',text:"text 2"},
        {id:'c',text:"text 3"},
        {id:'d',text:"text 4"},
        {id:'e',text:"text 5"},
    ]);

  
    const addMoreData = () => {
        setData((prevData) =>{
          return  [{id:'f',text:"text 6"},...prevData]
        })
    };  

    

    return <>
        {
            data.map(((item,index)=><Text key={item.id}>{item.text}</Text>))
        }
        <Button clickAction={addMoreData} >Add more data</Button>
    </>
}
export default App;