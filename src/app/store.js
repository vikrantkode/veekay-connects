import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Pages/Auth/authSlice";

export const store =  configureStore({
    reducer: {
        auth : authSliceReducer,
    },
})