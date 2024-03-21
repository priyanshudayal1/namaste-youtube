import { useEffect, useState } from "react";
import { SINGLE_COMMENT_API, YT_COMMENT_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoComments } from "../utils/uiSlice";

export const CommentsContainer = ({ vidId }) => {
  // const dispatch = useDispatch();
  // const getComments = async () => {
  //   const data = await fetch(YT_COMMENT_API + "&videoId=" + vidId);
  //   const json = await data.json();
  //   json?.items?.map(async (comment) => {
  //     const data = await fetch(SINGLE_COMMENT_API + "&parentId=" + comment.id);
  //     const json = await data.json();
  //     console.log(json);
  //   });
  // };
  // useEffect(()=>{
  //   getComments();
  // },[])
  return (
    <div className="ml-8 py-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
    </div>
  );
};
