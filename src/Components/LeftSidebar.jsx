import React from 'react'
import { NavLink } from "react-router-dom";
import { FaHome, FaBookmark } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const LeftSidebar = () => {
  return (
    <aside>
       <div className="sidebar_nav ml-20 mt-5 w-52 p-6 font-semibold block bg-slate-100 rounded-md sticky">
         <NavLink to="/home" className={({ isActive }) =>isActive ? ' text-blue-500 font-bold' : 'font-medium'}> 
            <div className="flex flex-row items-center py-2 rounded-md hover:bg-blue-200">
            <div className='ml-2 font-medium'> <FaHome/>  </div>
              <p className="ml-4">Home</p>
            </div>
          </NavLink>

          <NavLink to="/explore" className={({ isActive }) =>isActive ? 'text-blue-500 font-bold' : ' font-medium'}>
            <div className="flex flex-row items-center mt-4 py-2 rounded-md hover:bg-blue-200">
            <div className='ml-2'> <MdOutlineExplore/></div>
              <p className="ml-4">Explore</p>
            </div>
          </NavLink>

          <NavLink to="/bookmarks" className={({ isActive }) =>isActive ? 'text-blue-500 font-bold' : ' font-medium'}>
            <div className="flex flex-row items-center mt-4 py-2 rounded-md hover:bg-blue-200">
            <div className='ml-2 '><FaBookmark/></div>
            < p className="ml-4">Bookmark</p>
            </div>
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) =>isActive ? 'text-blue-500 font-bold' : ' font-medium '}>
            <div className="flex flex-row items-center mt-4 py-2 rounded-md hover:bg-blue-200">
              <div className='ml-2'><CgProfile/></div>
              <p className="ml-4">Profile</p>
            </div>
          </NavLink>

            {/* <button className='w-full py-2 rounded-md text-black-700 bg-blue-400 hover:bg-blue-500 font-medium mt-4'>Create New Post</button> */}
        </div>
    
    </aside>
  )
}

export  {LeftSidebar}