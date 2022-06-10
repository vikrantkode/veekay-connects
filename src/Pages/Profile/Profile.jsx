import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, LeftSidebar, RightSidebar, Loader, PostCard } from "../../Components/Components";
import { getUsersPost } from "../Post/PostSlice";
import { ProfileModal } from "./ProfileModal";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {postLoading, userPosts } = useSelector((state) => state.post);
  const [editProfileModalVisibility, setEditProfileModalVisibility] = useState(false);

  useEffect(() => {
    dispatch(getUsersPost(user.username));
  }, [dispatch,user.username]);

  return (
    <div className="container relative w-full">
      <Navbar />
      <div className="w-full flex gap-x-8">
        <div className="w-1/4 mr-6">
          <LeftSidebar />
        </div>
        <div className="w-2/4 mr-6 flex flex-col gap-y-4 mt-6">
          <div className="flex bg-slate-50 rounded-md p-4">
            <img
              src={user.profileImage}
              alt="profileImage"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="grow">
              <div className=" flex justify-between">
                <div>
                  <p className="text-xl font-semibold ml-4">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="ml-4 text-sm text-slate-400 ">
                    @{user.userHandle}
                  </p>
                </div>
                <button className="rounded-md font-semibold text-gray-500 hover:bg-blue-400 mr-4 px-4 m-4"
                 onClick={() => setEditProfileModalVisibility(true)}>
                  Edit
                </button>
                {editProfileModalVisibility && <ProfileModal
                setEditProfileModalVisibility={setEditProfileModalVisibility}/>}
              </div>
              <p className="text-gray-500 font-semibold mb-2 ml-4">{user.bio}</p>
              <div className="flex justify-around">
                <span>{userPosts.length} Posts</span> 
                <span>{user.followers?.length} Followers</span>
                <span>{user.following?.length} Following</span>
              </div>
              <div className=" p-4">
                <a href={user.link}
                 className="text-blue-500">
                {user.link}
                </a>
              </div>
            </div>
          </div>
          {postLoading 
          ? <Loader/>
          : userPosts.length > 0 
          ?( userPosts.map((item)=><PostCard key={item._id} item={item}/>)
          ) 
          : (
          <div className="text-center">
            No Posts Yet
          </div>
          )}
        </div>
        <div className="w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export { Profile };
