import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addPosts } from "../Pages/Post/PostSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {firstName, lastName} = user;
  const [writePost, setWritePost] = useState('')
  const createPostData = {
    firstName,
    lastName,
    content : writePost,
  }

  const createPostHandler = async(e) =>{
    e.preventDefault();
     try{
       const resp = dispatch(addPosts({createPostData}));
        if(resp?.error)
        throw new Error('Error in adding post')
        toast.success("Post Added Successfully")
     }catch(error){
       toast.error("Error in adding post")
       console.log(error);
     } 
  }
  return (
    <div className="border-2 rounded-md p-4 bg-slate-100 mt-5">
      <textarea
        placeholder="Write Something Intresting..."
        className="border-none focus:outline-none w-full resize-none bg-slate-50"
        onChange={(e)=>setWritePost(e.target.value)}
      />
      <div className="flex justify-between">
        <p>😀</p>
        {writePost.length === 0 ? <button 
         className="w-[80px] py-1 mt-2 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium
          disabled">
          Post
        </button> :
        <button 
         className="w-[80px] py-1 mt-2 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium"
         onClick={createPostHandler}>
          Post
        </button>
         }
      </div>
    </div>
  );
};

export { CreatePost };
