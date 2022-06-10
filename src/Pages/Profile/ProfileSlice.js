import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllUserServiceHandler} from "../../Service/user"

const initialState = {
    allUsers : [],
    notFollow: "",
    userProfileLoading : false,
}

export const getAllUsers = createAsyncThunk(
    `profile/getAllUsers`,
    async ({rejectWithValue})=>{
        try{
            const resp = await getAllUserServiceHandler();
            console.log("get all users",resp)
            return resp.data
        }catch (error){
            console.log(error);
            return rejectWithValue(error.message)
        }
    }
)


const userProfileSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{},
    extraReducers : builder =>{
        builder
        .addCase(getAllUsers.pending, state=>{
            state.userProfileLoading = true
        })
        
    }
})

export default userProfileSlice.reducer