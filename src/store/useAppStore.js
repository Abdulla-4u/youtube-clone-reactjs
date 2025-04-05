import { create } from "zustand";
import fetchApi from "../utils/Api";

const useAppStore = create((set) => ({
  channelDetails: {},
  channelAvatars: {},
  isChannelDetailsLoading: false,
  isAvatarLoading: false,
  isSideBarToggled: false,

  getChannelDetails: async (channelId) => {
    try {
      set({ isChannelDetailsLoading: true });

      const CHANNEL_DETAILS_ENDPOINT = import.meta.env
        .VITE_CHANNEL_DETAILS_ENDPOINT;
      const response = await fetchApi(
        `${CHANNEL_DETAILS_ENDPOINT}&id=${channelId}`
      );

      if (!response || !response.items) throw new Error("Invalid API response");

      set((state) => ({
        channelDetails: response.items[0],
      }));
    } catch (error) {
      console.error("Error fetching channel details:", error);
    } finally {
      set({ isChannelDetailsLoading: false });
    }
  },

  getChannelAvatar: async (channelId) => {
    try {
      set((state) => ({
        isAvatarLoading: { ...state.isAvatarLoading, [channelId]: true },
      }));

      const CHANNEL_DETAILS_ENDPOINT = import.meta.env
        .VITE_CHANNEL_DETAILS_ENDPOINT;
      const response = await fetchApi(
        `${CHANNEL_DETAILS_ENDPOINT}&id=${channelId}`
      );

      if (!response || !response.items) throw new Error("Invalid API response");

      const avatarUrl = response.items[0]?.snippet?.thumbnails?.medium?.url;

      set((state) => ({
        channelAvatars: { ...state.channelAvatars, [channelId]: avatarUrl },
        isAvatarLoading: { ...state.isAvatarLoading, [channelId]: false },
      }));
    } catch (error) {
      console.error("Error fetching channel avatar:", error);
      set((state) => ({
        isAvatarLoading: { ...state.isAvatarLoading, [channelId]: false },
      }));
    }
  },

  toggleSidebar: () => set((state) => ({ isSideBarToggled: !state.isSideBarToggled })),
  setSideBarToggled: (state) => set({ isSideBarToggled: state }),
}));

export default useAppStore;
