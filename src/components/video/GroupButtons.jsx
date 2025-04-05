import React from "react";
import { RiThumbDownLine, RiThumbUpLine } from "react-icons/ri";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import valueConvert from "../../utils/valueConvert";

const GroupButtons = ({ likes }) => {
  return (
    <div className="flex gap-3 md:justify-end justify-start items-center pl-4">
      <div className="flex items-center dark:bg-dark-surface-contrast text-white rounded-full overflow-hidden transition-colors duration-300">
        <button className="flex items-center gap-2 sm:px-4 sm:py-2 px-3 py-1.5 dark:bg-dark-secondary dark:hover:bg-[#3F3F3F] bg-light-surface hover:bg-light-surface-alt text-light-heading dark:text-dark-text transition-colors">
          <RiThumbUpLine size={20} /> {valueConvert(likes) || ""}
        </button>

        <div className="w-px h-10 bg-light-surface dark:bg-dark-surface-contrast">
          <div className="w-px h-6 my-2 bg-gray-500"></div>
        </div>
        <button className="sm:px-4 sm:py-2 px-4 py-1.5 h-9 flex items-center sm:h-10 dark:bg-dark-secondary dark:hover:bg-[#3F3F3F] bg-light-surface hover:bg-light-surface-alt text-light-heading dark:text-dark-text transition-colors">
          <RiThumbDownLine size={20} />
        </button>
      </div>

      <button className="flex items-center gap-2 px-3 sm:py-2 py-1.5 bg-light-surface  hover:bg-light-surface-alt dark:bg-dark-secondary dark:hover:bg-[#3F3F3F]  text-light-heading dark:text-dark-text rounded-full transition-colors text-sm sm:text-base">
        <PiShareFatLight size={23} /> Share
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-light-surface hover:bg-light-surface-alt dark:bg-dark-secondary dark:hover:bg-[#3F3F3F]  text-light-heading  dark:text-dark-text rounded-full transition-colors text-sm sm:text-base sm:hidden">
        <LiaDownloadSolid size={23} /> Download
      </button>
      <button className="px-3 py-2 bg-light-surface hover:bg-light-surface-alt dark:bg-dark-secondary dark:hover:bg-[#3F3F3F]  text-light-heading dark:text-dark-text rounded-full transition-colors min-w-max sm:block hidden">
        <BsThreeDots size={23} />
      </button>
    </div>
  );
};

export default GroupButtons;
