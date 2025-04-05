import React from "react";
import useFeedStore from "../../store/useFeedStore";

const SearchKeywordBox = ({ box }) => {
  const { feedCategoryId, setFeedCategoryId } = useFeedStore();

  return (
    <span
      onClick={() => setFeedCategoryId(box.categoryId)}
      className={`bg-light-surface text-light-text dark:bg-dark-overlay dark:text-dark-text hover:bg-light-surface-alt dark:hover:bg-dark-surface-alt transition-colors ${
        feedCategoryId === box.categoryId ? "category-active" : ""
      } cursor-pointer text-sm font-medium px-3 py-1.5 min-w-fit rounded-md whitespace-nowrap overflow-hidden text-ellipsis`}
    >
      {box.name}
    </span>
  );
};

export default SearchKeywordBox;
