import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addBookmarkServiceHandler, deleteBookmarkServiceHandler, getAllBookmarksServiceHandler } from "../../Service/bookmark";
import { getAllpostsServiceHandler, createPostServicehandler, deletePostServiceHandler, likePostServiceHandler, dislikePostServiceHandler, editPostServicehandler, commentPostServiceHandler } from "../../Service/post";
import { getUserPostsServiceHandler } from "../../Service/user";



const initialState = {
    posts : [],
    userPosts: [],
    postLoading : false,
    postError : null,
    bookmarks : [],
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

export const getUsersPost = createAsyncThunk(
    `posts/getAllUsersPosts`,
    async (username, {rejectWithValue})=>{
        try{
            const resp = await getUserPostsServiceHandler(username);
            return resp.data;
        }catch (error) {
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

export const likePosts = createAsyncThunk(
    `posts/likePosts`,
    async({postId},{rejectWithValue}) =>{
        console.log(postId)
        try{
            const resp = await likePostServiceHandler(postId)
            return resp.data;
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)

export const dislikePosts = createAsyncThunk(
    `posts/dislikePosts`,
    async({postId},{rejectWithValue}) =>{
        try{
            const resp = await dislikePostServiceHandler(postId)
            return resp.data
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)

export const editPosts = createAsyncThunk(
    `posts.editPost`,
    async({postId, postData}, {rejectWithValue})=>{
        try{
            const resp = await editPostServicehandler(postId, postData);
            return resp.data
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)

export const getAllBookmarkPost = createAsyncThunk(
    `posts/getAllBookmarkPost`,
    async({postId},{rejectWithValue}) =>{
        try{
            const resp = await getAllBookmarksServiceHandler(postId)
            return resp.data
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)

export const bookmarkPost = createAsyncThunk(
    `posts/bookmarkPost`,
    async({postId},{rejectWithValue}) =>{
        try{
            const resp = await addBookmarkServiceHandler(postId)
            return resp.data          
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)

export const deleteBookmarkPost = createAsyncThunk(
    `posts/deleteBookmarkPost`,
    async({postId},{rejectWithValue}) =>{
        try{
            const resp = await deleteBookmarkServiceHandler(postId)
            return resp.data           
        }catch(error){
            console.log(error);
             return rejectWithValue(error.message)
        }
    }
)

export const postComments = createAsyncThunk(
    `posts/postComments`,
    async({postId, commentData},{rejectWithValue})=>{
        try{
            const {data} = await commentPostServiceHandler(postId, commentData)
            console.log("line 153",data)
            return {data, postId}
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
        .addCase(getUsersPost.pending, state=>{
            state.postLoading = true;
            state.error = null;
        })
        .addCase(getUsersPost.fulfilled,(state,action)=>{
            state.postLoading = false;
            state.userPosts = action.payload.posts
        })
        .addCase(getUsersPost.rejected, (state) => {
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
        .addCase(likePosts.pending, state=>{
            state.postLoading = true;
        })
        .addCase(likePosts.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.posts = action.payload.posts;
        })
        .addCase(likePosts.rejected, state=>{
            state.postLoading = false;
            state.postError = "Error In Liking Post";
        })
        .addCase(dislikePosts.pending, state=>{
            state.postLoading = true;
        })
        .addCase(dislikePosts.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.posts = action.payload.posts;
        })
        .addCase(dislikePosts.rejected, state=>{
            state.postLoading = false;
            state.postError = "Error In disLiking Post";
        })
        .addCase(editPosts.pending, state=>{
            state.postLoading = true;
        })
        .addCase(editPosts.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.posts = action.payload.posts;
        })
        .addCase(editPosts.rejected, state=>{
            state.postLoading = false;
            state.postError = "Error In editing Post";
        })
        .addCase(bookmarkPost.pending, state=>{
            state.postLoading = true;
        })
        .addCase(bookmarkPost.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.bookmarks = action.payload.bookmarks;
        })
        .addCase(bookmarkPost.rejected, state =>{
            state.postLoading = false;
            state.postError = "Error In bookmarking Post";
        })
        .addCase(deleteBookmarkPost.pending, state=>{
            state.postLoading = true;
        })
        .addCase(deleteBookmarkPost.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.bookmarks = action.payload.bookmarks;
        })
        .addCase(deleteBookmarkPost.rejected, state =>{
            state.postLoading = false;
            state.postError = "Error In bookmarking Post";
        })
        .addCase(getAllBookmarkPost.pending, state => {
            state.postLoading = true;
        })
        .addCase(getAllBookmarkPost.fulfilled, (state,action)=>{
            state.postLoading = false;
            state.bookmarks = action.payload.bookmarks;
        })
        .addCase(getAllBookmarkPost.rejected, state =>{
            state.postLoading = false;
            state.postError = "Error In getting bokmarked Post";
        })
        .addCase(postComments.pending, state => {
            state.postLoading = true;
        })
        .addCase(postComments.fulfilled, (state,action)=>{
            state.postLoading = false;
            const index = state.posts.findIndex((item)=>item._id === action.payload.postId);
            state.posts[index].comments = action.payload.data.comments;
        })
        .addCase(postComments.rejected, state =>{
            state.postLoading = false;
            state.postError = "Error In getting bokmarked Post";
        })


    }
})

  export default postSlice.reducer
  