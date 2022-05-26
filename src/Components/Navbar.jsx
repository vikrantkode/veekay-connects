import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoImg from "../Assets/logoImg.png"

const Navbar = () => {
    const navigate = useNavigate();
    const logoutClickHandler = () =>{
        localStorage.clear();
        navigate("/login");
    }
  return (
    <div className="w-full flex justify-between items-center shadow-[0_0_10px_0_rgba(0,0,0,0.2)] ">
        <div className="logo ml-32 max-w-[15%]">
            <img src={logoImg} alt="logo" />
        </div>
        <div className="btns mr-16">
            <button className=" w-[120px] p-2 rounded-md text-gray-700 bg-blue-400 hover:bg-blue-500 font-medium m-4" onClick={logoutClickHandler}>Logout</button>
        </div>
    </div>
  )
}

export {Navbar}