import React, { useEffect, useState } from "react";
import { YT_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [videos, setVideos] = useState();
  const getVideos = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex justify-center flex-wrap">
      {videos?.map((vid) => (
        <Link to={"/watch?v=" + vid.id} key={vid.id}>
          <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};
