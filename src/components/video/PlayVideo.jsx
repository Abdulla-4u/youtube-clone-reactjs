import React, { useEffect } from "react";
import VideoDetails from "./VideoDetails.jsx";
import Description from "../video/Description.jsx";
import DescriptionSkeleton from "../skeletons/DescriptionSkeleton.jsx";
import useVideoStore from "../../store/useVideoStore.js";

const PlayVideo = ({ videoId }) => {
  const { videoDetails, isVideoDetailsLoading } = useVideoStore();

  useEffect(() => {
    if (videoDetails?.snippet?.title) {
      document.title = videoDetails?.snippet?.title;
    }
  }, [videoDetails?.snippet?.title, videoId]);

  return (
    <div>
      <VideoDetails videoId={videoId} />
      {isVideoDetailsLoading ? <DescriptionSkeleton /> : <Description />}
    </div>
  );
};

export default PlayVideo;
