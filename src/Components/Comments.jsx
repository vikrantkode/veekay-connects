import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const getSinglePost = (state, postId) =>
  state.post.posts.find((post) => post._id === postId);
  const Comments = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getSinglePost(state, postId));
  const { comments } = post;
  const [listOfComments, setListOfcomments] = useState(comments ?? []);

  const commentHandler = (e) => {
    e.preventDefault();
    setListOfcomments((prev) => [...prev, listOfComments]);
  };

  const CommentCreator = ({commentCreate},e) =>{
       e.preventDefault();
        commentCreate(e.target.children[0].value);
      }
  
  const CommentList = ({ listOfComments }) => {
    return (
      <>
        {listOfComments.map((listOfComments) => (
          <div>{listOfComments}</div>
        ))}
      </>
    );
  };
  return (
    <>
      <div>
        <form className="flex  justify-center items-center"
         onSubmit={commentHandler}>
          <img
            src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg"
            alt="profile_pic"
            className="h-8 w-8 rounded-full cursor-pointer self-center"
          />
          <textarea
            placeholder="Enter Comments"
            className="border-none h-10 p-2 ml-1 focus:outline-none w-full resize-none bg-slate-50"
            // onChange={commentHandler}
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
          <CommentCreator commentCreate={commentHandler} />
          <CommentList listOfComments={listOfComments} />
          </>  }
      </div>
    </>
  );
};

export { Comments };
