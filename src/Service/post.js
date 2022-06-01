import axios from "axios"

const getAllpostsServiceHandler = async() =>{
  return await axios.get(`/api/posts`)
}

const createPostServicehandler = async(createPostData) =>{
    const token = localStorage.getItem('token')
    return await axios.post(`/api/posts`,{postData : createPostData}, {headers : {authorization : token}})
}

const deletePostServiceHandler = async(postId)=>{
    const token = localStorage.getItem('token')
    return await axios.delete(`/api/posts/${postId}`, {headers: {authorization: token}})
}
export {getAllpostsServiceHandler, createPostServicehandler, deletePostServiceHandler}