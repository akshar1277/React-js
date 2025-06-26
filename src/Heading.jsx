 import React from "react"
import Text from "./Text.jsx"

const Heading = (props) =>{
    const {headingText} = props
    return <>

        hey i am heading component
        <Text externalData={headingText}>Hey i am text component</Text>
    </>
}

export default Heading