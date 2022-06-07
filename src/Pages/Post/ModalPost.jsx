import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editPosts } from "./PostSlice";

const ModalPost = ({ setEditPostModalVisibility, item }) => {
  const [newPostContent, setNewPostContent] = useState(item?.content);
  const dispatch = useDispatch();

  const saveEditPostHandler = async () => {
    try {
      const resp = dispatch(editPosts({postId : item._id, postData: {...item,  content : newPostContent} }));
      if (resp?.error) {
        throw new Error("error in editig post");
      }
      toast.success("Post Edited Successfully");
      setEditPostModalVisibility((visibility) => !visibility)
    } catch (error) {
      toast.error("Error in editing post");
      console.log(error);
    }
  };

  return (
    <div className=" absolute left-[40%]  border-2 rounded-md p-4 bg-slate-100 z-10 w-96">
      <textarea
        placeholder="Write Something Intresting..."
        className="border-none focus:outline-none w-full resize-none bg-slate-50"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <div className="flex justify-between">
        <div>😀</div>
        <div>
          <button
            className="w-[80px] py-1 mt-2 rounded-2xl text-black-700 bg-blue-400 hover:bg-blue-500  
            font-medium "
            onClick={saveEditPostHandler}
          >
            Post
          </button>
          <button
            className=" hover:bg-blue-400 p-1 rounded-2xl font-medium w-[80px] py-1 mt-2"
            onClick={() =>
              setEditPostModalVisibility((visibility) => !visibility)
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalPost };
