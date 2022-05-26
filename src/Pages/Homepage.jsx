import React from "react";
import { Navbar, LeftSidebar, RightSidebar, Search, CreatePost, PostCard } from "../Components/Components";

const Homepage = () => {
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
          <PostCard/>
        </div>
        <div className="w-1/4">
          <RightSidebar />
        </div>      
      </div>
    </div>
  );
};

export { Homepage };
