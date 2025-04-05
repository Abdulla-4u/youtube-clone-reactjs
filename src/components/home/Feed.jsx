import React, { useCallback, useEffect, useRef } from "react";
import { topSearchKeyword } from "../../utils/Constant";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import SearchKeywordBox from "../search/SearchKeywordBox";
import VideoCard from "./VideoCard";
import useFeedStore from "../../store/useFeedStore";
import FeedVideoCardSkeleton from "../skeletons/FeedVideoCardSkeleton";

const MemoizedSearchKeywordBox = React.memo(SearchKeywordBox);
const MemoizedVideoCard = React.memo(VideoCard);
const MemoizedFeedVideoCardSkeleton = React.memo(FeedVideoCardSkeleton);

const Feed = () => {
  const { feedVideos, feedCategoryId, getFeedVideos, isFeedLoading, isFeedError} = useFeedStore();
  const { setSearchTerm } = useContext(AppContext);
  const feedContainerRef = useRef(null);

  const fetchVideos = useCallback(() => {
    getFeedVideos();
  }, [getFeedVideos, feedCategoryId]);

  useEffect(() => {
    document.title = "YouTube";
    setSearchTerm("");
    fetchVideos();
    if (feedContainerRef.current) {
      feedContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [feedCategoryId, fetchVideos]);

  return (
    <div className="h-[calc(100vh-3.5rem)] relative md:w-[calc(100vw-14rem)] w-full max-w-[1440px] mx-auto ">
      <div className="text-dark-text dark:bg-dark-background px-3 flex gap-2 py-3.5 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide">
        {topSearchKeyword.map((box, idx) => (
          <MemoizedSearchKeywordBox key={idx} box={box} />
        ))}
      </div>

      <div
        ref={feedContainerRef}
        className={`text-dark-text overflow-auto h-[calc(100vh-7.3rem)] scrollbar-hide  ${
          (isFeedLoading || isFeedError) && "overflow-hidden"
        }`}
      >
        <div
          className={`grid dark:bg-dark-background 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 pb-5 sm:px-4 justify-center `}
        >
          {isFeedError ? (
            isFeedError.includes("quota") ? (
              <Error message="YouTube API quota exceeded. Please try again later." />
            ) : (
              <Error
                message="An error occurred. Please try again."
                onRetry={getFeedVideos}
              />
            )
          ) : isFeedLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <MemoizedFeedVideoCardSkeleton key={index} />
            ))
          ) : feedVideos?.length > 0 ? (
            feedVideos.map((video, idx) => (
              <MemoizedVideoCard key={idx} item={video} />
            ))
          ) : (
            <div className="text-center text-dark-muted dark:text-[#F5F5F5] flex flex-col items-center justify-center col-span-10 h-[calc(100vh-8.5rem)] ">
              No videos available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
