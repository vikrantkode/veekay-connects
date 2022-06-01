import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, LeftSidebar, RightSidebar, Search, CreatePost, PostCard } from "../Components/Components";
import { getAllPosts } from "./Post/PostSlice";


const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state.auth)
  const {token} = state;
  const postState = useSelector(state=>state.post)
  const {posts} = postState;

  useEffect(()=>{
   if(token){
     dispatch(getAllPosts());
   }
  },[token,dispatch])

  return (
    <div className="container w-full">
      <Navbar />
      <div className="w-full flex gap-x-8">
        <div className="w-1/4 mr-6">
          <LeftSidebar />
        </div>       
        <div className="w-2/4 mr-6 flex flex-col gap-y-4">
          <Search/>
          <CreatePost/>
          {posts.map((item)=><PostCard key={item._id} item={item}/> )}
        </div>
        <div className="w-1/4">
          <RightSidebar />
        </div>      
      </div>
    </div>
  );
};

export { Homepage };
