import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useThemeStore from "../../store/useThemeStore";

const DescriptionSkeleton = () => {
  const skeletonColorLight = "#F3F3F3";
  const skeletonColorDark = "#313131";
  const skeletonHighlightLight = "#e0e0e0";
  const skeletonHighlightDark = "#494949";

  const { theme} = useThemeStore();

  return (
    <div className="my-6 mx-3 sm:mx-0">
      <Skeleton
        width="60%"
        height="1rem"
        className="rounded-md mb-2"
        baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
        highlightColor={
          theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
        }
      />

      <Skeleton
        width="100%"
        height="1.2rem"
        className="rounded-md mb-2"
        baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
        highlightColor={
          theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
        }
      />

      <Skeleton
        width="30%"
        height="1.1rem"
        className="rounded-md"
        baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
        highlightColor={
          theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
        }
      />
    </div>
  );
};

export default DescriptionSkeleton;
