import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    user : {},
    token: "",
    isUserLoggedIn: false,
    loading: false, 
}


export const logInUser = createAsyncThunk(
    `auth/loggingInUser`,
    async(userLoginCredentials, { rejectWithValue }) =>{
        console.log("log in user ta",userLoginCredentials)
        try{
            const resp = await axios.post(`/api/auth/login`, userLoginCredentials)
            localStorage.setItem("token",resp.data.encodedToken)
            return resp.data;
        }catch(err){
            console.log(err)
            return rejectWithValue(err)
        }
    }
)

export const signUpUser = createAsyncThunk(
    `auth/signingInUser`,
    async(userSignUpCredentials, {rejectWithValue})=>{
        console.log("signup ka output", userSignUpCredentials)
        try{
            const resp = await axios.post(`/api/auth/signup`,userSignUpCredentials)
            console.log(resp)
        }catch(err){
            console.log(err)
            return rejectWithValue(err)
        }
    }

)



const authSlice = createSlice({
    name: 'logInUser',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
          .addCase(logInUser.pending, state => {
            state.loading = true;
            state.error = null;
          })
          .addCase(logInUser.fulfilled, (state, action) => {
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
            state.isUserLoggedIn = true;
            state.loading = false;
          })
          .addCase(logInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(signUpUser.pending, state => {
              state.loading = true;
              state.error = null;
          })
          .addCase(signUpUser.fulfilled, (state,action)=>{
              state.loading = false;
              state.error = null;
              state.user = action.payload.createdUser;
             state.token = action.payload.encodedToken;
          })
          .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
        }
  })

  export default authSlice.reducer