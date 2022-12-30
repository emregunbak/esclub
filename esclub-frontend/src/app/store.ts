
import counterReducer from '../features/counter/counterSlice';


import { configureStore, combineReducers } from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig={
  key:"root",
  version:1,
  storage
}
const reducer = combineReducers({
  response:counterReducer

})

const persistedReducer = persistReducer(
  persistConfig,reducer
)



export const store = configureStore({
  reducer: persistedReducer
})
export type RootState = ReturnType<any>
export type AppDispatch = typeof store.dispatch

