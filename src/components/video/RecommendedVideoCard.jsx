import React, { memo } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import valueConvert from "../../utils/valueConvert";
import formatDuration from "../../utils/formatDuration";

const RecommendedVideoCard = memo(({ item }) => {
  if (!item || !item.snippet) return null;

  const { snippet, statistics } = item;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics || {};

  const formattedViews = viewCount
    ? `${valueConvert(viewCount)} Views`
    : "N/A";
  const publishedTime = moment(publishedAt).fromNow();
  
  return (
    <Link to={`/video/${snippet.categoryId}/${item.id}`} className="flex gap-3">
      <div className="relative w-32 sm:w-40 flex-shrink-0 rounded-lg overflow-hidden aspect-[16/9] bg-light-surface dark:bg-dark-surface">
        <img
          src={thumbnails.high.url}
          alt="thumbnail"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-200 hover:brightness-90"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-dark-text text-xs font-semibold px-1.5 py-0.5 rounded-md">
          {formatDuration(item?.contentDetails?.duration)}
        </div>
      </div>

      <div>
        <h4 className="font-medium text-[.88rem] line-clamp-2 text-light-text dark:text-dark-text">
          {title}
        </h4>

        <p className="font-normal text-[12px] py-1 text-light-text-muted dark:text-dark-text-secondary">
          {channelTitle || <Skeleton />} 
        </p>

        <p className="font-normal text-[12px] text-light-text-muted dark:text-dark-text-secondary">
          {formattedViews} &bull; {publishedTime}
        </p>
      </div>
    </Link>
  );
});

export default RecommendedVideoCard;
