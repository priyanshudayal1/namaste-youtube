import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/uiSlice";
import { CommentsContainer } from "./CommentsContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  });
  const [searchParams] = useSearchParams();
  const vidId = searchParams.get("v");
  return (
    <div className="flex w-full ">
      <div className="m-4 p-4">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + vidId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
      <LiveChat/>
      </div>
    </div>
  );
};
