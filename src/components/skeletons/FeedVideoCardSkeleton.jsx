import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useThemeStore from "../../store/useThemeStore";

const FeedVideoCardSkeleton = () => {
  const { theme } = useThemeStore();

  const skeletonColorLight = "#F3F3F3";
  const skeletonHighlightLight = "#E0E0E0";
  const skeletonColorDark = "#313131";
  const skeletonHighlightDark = "#494949";

  return (
    <div className="w-[92vw] sm:w-full mx-auto bg-light-background dark:bg-dark-background">
      <div
        className="relative w-full max-w-full sm:rounded-lg overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full sm:rounded-lg overflow-hidden bg-opacity-30`}
        >
          <Skeleton
            className="w-full h-full"
            baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
            highlightColor={
              theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
            }
          />
        </div>
      </div>
  
    {/* Video Info Skeleton */}
    <div className="flex pt-3 gap-3 md:px-0 px-2">
      <Skeleton
        circle
        height={40}
        width={40}
        baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
        highlightColor={
          theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
        }
      />
  
      <div className="w-full">
        <Skeleton
          width="90%"
          height={16}
          className="mb-1"
          baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
          highlightColor={
            theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
          }
        />
        <Skeleton
          width="60%"
          height={14}
          className="mb-1"
          baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
          highlightColor={
            theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
          }
        />
        <Skeleton
          width="50%"
          height={14}
          baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
          highlightColor={
            theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
          }
        />
      </div>
    </div>
  </div>
  
  );
};

export default FeedVideoCardSkeleton;
