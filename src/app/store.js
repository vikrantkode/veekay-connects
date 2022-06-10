import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Pages/Auth/authSlice";
import postSliceReduder from "../Pages/Post/PostSlice"
import ProfileSliceReducer from "../Pages/Profile/ProfileSlice";

export const store =  configureStore({
    reducer: {
        auth : authSliceReducer,
        post : postSliceReduder,
        profile : ProfileSliceReducer,
    },
})