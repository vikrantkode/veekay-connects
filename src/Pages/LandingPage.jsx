import React from 'react'
import heroImg from '../Assets/heroImg.jpg'
import logo from "../Assets/logoImg.png"

const LandingPage = () => {
  return (
    <div className='w-full h-full absolute flex flex-col justify-center items-center'>
        <img src={heroImg} 
          alt="heroImage" 
          className='h-full w-full bg-cover opacity-30'
        />
        <div className="absolute top-1/4 flex flex-col items-center">
          <img src={logo} 
            alt="logo" 
            className='justify-center items-center'
          />
         <p className='font-medium'>A Single Destination to connect with your loved ones and share your momemts with them.</p>
         <button className=" w-[120px] p-3 rounded-md text-gray-700 bg-sky-400 hover:bg-sky-500 font-medium mt-6 mb-6">JOIN NOW</button>
         <span className="font-bold">Already a member ? <button className='underline'>Sign In</button></span>
        </div>
        
    </div>
  )
}

export  {LandingPage}