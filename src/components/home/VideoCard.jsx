import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import formatDuration from "../../utils/formatDuration";
import DefaultAvatar from "/avatar.png";
import useAppStore from "../../store/useAppStore";
import valueConvert from "../../utils/valueConvert";
const VideoCard = ({ item }) => {

  const {getChannelAvatar, channelAvatars, isAvatarLoading} = useAppStore();
  const channelId = item?.snippet?.channelId || '';

  const avatarUrl = channelAvatars?.[channelId]; 
  
  useEffect(() => {
    if (channelId && !avatarUrl) {  
      getChannelAvatar(channelId);
    }
  }, [channelId, avatarUrl, getChannelAvatar]);


  return (
    <Link
      to={`/video/${item?.snippet?.categoryId}/${item?.id}`}
      className="bg-light-background dark:bg-dark-background"
    >
      <div
        className="relative w-full max-w-full sm:rounded-lg overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <img
          src={item?.snippet?.thumbnails?.high?.url}
          alt="thumbnail"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-200 hover:brightness-90"
        />

        <div className="absolute bottom-2 right-2 bg-black/80 text-dark-text text-xs font-semibold px-1.5 py-0.5 rounded-md">
          {formatDuration(item?.contentDetails?.duration)}
        </div>
      </div>

      <div className="flex pt-3 gap-3 md:px-0 px-2">
        {isAvatarLoading?.[channelId] ? (
          <div className="h-10 w-10 rounded-full bg-light-skeleton dark:bg-dark-skeleton flex-shrink-0 animate-pulse"></div>
        ) : (
          <img
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
            src={avatarUrl || DefaultAvatar}
            alt="channel avatar"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DefaultAvatar;
            }}
          />
        )}

        <div>
          <h2 className="font-medium pb-1 md:text-base text-sm line-clamp-2 text-light-heading dark:text-dark-text">
            {item?.snippet?.title || ""}
          </h2>
          <p className="pb-1 text-[13px] text-light-text-muted dark:text-dark-text-secondary font-normal">
            {item?.snippet?.channelTitle || ""}
          </p>
          <p className="pb-1 text-[14px] text-light-text-muted dark:text-dark-text-secondary">
            {valueConvert(item?.statistics?.viewCount) + " views"} &bull;{" "}
            {moment(item?.snippet?.publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
