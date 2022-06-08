import axios from "axios"
const token = localStorage.getItem('token')

const getAllpostsServiceHandler = async() =>{
  return await axios.get(`/api/posts`)
}

const createPostServicehandler = async(createPostData) =>{
    return await axios.post(`/api/posts`,{postData : createPostData}, {headers : {authorization : token}})
}

const deletePostServiceHandler = async(postId)=>{
    return await axios.delete(`/api/posts/${postId}`, {headers: {authorization: token}})
}

const likePostServiceHandler = async(postId)=>{
    return await axios.post(`/api/posts/like/${postId}`,{},{headers: {authorization: token}})
}

const dislikePostServiceHandler = async(postId)=>{
    return await axios.post(`/api/posts/dislike/${postId}`,{},{headers: {authorization: token}})
}

const editPostServicehandler = async(postId, postData)=>{
    return await axios.post(`/api/posts/edit/${postId}`,{postData : postData} , {headers : {authorization: token}} )
}

const commentPostServiceHandler = async(postId, commentData)=>{
    return await axios.post(`/api/comments/add/${postId}`,{commentData}, {headers : {authorization: token}} )
}

const deleteCommentServiceHandler = async(postId, commentId)=>{
    return await axios.post(`/api/comments/delete/${postId}/${commentId}`,{headers : {authorization: token}} )
}

const editCommentServiceHandler = async(postId, commentId, commentData)=>{
    return await axios.post(`/api/comments/edit/${postId}/${commentId}`,{commentData},{headers : {authorization: token}})
}
 
export {getAllpostsServiceHandler, createPostServicehandler, deletePostServiceHandler, likePostServiceHandler, dislikePostServiceHandler, editPostServicehandler, commentPostServiceHandler,deleteCommentServiceHandler,editCommentServiceHandler}