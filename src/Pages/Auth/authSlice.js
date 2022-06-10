import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { updateUserProfileService } from "../../Service/user"

const initialState = {
    user: {},
    token: "",
    isUserLoggedIn: false,
    loading: false,
    allUsers:[],
}

export const followUser = createAsyncThunk(
    'users/followUsers',
    async ({ token, userId }, { rejectWithValue }) => {
      try {
        const resp = await axios.post(`/api/users/follow/${userId}`,{}, { headers: { authorization: token }});
        return resp.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const unfollowUser = createAsyncThunk(
    'users/unfollowUsers',
    async ({ token, userId }, { rejectWithValue }) => {
      try {
        const resp = await axios.post(`/api/users/unfollow/${userId}`,{},{ headers: { authorization: token }});
        return resp.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async rejectWithValue => {
      try {
        const resp = await axios.get('/api/users');
        return resp.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const logInUser = createAsyncThunk(
    `auth/loggingInUser`,
    async (userLoginCredentials, { rejectWithValue }) => {
        try {
            const resp = await axios.post(`/api/auth/login`, userLoginCredentials)
            localStorage.setItem("token", resp.data.encodedToken)
            toast.success("Login Successfull.")
            return resp.data;
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    }
)

export const signUpUser = createAsyncThunk(
    `auth/signingInUser`,
    async (userSignUpCredentials, { rejectWithValue }) => {
        console.log("signup ka output", userSignUpCredentials)
        try {
            const resp = await axios.post(`/api/auth/signup`, userSignUpCredentials)
            localStorage.setItem("token", resp.data.encodedToken)
            localStorage.setItem("user", JSON.stringify(resp.data.createdUser))
            toast.success("Signup Successfull.")
            console.log("signup", resp.data)
            return resp.data;
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    }

)

export const updateUserProfile = createAsyncThunk(
    `profile/updateUserProfile`,
    async ({userData}, { rejectWithValue }) => {
        try {
            const resp = await updateUserProfileService(userData)
            console.log(resp)
            return resp.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message)
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
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.createdUser;
                state.token = action.payload.encodedToken;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUserProfile.pending, state => {
                state.userProfileLoading = true
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.userProfileLoading = false
                state.user = action.payload.user;
            })
            .addCase(updateUserProfile.rejected, state => {
                state.userProfileLoading = false
                state.error = "Error in Updation Profile"
            })
            .addCase(getUsers.pending, state=>{
                state.userProfileLoading = true;
            })
            .addCase(getUsers.fulfilled, (state,action)=>{
                state.userProfileLoading = false;
                state.allUsers = action.payload;
            })
            .addCase(getUsers.rejected, state=>{
                state.userProfileLoading = false;
                state.allUsers = "Error in getting all users";
            })
            .addCase(followUser.pending, state=>{
                state.userProfileLoading = true;
            })
            .addCase(followUser.fulfilled, (state,action)=>{
                state.userProfileLoading = false;
                state.user = action.payload.user
            })
            .addCase(followUser.rejected, state=>{
                state.userProfileLoading = false;
                state.user = "Error in Following Account"
            })
            .addCase(unfollowUser.pending, state=>{
                state.userProfileLoading = true;
            })
            .addCase(unfollowUser.fulfilled, (state,action)=>{
                state.userProfileLoading = false;
                state.user = action.payload.user
            })
            .addCase(unfollowUser.rejected, state=>{
                state.userProfileLoading = false;
                state.user = "Error in Following Account"
            })
    }
})

export default authSlice.reducer