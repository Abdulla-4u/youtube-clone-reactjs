import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import CommentSkeleton from "../skeletons/CommonSkeleton";
import Skeleton from "react-loading-skeleton";
import useThemeStore from "../../store/useThemeStore";
import useVideoStore from "../../store/useVideoStore";
import CommentCard from "./CommentCard";
import valueConvert from "../../utils/valueConvert";

const Comments = () => {
  const { videoId } = useParams();
  const { videoDetails } = useVideoStore();
  const { comments, getComments, isCommentsLoading, isVideoDetailsLoading, commentsError} = useVideoStore();

  const { theme } = useThemeStore();
  const { commentCount } = videoDetails?.statistics || {};

  const formattedCommentCount = commentCount ? `${valueConvert(commentCount)} Comments` : "No Comments";

  const skeletonColors = useMemo(
    () => ({
      baseColor: theme === "dark" ? "dark-skeleton" : "light-skeleton",
      highlightColor: theme === "dark" ? "dark-skeleton-highlight" : "light-skeleton-highlight",
    }),
    [theme]
  );

  useEffect(() => {
    if (videoId) getComments(videoId);
  }, [videoId, getComments]);

  return (
    
      <div className="w-[98%] ml-auto pr-2 pt-5">
        {isVideoDetailsLoading ? (
          <Skeleton width={160} className="my-6" {...skeletonColors} />
        ) : (
          <h2 className="py-5 font-medium text-xl text-light-heading dark:text-dark-text">
            {formattedCommentCount}
          </h2>
        )}

        <div className="flex flex-col gap-5 pb-7">
          {isCommentsLoading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <CommentSkeleton key={index} />
              ))}
            </div>
          ) : commentsError ? (
            <p className="text-red-500 text-center">{commentsError}</p>
          ) : comments.length > 0 ? (
            <div className="flex flex-col gap-5">
              {comments.map((item, index) => (
                <CommentCard key={item.id || index} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No comments available.</p>
          )}
        </div>
      </div>
  );
};

export default Comments;
