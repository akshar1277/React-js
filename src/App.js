import React, { useState,useEffect,useRef,lazy,Suspense} from "react";

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
    const [showModel,toggleModel] = useState(false);
   return<>
   Hey i am inside root 
   <button onClick={()=>toggleModel((prev)=>!prev)}>Toggle Modal </button>
   {
    showModel && createPortal(<div>This is model contnet</div>,document.body)
   }
   </>
}
export default App;