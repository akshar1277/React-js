import React, { useEffect, useState, useRef } from 'react'
import Tooltip from './Tooltip.jsx'
const ButtonWithTooltip = (props) => {
  const { tooltipContent, children } = props
  const [ tragetPositions, setPositions ] = useState(null)
  const buttonRef = useRef(null)
  const handleMouseEnter = () => {
   
      const rect = buttonRef.current.getBoundingClientRect()
      setPositions({
        // Adjust the position to show above the button
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
      })
  
  }

  return <>

    <button ref={buttonRef} onPointerEnter={handleMouseEnter} onPointerLeave={() =>  setPositions(null) } >{children}</button>

    {tragetPositions && <Tooltip tragetPositions={tragetPositions}>{tooltipContent}</Tooltip>}
  </>
}

export default ButtonWithTooltip