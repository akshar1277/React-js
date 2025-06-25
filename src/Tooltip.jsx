import React ,{useRef,useLayoutEffect,useState,useEffect} from "react";
import { createPortal } from "react-dom";

const Tooltip =(props)=>{
    const {children,tragetPositions} = props;
    const {left,top,right,bottom } = tragetPositions

    const tooltipRef = useRef(null);
    const [tooltipHeight,setTooltipsHeight] = useState(0)
    let x=0
    let y=0


    let now = performance.now()
    while(performance.now() - now < 400)
    {

    }



    if(tragetPositions !== null){
        x=left,
        y=top - tooltipHeight

        if(y<0){
            y=bottom

        }
    }
    
    // // now we add 400 miliseconds block . now if we use useEffect calculation happens after rerender and we blocked the rerender for 4 miliseconds so tooltip heright will not be calculated
    // useEffect(() => {
    //     const {height} = tooltipRef.current.getBoundingClientRect();
    //     setTooltipsHeight(height)
    //     console.log("height",height);
    // },[])

    //here its works perfectly fine even the 4 miliseconds delay because useLayout run before react paints the screen  . 
    useLayoutEffect(() => {
        const {height} = tooltipRef.current.getBoundingClientRect();
        setTooltipsHeight(height)
        console.log("height",height);
    },[])

    return createPortal(<div className="tooltip"  
        ref={tooltipRef}     
        style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}> 
        {children}
    </div>, document.body)
}

export default Tooltip;