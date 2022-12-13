import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    value: []
}

export const responseSlice = createSlice({
    name:"response",
    initialState,
    reducers:{
        getResponse:(state, action:PayloadAction<any>) =>{
            state.value.push(action.payload)
        }
    }
})

export const { getResponse } = responseSlice.actions
export default responseSlice.reducer