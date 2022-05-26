import React from 'react'

const CreatePost = () => {
  return (
    <div className="border-2 rounded-md p-4">
        <textarea placeholder='Write Something Intresting...' className='border-none focus:outline-none w-full resize-none '/>
        <div className="flex justify-between">
        <p>😀</p>
        <button className='w-[80px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium '> Post</button>
        </div>
    </div>
  )
}

export  {CreatePost}