import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import logo from "/youtube_icon.png";
import { SlMenu } from "react-icons/sl";
import useAppStore from "../../store/useAppStore";
import ThemeToggleButton from "../settings/ThemeToggleButton";
import SearchBox from "../home/SearchBox";
import "../../index.css";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { toggleSidebar, setSideBarToggled } = useAppStore();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleToggleNav = () => {
    setSideBarToggled(false);
    setToggleNav((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsLargeScreen(true);
      } else if (window.innerWidth < 640 && isLargeScreen) {
        setIsLargeScreen(false);
        setSideBarToggled(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isLargeScreen]);

  return (
    <header>
      <nav className="flex items-center justify-between h-14 relative w-full max-w-screen-2xl mx-auto z-10 md:px-5 px-2 py-2 bg-light-background dark:bg-dark-background">
        <div className="flex item-center md:gap-5 gap-2">
          <div className="rounded-full cursor-pointer h-7 w-7 flex items-center justify-center md:hidden">
            <SlMenu
              onClick={() => toggleSidebar()}
              size={19}
              className={`dark:text-dark-text-subtle ${
                toggleNav ? "hidden" : "block"
              }`}
            />
          </div>
          <Link
            to={"/"}
            className={`flex items-center gap-1 text-xl dark:text-dark-text font-medium cursor-pointer ${
              toggleNav ? "hidden" : "block"
            }`}
          >
            <img src={logo} alt="logo" className="size-7" />
            <h2 className="font-Oswald text-xl font-[400] text-black dark:text-white">
              YouTube
            </h2>
          </Link>

          <span>
            <FiArrowLeft
              size={23}
              onClick={() => setToggleNav((prev) => !prev)}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer dark:text-zinc-50 ${
                toggleNav ? "block" : "hidden"
              }`}
            />
          </span>
        </div>

        {(isLargeScreen || toggleNav) && <SearchBox />}

        <div className="flex items-center gap-5">
          <IoSearchOutline
            size={22}
            onClick={handleToggleNav}
            className={`cursor-pointer dark:text-dark-text sm:hidden ${
              toggleNav ? "hidden" : "block"
            }`}
          />
          <RiVideoAddLine
            size={22}
            className="dark:text-dark-text hidden md:block"
          />
          <IoNotificationsOutline
            size={22}
            className="dark:text-dark-text hidden md:block"
          />

          <ThemeToggleButton toggleNav={toggleNav} />
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
            className={`size-8 rounded-full object-cover ${
              toggleNav ? "hidden" : "block"
            }`}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
