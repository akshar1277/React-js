import React,{useContext} from 'react';
import { ThemeContext } from './context.jsx';
const Button = (props) => {

    const { children, clickAction} = props;
    // console.log(useContext(ThemeContext))
    const [theme,setTheme] = useContext(ThemeContext)
    const handleClick = () => {
        clickAction?.();   // this is optional chaining, it checks if clickAction is defined before calling it
        setTheme((prev)=>{
            return prev === 'dark' ? 'light': 'dark'
        })
    }

  return (
    <button  onClick={()=> handleClick()}>{children}{theme}
        
    </button>
  )
}

export default Button