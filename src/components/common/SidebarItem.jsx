import React from "react";
import useFeedStore from "../../store/useFeedStore";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const { feedCategoryId, setFeedCategoryId  } = useFeedStore();
  const navigate = useNavigate();

  const handleSidebar = (item) => {
    if(item.type === "category"){
        navigate("/"); 
        setFeedCategoryId(item.categoryId)
    }
  };

  return (
    <div
      onClick={()=> handleSidebar(item)}
      className={`md:px-4 sm:px-3 px-3 transition-colors ${
        feedCategoryId == item.categoryId && "dark:bg-dark-surface-alt bg-light-surface-alt"
      } hover:bg-light-surface-alt dark:hover:bg-dark-surface-alt flex items-center justify-start gap-4 text-sm p-2 cursor-pointer rounded-md group`}
    >
      <button
        className={`text-light-text dark:text-dark-text text-xl transition-colors duration-500`}
      >
        {item.icon}
      </button>
      <h2
        className={`font-[400] whitespace-pre text-light-heading dark:text-dark-heading duration-500`}
      >
        {item.name}
      </h2>
    </div>
  );
};

export default SidebarItem;
