import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllpostsServiceHandler, createPostServicehandler, deletePostServiceHandler } from "../../Service/post";

const initialState = {
    posts : [],
    postLoading : false,
    postError : null,
}

export const getAllPosts = createAsyncThunk(
    `posts/getAllPosts`,
    async rejectWithValue=>{
        try{
            const resp = await getAllpostsServiceHandler();
            return resp.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
        }
    }
)

export const addPosts = createAsyncThunk(
    `posts/addPosts`,
    async ({createPostData}, {rejectWithValue})=>{
        try{
           const resp = await createPostServicehandler(createPostData);
           return resp.data;
          }
          catch (error){
             console.log(error);
             return rejectWithValue(error.message)
          }
    }
)

export const deletePosts = createAsyncThunk(
    `posts/deletePosts`,
    async({postId},{rejectWithValue})=>{
        try{
            const resp = await deletePostServiceHandler(postId)
            return resp.data;
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{},
    extraReducers : builder =>{
        builder
        .addCase(getAllPosts.pending, state=>{
            state.postLoading = true;
            state.error = null;
        })
        .addCase(getAllPosts.fulfilled,(state,action)=>{
            state.postLoading = false;
            state.posts = action.payload.posts;
        })
        .addCase(getAllPosts.rejected, (state) => {
            state.loading = false;
            state.postError = "Error In Loading Posts";
        })
        .addCase(addPosts.pending, state=>{
            state.postLoading = true;
            state.error = null;
        })
        .addCase(addPosts.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.posts = action.payload.posts;
        })
        .addCase(addPosts.rejected, state =>{
            state.loading = false;
            state.postError = "Error In Adding Post";
        })
        .addCase(deletePosts.pending, state=>{
            state.postLoading = true;
            state.postError = null;
        })
        .addCase(deletePosts.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.posts = action.payload.posts;
        })
        .addCase(deletePosts.rejected, state=>{
            state.postLoading = false;
            state.postError = "Error In Deleting Post";
        })

    }
})

  export default postSlice.reducer
  