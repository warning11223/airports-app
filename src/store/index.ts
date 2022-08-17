import { configureStore } from '@reduxjs/toolkit'
import airportSlice from "./slices/airportSlice";
import {useDispatch} from "react-redux";
import authSlice from "./slices/authSlice";


export const store = configureStore({
    reducer: {
        airports: airportSlice,
        auth: authSlice
    },

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;