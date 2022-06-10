import axios from "axios"
const token = localStorage.getItem('token')

const getAllUserServiceHandler = () => axios.get("/api/users");

const updateUserProfileService = (userData) =>{
    return axios.post(`/api/users/edit`,{userData},  {headers: { authorization: token }} )
}

const getUserProfileServiceHandler = (username) => {
    return axios.get(`/api/users/${username}`);
};

const getUserPostsServiceHandler = (username) => {
    return axios.get(`/api/posts/user/${username}`);
};

const editUserProfileService = (userData) => {
    return axios.post("/api/users/edit", { userData }, {headers: { authorization: token }});
};

export {getAllUserServiceHandler, updateUserProfileService, getUserPostsServiceHandler, getUserProfileServiceHandler, editUserProfileService}