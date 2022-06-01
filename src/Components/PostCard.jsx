import React from "react";
import {
  FaRegHeart,
  FaRegBookmark,
  FaRegComment,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deletePosts } from "../Pages/Post/PostSlice";

const PostCard = ({ item }) => {
  const {_id, firstName, username, content, likes} = item;
  const {likeCount } = likes;
  const dispatch = useDispatch();

  const deletePostHandler = async() =>{
    try{
      const resp = dispatch(deletePosts({postId : _id}))
      if(resp?.error)
      throw new Error("Error in Deleting Post");
      toast.success("Post Deleted Successfully")
    }catch(error){
      toast.error("Error in adding post")
       console.log(error);
    }
  }
  return (
    <>
      <div className="h-auto border-2 rounded-md p-2 bg-slate-100">
        <div className="djd">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg"
                alt="profile_pic"
                className="h-8 w-8 rounded-full cursor-pointer self-center"
              />
              <h1 className="font-semibold ml-2">{firstName}</h1>
              <p className="ml-4 text-gray-400">@{username}</p>
            </div>
            <div className="relative flex px-2 items-center">
              <FiEdit className="cursor-pointer text-lg hover:bg-sky-100 rounded-2xl m-2 w-10" />
              <MdDelete 
               className="cursor-pointer text-lg hover:bg-sky-100 rounded-2xl w-10" 
               onClick={ deletePostHandler }/>
            </div>
          </div>
          <div className="mt-4 mb-4 px-6">
            <p>{content}</p>
          </div>
          <div className="flex items-center justify-around gap-4">
            <label className="flex items-center cursor-pointer ">
              <FaRegHeart /> {likeCount} Like
            </label>
            <label className="flex items-center cursor-pointer">
              <FaRegBookmark /> Bookmark
            </label>
            <label className="flex items-center cursor-pointer">
              <FaRegComment /> Comment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostCard };
