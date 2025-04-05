import React, { useState } from "react";
import moment from "moment";
import useVideoStore from "../../store/useVideoStore";
import valueConvert from "../../utils/valueConvert";

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { videoDetails } = useVideoStore();
  const MAX_LENGTH = 100;

  return (
    <div className="dark:bg-dark-secondary bg-light-surface mt-3 p-3 rounded-lg mx-3 sm:mx-0 mb-1.5 sm:mb-0">
      <p className="text-[14px] text-light-heading dark:text-dark-text font-medium">
        {`${valueConvert(videoDetails?.statistics?.viewCount)} views`}{" "}
        &nbsp;&nbsp;
        {moment(videoDetails?.snippet?.publishedAt).fromNow()}
      </p>

      <p className="text-[14px] text-light-text dark:text-dark-text font-[400]">
        <span className="items-center">
          {isExpanded
            ? videoDetails?.snippet?.description
            : `${videoDetails?.snippet?.description?.slice(0, MAX_LENGTH)}`}

          {videoDetails?.snippet?.description.length > MAX_LENGTH && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`${
                isExpanded ? "block mt-3 font-[500]" : "block"
              } dark:text-dark-text text-light-heading text-[14px] font-medium focus:outline-none`}
            >
              {isExpanded ? "Show Less" : "...more"}
            </button>
          )}
        </span>
      </p>
    </div>
  );
};

export default Description;
