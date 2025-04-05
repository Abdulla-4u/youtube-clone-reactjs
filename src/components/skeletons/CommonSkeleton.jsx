import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useThemeStore from "../../store/useThemeStore";

const CommentSkeleton = () => {
  const skeletonColorLight = "#F3F3F3"; // Light mode background
  const skeletonColorDark = "#313131"; // Dark mode background
  const skeletonHighlightLight = "#e0e0e0"; // Subtle light mode shimmer
  const skeletonHighlightDark = "#494949"; // Softer dark mode shimmer

  const { theme } = useThemeStore();

  return (
    <div className="flex gap-3 py-3">
      <Skeleton
        circle
        width={36}
        height={36}
        baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
        highlightColor={
          theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
        }
      />

      <div className="flex flex-col gap-1 w-full">
        <div className="flex">
          <div className="w-[30%]">
            <Skeleton
              width="90%"
              height="1rem"
              className="rounded-md bg-opacity-100"
              baseColor={
                theme === "dark" ? skeletonColorDark : skeletonColorLight
              }
              highlightColor={
                theme === "dark"
                  ? skeletonHighlightDark
                  : skeletonHighlightLight
              }
            />
          </div>
          <div className="w-full pl-4">
            <Skeleton
              width="20%"
              height="0.875rem"
              className="rounded-md bg-opacity-100"
              baseColor={
                theme === "dark" ? skeletonColorDark : skeletonColorLight
              }
              highlightColor={
                theme === "dark"
                  ? skeletonHighlightDark
                  : skeletonHighlightLight
              }
            />
          </div>
        </div>

        {/* Comment Text Skeleton */}
        <Skeleton
          width="90%"
          height="0.875rem"
          className="rounded-md"
          baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
          highlightColor={
            theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
          }
        />
        <Skeleton
          width="80%"
          height="0.875rem"
          className="rounded-md"
          baseColor={theme === "dark" ? skeletonColorDark : skeletonColorLight}
          highlightColor={
            theme === "dark" ? skeletonHighlightDark : skeletonHighlightLight
          }
        />
      </div>
    </div>
  );
};

export default CommentSkeleton;




