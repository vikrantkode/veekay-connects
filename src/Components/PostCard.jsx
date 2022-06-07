import React, { useState } from "react";
import { FaRegHeart, FaRegBookmark, FaRegComment } from "react-icons/fa";
import { ModalPost } from "../Pages/Post/ModalPost";
import { FiEdit } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  bookmarkPost,
  deleteBookmarkPost,
  deletePosts,
  dislikePosts,
  likePosts,
} from "../Pages/Post/PostSlice";

const PostCard = ({ item }) => {
  const [editPostModalVisibility, setEditPostModalVisibility] = useState(false);
  const { _id, firstName, username, content, likes } = item;
  const { likeCount, likedBy } = likes;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.post);

  const isThisPostLikedByUser = () => {
    return likedBy.some(
      (currentLoggedInUser) => currentLoggedInUser.username === user.username
    );
  };
  const likeBtn = isThisPostLikedByUser() ? <FcLike /> : <FaRegHeart />;

  const isThisPostBookmarkedByUser = () => {
    return bookmarks.some((itemId) => itemId === _id);
  };
  const [bookmarked, setBookmarked] = useState(isThisPostBookmarkedByUser());

  const bookmarkBtn = !bookmarked ? (
    <FaRegBookmark />
  ) : (
    <BsFillBookmarkStarFill />
  );

  const deletePostHandler = async () => {
    try {
      const resp = await dispatch(deletePosts({ postId: _id })).unwrap();
      if (resp?.error) throw new Error("Error in Deleting Post");
      toast.success("Post Deleted Successfully");
    } catch (error) {
      toast.error("Error in adding post");
      console.log(error);
    }
  };

  const likePostHandler = async () => {
    try {
      const resp = isThisPostLikedByUser()
        ? dispatch(dislikePosts({ postId: _id }))
        : dispatch(likePosts({ postId: _id }));
      if (resp?.error)
        throw new Error(
          isThisPostLikedByUser()
            ? "Error in Liking Post"
            : "Error in Disliking Post"
        );
    } catch (error) {
      toast.error("Error in adding post");
      console.log(error);
    }
  };

  const bookmarkPostHandler = async () => {
    try {
      let resp;
      if (!bookmarked) {
        resp = dispatch(bookmarkPost({ postId: _id }));
        setBookmarked(true);
        toast.success("Added In Bookmarks");
      } else {
        resp = dispatch(deleteBookmarkPost({ postId: _id }));
        setBookmarked(false);
      }
      if (resp.error)
        throw new Error(
          isThisPostLikedByUser()
            ? "Error in Bookmarking Post"
            : "Error in Delete Bookmarked Post"
        );
    } catch (error) {
      toast.error("Error in Bookmarking post");
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-auto border-2 rounded-md p-2 bg-slate-100">
        <div className="djd">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="https://res.cloudinary.com/mriant2812/image/upload/v1653508856/cld-sample.jpg"
                alt="profile_pic"
                className="h-8 w-8 rounded-full cursor-pointer self-center"
              />
              <h1 className="font-semibold ml-2">{firstName}</h1>
              <p className="ml-4 text-gray-400">@{username}</p>
            </div>
            <div className="flex px-2 items-center">
              <FiEdit
                className="cursor-pointer  text-lg hover:bg-sky-100 rounded-2xl m-2 w-10"
                onClick={() => setEditPostModalVisibility(true)}
              />
              {editPostModalVisibility && (
                <ModalPost
                  setEditPostModalVisibility={setEditPostModalVisibility}
                  item={item}
                />
              )}
              <MdDelete
                className="cursor-pointer text-lg hover:bg-sky-100 rounded-2xl w-10"
                onClick={deletePostHandler}
              />
            </div>
          </div>
          <div className="mt-4 mb-4 px-6">
            <p>{content}</p>
          </div>
          <div className="flex items-center justify-around gap-4">
            <label className="flex items-center cursor-pointer ">
              <button className="flex items-center" onClick={likePostHandler}>
                {likeBtn} {likeCount > 0 ? likeCount : ""} Like
              </button>
            </label>
            <label className="flex items-center cursor-pointer">
              <button
                className="flex items-center"
                onClick={bookmarkPostHandler}
              >
                {bookmarkBtn} Bookmark
              </button>
            </label>
            <label className="flex items-center cursor-pointer">
              <FaRegComment /> Comment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostCard };
