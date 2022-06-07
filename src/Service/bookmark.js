import axios from "axios"
const token = localStorage.getItem('token')

const getAllBookmarksServiceHandler = async () => {
    return await axios.get(`/api/users/bookmark`, { headers: { authorization: token } })
}

const addBookmarkServiceHandler = async (postId) => {
    return await axios.post(`/api/users/bookmark/${postId}`, {}, { headers: { authorization: token } })
}

const deleteBookmarkServiceHandler = async (postId) => {
    return await axios.post(`/api/users/remove-bookmark/${postId}`, {}, { headers: { authorization: token } })
}

export { getAllBookmarksServiceHandler, addBookmarkServiceHandler, deleteBookmarkServiceHandler };