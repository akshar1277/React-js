import React, { useState,useEffect,useLayoutEffect} from "react";
const Timer = (props) => {
  const [counter,setCounter] = useState(0);
    const {customText} = props; // destructuring props to get customText
    useEffect(() => {
        // setInterval returns an interval ID that can be used to clear the interval later
        const interval =  setInterval(()=>{
            console.log("i am running ")//this will still run even if the component is unmounted because we are not implimentd cleanup funciton 
            setCounter((prevCounter) => prevCounter + 1);
            
        },1000)
        console.log("creater inerval with id: ", interval);
        return ()=>{
            console.log("i was unmounted ");
            console.log("clearing interval with id: ", interval);
            clearInterval(interval); // this will stop the interval when the component is unmounted
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
   
    useEffect(() => {
        // when you unmount the component return statment of every useeffect  will run for sure. even if its dependency array is empty . 
        return ()=>{
            console.log("cleaning up 2nd effect for customer Text");
        }
    },[customText]);

    useEffect(() => {
        console.log("i am randering again and again ")
        return ()=>{
            console.log("cleaning up 3rd effect for customer Text");
        }
    })

    //we will use useLayoutEffect only when we want to run some calclulations before brower paints the screen 
    useLayoutEffect(()=>{
        console.log("use layout effect is running");
    },[]); // this will run after the DOM is updated but before the browser has painted the changes to the screen

   return<>
       <span>Current time is : {counter}</span>
       <br/>
       <span>{customText}</span>
      





   </> 
}

export default Timer