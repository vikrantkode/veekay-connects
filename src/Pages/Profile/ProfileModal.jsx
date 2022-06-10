import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserProfile } from "../Auth/authSlice";

const ProfileModal = ({setEditProfileModalVisibility}) => {
  const {user} = useSelector((state) => state.auth)
  console.log(user)
  const dispatch = useDispatch();
  const [updatedLink, setUpdatedLink] = useState(user.link)
  const [updatedBio, setUpdatedBio] = useState(user.bio)
  
  const dataToUpdate = {
    link : updatedLink,
    bio : updatedBio,
  }
  const updateProfileHandler = () => {
    try{
      const resp = dispatch(updateUserProfile({userData : dataToUpdate}))
      console.log(resp)
      if (resp?.error) 
        throw new Error("error in editig post");
        toast.success("Profile Updated Successfully");
      setEditProfileModalVisibility((visibility)=>!visibility)
    }catch (error) {
      toast.error("Error in editing post");
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-200 z-[2] focus:outline-blue-500 absolute top-[50%] left-[40%] rounded-md w-1/4 p-4">
      <div className="flex flex-col gap-4 ">
        <button
          className="w-[50px] py-1  rounded-md text-black-700 hover:bg-blue-500  font-medium"
          onClick={() =>
            setEditProfileModalVisibility((visibility) => !visibility)
          }
        >
          <span className="mr-3 items-center">&#8592;</span>
        </button>
        <div className="flex">
          <p className="text-gray-500 font-semibold gap-4 mr-4 w-1/6">
            Profile Image
          </p>
          <div className="relative">
            <img
              src={user?.profileImage}
              className="h-12 w-12 rounded-full ml-6 object-cover"
              alt="display_picture"
            />
            <i className="fa-solid fa-camera absolute right-0 top-8 cursor-pointer bg-white rounded-full p-1" />
            <input
              className="cursor-pointer absolute top-8  right-0 opacity-0 w-8"
              accept="image/jpeg, image/png, image/svg, image/jpg, image/webp"
              type="file"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold gap-4">Link </p>
          <input
            className="w-[75%]  py-1 px-3 rounded-md focus:outline-blue-500 text-sm"
            onChange={(e) =>setUpdatedLink(e.target.value)}
            value={updatedLink}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold gap-4">Bio </p>
          <textarea
            rows="5"
            className="w-9/12 h-8 py-1 px-3 rounded-md text-sm focus:outline-blue-500"
            onChange={(e) => setUpdatedBio(e.target.value)}
            value={updatedBio}
          />
        </div>
        <div className="px-1 py-1 text-center">
          <button
            className="px-4 py-1 rounded-lg bg-blue-400  font-bold hover:bg-blue-500 cursor-pointer"
            onClick={updateProfileHandler}
            
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileModal };
