import React, { useState,useEffect,useRef,lazy,Suspense} from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment ,decrement,incrementByAmount} from "./counterSlice.js";
import Button from "./Button.jsx";
// import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import { set } from "immutable";
import ButtonWithTooltip from "./ButtonWithTooltip.jsx";
import Input from "./Input.jsx";
import SecondParent from "./SecondParent.jsx";
import PrintTable from "./PrintTable.jsx";
import Heading from "./Heading.jsx";
import Navbar from "./Navbar.jsx";
import { ThemeContext } from "./context.jsx";
import { createPortal } from "react-dom";

const Text = lazy(()=>import('./Text.jsx'))

const App = () => { 
   const count=useSelector((state)=>state.counter.counterValue)
   const dispatch = useDispatch()
   return<>
   {count}
   <br/>
   <button onClick={()=>dispatch(increment())}>Increment</button>
   <button onClick={()=>dispatch(decrement())}>Decrement</button>
   <button onClick={()=>dispatch(incrementByAmount(5))}>Inc by amount</button>
   </>
}
export default App;