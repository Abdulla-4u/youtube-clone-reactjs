import { useEffect } from "react";
import useNetworkStore from "../store/useNetworkStore";

const useNetworkStatus = () => {
  const { handleNetworkChange } = useNetworkStore();

  useEffect(() => {
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);


    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, [handleNetworkChange]);
};

export default useNetworkStatus;
