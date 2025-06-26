import React,{useMemo} from 'react'

const generateTable = (number) =>{
    const arr =[ ]


    let startTime=performance.now()
    while(performance.now()-startTime < 500){
        //do noting for 500 ms 
    }

    for (let i=1;i<=10;i++){
        arr.push(<div>{number * i }</div>)
    }
    return arr
}



const PrintTable = (props) => {
    const {num} = props
    const table= useMemo(()=>generateTable(num),[num])

  return <>

        {table}
  </>
}

export default PrintTable