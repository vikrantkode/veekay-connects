import React from 'react'
import { FcSearch } from "react-icons/fc";
const Search = () => {
  return (
    <div className="flex items-center mt-5 w-full md:w-full h-10">
        <FcSearch className='absolute top-22 left-19 z-10 mr-2 ml-2'/>
        <input type="text" placeholder=' Search'
        className="relative border w-full h-5 p-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
        />
    </div>
  )
}

export {Search}