import React, { useEffect, useState } from "react";
import RecommendedSkeleton from "../skeletons/RecommendedSkeleton";
import useRecommendedStore from "../../store/useRecommendedStore";
import RecommendedVideoCard from "../video/RecommendedVideoCard";
const Recommended = ({ categoryId }) => {
  const { recommendedVideos, fetchRecommendedVideos, isLoading, isError } = useRecommendedStore();
  const [isMediumScreen, setIsMediumScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (categoryId) fetchRecommendedVideos(categoryId);
  }, [categoryId, fetchRecommendedVideos]);

  return (
    <div className="flex flex-col gap-3 px-2">
      {isError ? (
        <div className="h-screen flex flex-col mt-10 text-center">
          <p className="text-xl text-red-500">{isError}</p>
          <p className="text-xs dark:text-text-muted text-muted mt-1">
            Please try again.
          </p>
        </div>
      ) : isLoading ? (
        Array.from({ length: 8 }, (_, index) => (
          <RecommendedSkeleton key={index} isMediumScreen={isMediumScreen} />
        ))
      ) : (
        recommendedVideos.map((item, index) => (
          <RecommendedVideoCard
            item={item}
            key={index}
            isMediumScreen={isMediumScreen}
          />
        ))
      )}
    </div>
  );
};

export default Recommended;
