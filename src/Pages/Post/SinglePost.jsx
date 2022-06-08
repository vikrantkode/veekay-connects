import { PostCard } from "../../Components/PostCard";
import { Navbar, LeftSidebar, RightSidebar, CommentBox } from "../../Components/Components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const getSinglePost = (state,postId) => state.post.posts.find((post) => post._id === postId)

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const  post  = useSelector(state => getSinglePost(state,postId))
 
  console.log("in single post clg", post)
  return (
    <div className="container relative w-full">
      <Navbar />
      <div className="w-full flex gap-x-8">
        <div className="w-1/4 mr-6">
          <LeftSidebar />
        </div>
        <div className="w-2/4 mr-6 flex flex-col gap-y-4 mt-6">
        <button className="w-[100px] py-1 ml-2 rounded-md text-black-700 bg-blue-400 hover:bg-blue-500     font-medium"
        onClick={() => navigate(-1)}> <span className="mr-3 items-center">&#8592;</span>BACK
      </button>
           {post 
           ? <>
             <PostCard item={post}/> 
             <CommentBox item={post}/>
             </>
           : null}
        </div>
        <div className="w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export  {SinglePost}