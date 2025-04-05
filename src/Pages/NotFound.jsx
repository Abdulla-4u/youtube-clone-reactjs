import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)] w-full flex flex-col justify-center items-center text-center">
      <img
        className="max-w-full w-36 object-cover"
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt="monkey.png"
      />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mt-3">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-3 w-1/3">
        This page isn't available. Sorry about that. Try searching for something
        else.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;
