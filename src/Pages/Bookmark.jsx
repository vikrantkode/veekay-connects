import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from "../Components/Loader";
import { PostCard } from "../Components/PostCard";
import { Navbar, LeftSidebar, RightSidebar } from "../Components/Components";
import { getAllBookmarkPost } from "./Post/PostSlice";

const Bookmark = () => {
  const dispatch = useDispatch();
  const { posts, postLoading, bookmarks } = useSelector((state) => state.post);
//   const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      try {
        const resp = dispatch(getAllBookmarkPost());
        if (resp?.error) throw new Error("Error in Loading Posts");
      } catch (error) {
        console.log(error)
      }
    })();
  },[]);

  const gettingBookmarkedPosts = posts.filter((post)=>bookmarks.includes(post._id))

  return (
    <div className="container relative w-full">
    <Navbar />
    <div className="w-full flex gap-x-8">
      <div className="w-1/4 mr-6">
        <LeftSidebar />
      </div>       
      <div className="w-2/4 mr-6 flex flex-col gap-y-4 mt-6">
        {postLoading ? 
         <Loader/> : gettingBookmarkedPosts?.length > 0 
                   ? gettingBookmarkedPosts.map((post)=><PostCard key={post._id} item = {post}/>)
                   : <p className="mt-5">"No Bookmarked Posts. Add from Explore feed page."</p>}
      </div>
      <div className="w-1/4">
        <RightSidebar />
      </div>      
    </div>
  </div>
  )
};

export { Bookmark };
