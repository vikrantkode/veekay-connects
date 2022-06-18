import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Navbar, LeftSidebar, RightSidebar, PostCard, Loader } from "../../Components/Components";

const OtherUserProfile = () => {
    const {userId} = useParams();
    const { allUsers } = useSelector((state) => state.auth);
    const { posts, userPosts, postLoading } = useSelector((state)=>state.post)
    console.log(posts)
    console.log(userPosts)
    const individualUser = allUsers.users.find((obj)=>obj.userHandle === userId)
    console.log(individualUser)

    const singleUserPost = posts.filter((obj)=>obj.username === individualUser.username)
    console.log("line 16",singleUserPost)
    
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
              src={individualUser?.profileImage}
              alt="profileImage"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="grow">
              <div className=" flex justify-between">
                <div>
                  <p className="text-xl font-semibold ml-4">
                    {individualUser?.firstName} {individualUser?.lastName}
                  </p>
                  <p className="ml-4 text-sm text-slate-400 ">
                    @{individualUser?.userHandle}
                  </p>
                </div>
                {/* <button className="rounded-md font-semibold text-gray-500 hover:bg-blue-400 mr-4 px-4 m-4"
                >
                  Edit
                </button> */}
              </div>
              <p className="text-gray-500 font-semibold mb-2 ml-4">{individualUser?.bio}</p>
              <div className="flex justify-around">
                <span>{singleUserPost.length} Posts</span> 
                <span>{individualUser?.followers?.length} Followers</span>
                <span>{individualUser?.following?.length} Following</span>
              </div>
              <div className=" p-4">
                <a href={individualUser?.link}
                 className="text-blue-500">
                {individualUser?.link}
                </a>
              </div>
            </div>
          </div>
          {postLoading 
          ? <Loader/>
          : singleUserPost?.length > 0 
          ?( singleUserPost?.map((item)=><PostCard key={item._id} item={item}/>)
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
  )
}

export  {OtherUserProfile}