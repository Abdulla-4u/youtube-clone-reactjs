import React from "react";

const NoResults = ({onRetry}) => {
  const handleRetry = () => {
    onRetry();
  };

  return (
    <div className="flex flex-col items-center justify-center text-light-text-muted dark:text-dark-text-muted">
      No results found.
      <button
        onClick={handleRetry}
        className="mt-4 bg-light-background dark:bg-dark-background dark:hover:bg-dark-elevated transition-colors duration-300 text-light-primary dark:text-dark-primary border border-light-border dark:border-dark-border rounded-full px-4 py-1.5"
      >
        Retry
      </button>
    </div>
  );
};

export default NoResults;
