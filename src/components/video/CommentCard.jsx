import React from "react";
import { RiThumbDownLine, RiThumbUpLine } from "react-icons/ri";
import moment from "moment";
import DefaultAvatar from "/avatar.png";
import valueConvert from "../../utils/valueConvert";
const CommentCard = ({ item }) => {

  const comment = item?.snippet?.topLevelComment?.snippet || {};
  const { authorProfileImageUrl, authorDisplayName, publishedAt, textOriginal, likeCount} = comment;

  return (
    <div className="flex gap-3">
      <img
        src={authorProfileImageUrl || DefaultAvatar}
        alt={`${authorDisplayName}'s profile`}
        className="size-9 rounded-full"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = DefaultAvatar;
        }}
      />

      <div>
        <div className="flex gap-2">
          <h3 className="font-[450] text-light-heading dark:text-dark-text">
            {authorDisplayName}
          </h3>
          <span className="text-xs pt-1.5 text-light-text-muted dark:text-dark-text-secondary">
            {publishedAt && moment(publishedAt).fromNow()}
          </span>
        </div>

        <p className="text-light-heading dark:text-dark-text line-clamp-3 text-[14px] pl-1 pt-1 ">
          {textOriginal}
        </p>

        <div className="flex gap-3 mt-2">
          <div className="flex gap-1">
            <RiThumbUpLine size={19} className="cursor-pointer dark:text-dark-text" />
            {!!likeCount && (
              <p className="dark:text-dark-text-secondary text-[#606060] text-sm">{valueConvert(likeCount)}</p>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <RiThumbDownLine size={19} className="cursor-pointer dark:text-dark-text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

