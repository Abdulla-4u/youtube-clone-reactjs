import React from "react";
import "../../index.css";
const Loader = () => {
  return (
    <div className="h-[calc(100vh-56px)] w-full flex items-center justify-center">
        <div className="ui-loader loader-blk">
        <svg
          viewBox="0 0 50 50"
          className="multiColor-loader w-10 h-10" 
        >
          <circle
            cx="25" 
            cy="25" 
            r="20"
            fill="none"
            strokeWidth="3.6"
            className="loader-circle loader-circle-animation"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
