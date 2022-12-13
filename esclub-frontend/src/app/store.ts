import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "../feature/responseSlice"

export const store = configureStore({
    reducer:{
        response: responseReducer
    }
})

export type RootState = ReturnType<any>
export type AppDispatch = typeof store.dispatch