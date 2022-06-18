import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postComments } from "../Pages/Post/PostSlice";

const getSinglePost = (state, postId) =>
  state.post.posts.find((post) => post._id === postId);
  const Comments = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getSinglePost(state, postId));
  // const {posts} = useSelector((item)=>item.post)
  const [commentsInPost,setCommentsinPost] = useState("")
  const listOfComments = [...post.comments].sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      )
  const dispatch = useDispatch  ();

  const commentHandler = (e) => {
    e.preventDefault();
    dispatch(postComments({postId: post._id,
      commentData : {text : commentsInPost}}))
      setCommentsinPost("");

  };

  // useEffect(()=>{
  //   setListOfcomments( [...post.comments].sort(
  //     (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  //   ))
  // },[post.comments])

  return (
    <>
      <div>
        <form className="flex  justify-center items-center"
         onSubmit={commentHandler}
         >
          <img
            src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg"
            alt="profile_pic"
            className="h-8 w-8 rounded-full cursor-pointer self-center"
          />
          <textarea
            placeholder="Enter Comments"
            className="border-none h-10 p-2 ml-1 focus:outline-none w-full resize-none bg-slate-50"
            onChange={(e)=>setCommentsinPost(e.target.value)}
            value={commentsInPost}
          />
          <button
            className="w-[80px] py-1 ml-2 rounded-md text-black-700 bg-blue-400 hover:bg-blue-500  font-medium"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
      <div>
        {listOfComments
          ? listOfComments.map((commentsOnPosts) => (
              <div key={commentsOnPosts._id}>
                <div className="flex justify-between flex-col bg-slate-100 mt-4">
                  <div className="flex">
                    <img
                      src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg"
                      alt="profile_pic"
                      className="h-8 w-8 rounded-full cursor-pointer self-center"
                    />{" "}
                    <h3>@{commentsOnPosts.username}</h3>
                  </div>
                  <div className="flex flex-col">
                    <p className="ml-10">{commentsOnPosts.text}</p>
                  </div>
                </div>
              </div>
            ))
          :<>
          {/* <CommentCreator commentCreate={commentHandler} />
          <CommentList listOfComments={listOfComments} /> */}
          </>  }
      </div>
    </>
  );
};

export { Comments };
