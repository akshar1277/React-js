import React from "react";
import Button from "./Button.jsx";

const App = () => { 

    const handleClickAction = () => {
        console.log("i was clicked from perent component");
    };  



    return <Button data={{a:{s:{d:'c'}}}} clickAction={handleClickAction}>click me</Button>;
}

export default App;