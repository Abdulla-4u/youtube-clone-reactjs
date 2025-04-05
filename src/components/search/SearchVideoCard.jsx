import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAppStore from "../../store/useAppStore";
import DefaultAvatar from "/avatar.png";
import formatDuration from "../../utils/formatDuration";
import valueConvert from "../../utils/valueConvert";
const SearchVideoCard = ({ video }) => {
  const { getChannelAvatar, channelAvatars, isAvatarLoading } = useAppStore();
  const { channelId } = video?.snippet || {};
  const avatarUrl = channelAvatars?.[channelId];

  useEffect(() => {
    if (channelId && !avatarUrl) {
      getChannelAvatar(channelId);
    }
  }, [channelId, avatarUrl, getChannelAvatar]);

  return (
    <Link
      to={`/video/${video?.snippet?.categoryId}/${video?.id}`}
      className="flex flex-col md:flex-row md:gap-4 w-full overflow-hidden"
    >
      <div className="relative w-full md:w-[29rem] h-[15rem] sm:h-[20rem] md:h-[16rem] mx-auto flex-shrink-0 md:rounded-xl overflow-hidden">
        <img
          src={video?.snippet?.thumbnails?.high?.url}
          alt="thumbnail"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-dark-text text-xs font-semibold px-1.5 py-0.5 rounded-md">
          {formatDuration(video?.contentDetails?.duration)}
        </div>
      </div>

      <div className="flex flex-col md:px-0 px-3 flex-grow">
        <h2 className="font-[400] sm:text-[18px] md:text-xl pt-2 line-clamp-2 md:pt-0 text-light-heading dark:text-dark-text">
          {video?.snippet?.title || "Wedding is very important in my life"}
        </h2>
        <p className="text-xs py-1 text-light-text-muted dark:text-dark-text-secondary font-[400]">
          {valueConvert(video?.statistics?.viewCount) + " views"} &bull;{" "}
          {moment(video?.snippet?.publishedAt).fromNow()}
        </p>
        <div className="flex items-center gap-3 pb-2">
          {isAvatarLoading?.[channelId] ? (
            <div className="w-6 h-6 md:h-7 rounded-full bg-light-skeleton dark:bg-dark-skeleton animate-pulse"></div>
          ) : (
            <img
              src={avatarUrl || DefaultAvatar}
              alt="avatar"
              className="w-6 h-6 md:w-7 md:h-7 object-cover rounded-full"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DefaultAvatar;
              }}
            />
          )}
          <h3 className="font-[400] py-3 text-xs md:text-sm text-light-text-muted dark:text-dark-text-secondary">
            {video?.snippet?.channelTitle || ""}
          </h3>
        </div>
        <p className="text-light-text-muted dark:text-dark-text-secondary line-clamp-2 text-xs md:text-sm sm:block hidden">
          {video.snippet.description?.slice(0, 100) + "..." || ""}
        </p>
      </div>
    </Link>
  );
};

export default SearchVideoCard;
