import React, { useState,useEffect,useLayoutEffect,useRef} from "react";
const Timer = (props) => {
    const [counter,setCounter] = useState(0);
    const {customText} = props; // destructuring props to get customText

    const interval = useRef(null)

    


    useEffect(() => {
        // setInterval returns an interval ID that can be used to clear the interval later
        interval.current =  setInterval(()=>{
            console.log("i am running ")//this will still run even if the component is unmounted because we are not implimentd cleanup funciton 
            setCounter((prevCounter) => prevCounter + 1);
            
        },1000)
        console.log("creater inerval with id: ", interval);
        return ()=>{
            console.log("i was unmounted ");
            console.log("clearing interval with id: ", interval);
            clearInterval(interval.current); // this will stop the interval when the component is unmounted
            // if we don't clear the interval, it will keep running in the background and cause memory leaks
            // and also it will try to update the state of the unmounted component which will cause an error
            // so we need to clear the interval when the component is unmounted
            // this is called cleanup function, it will run when the component is unmounted
            // we can also use useRef to store the interval id and clear it in the cleanup
            // but in this case we are using a variable to store the interval id and clearing it
            // in the cleanup function
        }
        // this is the cleanup function, it will run when the component is unmounted


    }, []);
   

    //now i want to do stop timer but how can i get interval id as it is in useEffect . 
    const stopTimer=()=>{
        console.log("stopping timer for id: ",interval.current)
        clearInterval(interval.current)

    }



   return<>
       <span>Current time is : {counter}</span>
       <br/>
       <span>{customText}</span>
       <br/>
       <button onClick={stopTimer}>Stop timer</button>
      





   </> 
}

export default Timer