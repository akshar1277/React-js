import React,{forwardRef} from 'react'


//this will work when you pass custom ref by changing props name 
// const Input = (props) => {
//     console.log("input box props are :",props)
//     const {inputRef} = props
//   return <input ref={inputRef} type="text" />
// }

const Input = forwardRef((props,ref) => {
    console.log("input box props are :",props)

  return <input ref={ref} type="text" />
})

export default Input