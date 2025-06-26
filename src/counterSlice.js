import { createSlice } from "@reduxjs/toolkit";


const initialStateVariable={
    counterValue:0,
}

export const counterSlice= createSlice({
    name:"counter",
    initialState:initialStateVariable,
    reducers:{
        increment: (state)=>{
            state.counterValue +=1

        },
        decrement: (state)=>{
            state.counterValue -=1

        },
        incrementByAmount:(state,action)=>{
            state.counterValue += action.payload

        }
    }
})


export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer