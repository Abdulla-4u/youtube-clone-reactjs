import React, { useEffect } from "react";
import PlayVideo from "../components/video/PlayVideo";
import Recommended from "../components/video/Recommended";
import { useParams } from "react-router-dom";
import Comments from "../components/video/Comments";
import useVideoStore from "../store/useVideoStore";
import ScrollTop from "../components/animations/ScrollTop";
import useNetworkStore from "../store/useNetworkStore";
import useNetworkStatus from "../hooks/useNetworkStatus";
import NoInternet from "../components/errors/NoInternet";

const Video = () => {
  const { categoryId, videoId } = useParams();
  const { getVideoDetails } = useVideoStore();
  const { isOffline } = useNetworkStore();

  useEffect(() => {
    if (videoId) getVideoDetails(videoId);
  }, [videoId, getVideoDetails]);

  useNetworkStatus();

  return (
    <>
      {isOffline ? (
        <NoInternet />
      ) : (
        <div className="relative grid gap-2 w-full h-full lg:grid-cols-12 grid-rows-[auto] md:pt-5 pt-1 sm:px-4 dark:bg-[#0F0F0F] bg-white max-w-[1700px] mx-auto">
          <div className="lg:col-span-8 col-span-12">
            <PlayVideo videoId={videoId} />
          </div>

          <div className="lg:col-span-4 lg:row-span-2 col-span-12">
            <Recommended categoryId={categoryId} />
          </div>

          <div className="lg:col-span-8 col-span-12">
            <Comments />
          </div>
        </div>
      )}
      <ScrollTop />
    </>
  );
};

export default Video;
