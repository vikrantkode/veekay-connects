import { useSelector } from "react-redux";
import { Navbar, LeftSidebar, RightSidebar, Loader, PostCard } from "../Components/Components";

const Explore = () => {
  const { posts, postLoading } = useSelector((state) => state.post);
  return (
    <div className="container relative w-full">
    <Navbar />
    <div className="w-full flex gap-x-8">
      <div className="w-1/4 mr-6">
        <LeftSidebar />
      </div>       
      <div className="w-2/4 mr-6 flex flex-col gap-y-4 mt-6">
       {postLoading 
       ?<Loader/>
       : posts.map((item)=><PostCard key={item._id} item={item}/>) }
      </div>
      <div className="w-1/4">
        <RightSidebar />
      </div>      
    </div>
  </div>
  )
}

export  {Explore}