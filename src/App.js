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

const Text = lazy(()=>import('./Text.jsx'))

const App = () => { 
    const [theme,setTheme] = useState('dark');
   return<ThemeContext.Provider value={[theme,setTheme]}>
    <Navbar/>
    

   </ThemeContext.Provider> 
}
export default App;