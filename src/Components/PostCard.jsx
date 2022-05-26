import React from 'react'
import { FaRegHeart, FaRegBookmark, FaRegComment, FaRegShareSquare } from "react-icons/fa"; 

const PostCard = () => {
  return (
      <>
    <div className="h-auto border-2 rounded-md p-2">
        <div className="djd">
        <div className="flex">
         <img src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg" alt="profile_pic" className='h-8 w-8 rounded-full cursor-pointer self-center'/>
         <h1 className='font-semibold ml-2'>Sanskaari baalak</h1>
         <p className='ml-4 text-gray-400'>@sanskaari_baalak</p>
        </div>
        <div className="mt-4 mb-4">
            <p>To Kaise hai aaplog ?</p>
        </div>
        <div className="flex items-center justify-between gap-4">
         <label className="flex items-center"><FaRegHeart/>  1 Like</label>
         <label className="flex items-center"><FaRegBookmark/> Bookmark</label>
         <label className="flex items-center"><FaRegComment/> Comment</label>
         <label className="flex items-center"><FaRegShareSquare/> Share </label>
         
        </div>
        </div>
       
    </div>
    <div className="h-auto border-2 rounded-md p-2">
        <div className="djd">
        <div className="flex">
         <img src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg" alt="profile_pic" className='h-8 w-8 rounded-full cursor-pointer self-center'/>
         <h1 className='font-semibold ml-2'>Sanskaari baalak</h1>
         <p className='ml-4 text-gray-400'>@sanskaari_baalak</p>
        </div>
        <div className="mt-4 mb-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt esse expedita, provident officia dolore quaerat quisquam, architecto ipsam eius voluptas quis mollitia iusto? Fuga!</p>
        </div>
        <div className="flex items-center justify-between gap-4">
         <label className="flex items-center"><FaRegHeart/>  1 Like</label>
         <label className="flex items-center"><FaRegBookmark/> Bookmark</label>
         <label className="flex items-center"><FaRegComment/> Comment</label>
         <label className="flex items-center"><FaRegShareSquare/> Share </label>
         
        </div>
        </div>
       
    </div>
    </>
  )
}

export  {PostCard}