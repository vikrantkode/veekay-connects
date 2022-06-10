import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { followUser, getUsers, unfollowUser } from "../Pages/Auth/authSlice";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const resp = dispatch(getUsers());
        if (resp.error) throw new Error("Could not get posts. Try again later");
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const allOtherUser = state?.allUsers?.users?.filter(
    (ele) => ele.username !== state.user.username
  );

  const followUserHandler = (item) => {
    dispatch(followUser({ token, userId: item._id }));
    toast.success("Followed Successfully")
  };
 
  const unfollowUserHandler = (item) => {
    dispatch(unfollowUser({ token, userId: item._id }));
    toast.success("Unfollowed Successfully")
  };

  return (
    <aside className="flex flex-col gap-5  p-4 w-80 mt-5 font-semibold bg-slate-100 rounded-md sticky">
      <div className="header">
        <p className="font-semibold text-center w-full py-2">
          People You May Know
        </p>
      </div>
      {allOtherUser?.map((item) => (
        <div className="1part flex items-center justify-between" key={item._id}>
          <img
            src={item.profileImage}
            alt="profile_pic"
            className="h-8 w-8 rounded-full cursor-pointer self-center"
            onClick={() => navigate(`/user-profile/${item?.userHandle}`)}
          />
          <div className="name flex flex-col pl-2">
            <h3>
              {item.firstName} {item.lastName}
            </h3>
            <p className="text-xs">@{item.userHandle}</p>
          </div>

          <div className="followbtn pl-3 lg:mt-4">
            {state.user?.following?.some((e) => e._id === item._id) ? (
              <button
                className="w-[100px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500   font-medium "
                onClick={() => unfollowUserHandler(item)}
              >
                + Unfollow
              </button>
            ) : (
              <button
                className="w-[100px] py-1 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  font-medium "
                onClick={() => followUserHandler(item)}
              >
                + Follow
              </button>
            )}
           
          </div>
        </div>
      ))}
    </aside>
  );
};

export { RightSidebar };
