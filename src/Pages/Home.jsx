import React from "react";
import Sidebar from "../components/common/Sidebar";
import Feed from "../components/home/Feed";
import useNetworkStatus from "../hooks/useNetworkStatus";
import NoInternet from "../components/errors/NoInternet";
import useNetworkStore from "../store/useNetworkStore";

const Home = () => {
  const isOffline = useNetworkStore((state) => state.isOffline);
  useNetworkStatus();
  return (
    <div className="flex gap-4 dark:bg-[#0F0F0F] h-[calc(100vh-56px)] w-full max-w-screen-2xl mx-auto">
      {isOffline ? (
        <NoInternet />
      ) : (
        <>
          <Sidebar />
          <Feed />
        </>
      )}
    </div>
  );
};

export default Home;
