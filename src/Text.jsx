import React,{memo,useEffect} from 'react'

const Text = memo((props) => {

    const {externalData,children}= props;

    useEffect(()=>{
        console.log("externalData changed:", externalData);
    },[externalData])
    
        
    
    


  return (
    <div >{externalData}{children}</div>
  )
})

export default Text