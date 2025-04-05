import React from "react";
import { categories, menus, settings } from "../../utils/Constant";
import logo from "/youtube_icon.png";
import { SlMenu } from "react-icons/sl";
import useAppStore from "../../store/useAppStore";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { isSideBarToggled, toggleSidebar } = useAppStore();
 
  return (
    <aside
      className={`sidebar h-screen md:h-[calc(100vh-3.5rem)] md:relative absolute top-0 ${
        isSideBarToggled ? "left-0" : "-left-52 md:left-0 "
      } z-20 w-52  md:w-64 dark:bg-dark-background bg-light-background rounded-r shadow-xl sm:shadow-none duration-300 overflow-y-scroll scrollbar-thin`}
      style={{
        scrollbarWidth: "none"
      }}
    >
      <div className="mt-1 flex flex-col gap-1.5 relative px-1">
        <div className="flex items-center gap-4 px-3 py-2 md:hidden">
          <SlMenu
            onClick={() => toggleSidebar()}
            size={19}
            className="dark:text-dark-text md:hidden cursor-pointer"
          />

          <div className="flex items-center justify-center gap-1">
            <img src={logo} alt="logo" className="size-7 " />
            <h2
              to={"/"}
              className="text-xl dark:text-dark-text cursor-pointer font-[400] font-Oswald"
            >
              Youtube
            </h2>
          </div>
        </div>

        {categories.map((category, i) => (
          <SidebarItem item={category} key={i} />
        ))}

        <div className="h-[.5px] bg-light-secondary dark:bg-dark-secondary my-3"></div>

        <h2 className="dark:text-dark-text text-light-text font-[450] md:px-4 sm:px-3 px-3">
          Explore
        </h2>

        {menus.map((menu, i) => (
          <SidebarItem item={menu} key={i} />
        ))}

        <div className="h-[.5px] bg-light-secondary dark:bg-dark-secondary my-3"></div>

        {settings.map((item, i) => (
          <SidebarItem item={item} key={i} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

