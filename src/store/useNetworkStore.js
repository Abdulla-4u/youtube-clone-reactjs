import { create } from "zustand";

const useNetworkStore = create((set) => ({
  isOffline: !navigator.onLine, 
  setIsOffline: (status) => set({ isOffline: status }),
  handleNetworkChange: (event) => {
    set({ isOffline: event.type === "offline" });
  },
}));


export default useNetworkStore;
