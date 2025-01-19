import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state, action)=>{
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        changeByValue: (state, action) =>{
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, changeByValue} = counterReducer.actions
export default counterReducer.reducer