import React from 'react'

const RightSidebar = () => {
  return (
    <aside className="flex flex-col gap-5  p-4 w-80 mt-5 font-semibold bg-slate-100 rounded-md sticky">
        <div className="header">
            <p className='font-semibold text-center w-full py-2'>People You May Know</p>
        </div>
        <div className="1part flex items-center justify-between">
            <img src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg" alt="profile_pic" className='h-8 w-8 rounded-full cursor-pointer self-center'/>
            <div className="name flex flex-col pl-2">
                <h3>sansakaari_baalak</h3>
                <p className='text-xs'>sanskaari_baalak</p>
            </div>
            <div className="followbtn pl-3 lg:mt-4">
              <button className='w-[100px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium '> + Follow</button>
            </div>
            
        </div>
        <div className="1part flex items-center justify-between">
            <img src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg" alt="profile_pic" className='h-8 w-8 rounded-full cursor-pointer self-center'/>
            <div className="name flex flex-col pl-2">
                <h3>sansakaari_baalak</h3>
                <p className='text-xs'>sanskaari_baalak</p>
            </div>
            <div className="followbtn pl-3 lg:mt-4">
              <button className='w-[100px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium '> + Follow</button>
            </div>
            
        </div>
        <div className="1part flex items-center justify-between">
            <img src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg" alt="profile_pic" className='h-8 w-8 rounded-full cursor-pointer self-center'/>
            <div className="name flex flex-col pl-2">
                <h3>sansakaari_baalak</h3>
                <p className='text-xs'>sanskaari_baalak</p>
            </div>
            <div className="followbtn pl-3 lg:mt-4">
              <button className='w-[100px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium '> + Follow</button>
            </div>
            
        </div>
        <div className="1part flex items-center justify-between">
            <img src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg" alt="profile_pic" className='h-8 w-8 rounded-full cursor-pointer self-center'/>
            <div className="name flex flex-col pl-2">
                <h3>sansakaari_baalak</h3>
                <p className='text-xs'>sanskaari_baalak</p>
            </div>
            <div className="followbtn pl-3 lg:mt-4">
              <button className='w-[100px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium '> + Follow</button>
            </div>
        </div>

    </aside>
  )
}

export  {RightSidebar}