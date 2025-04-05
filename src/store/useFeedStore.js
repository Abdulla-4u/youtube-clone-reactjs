import { create } from "zustand";
import fetchApi from "../utils/Api";

const useFeedStore = create((set, get) => ({
  feedVideos: [],
  feedCategoryId: 0,
  feedCategory: "Home",
  isFeedLoading: false,
  isFeedError: null,

  channelAvatar: "",
  isAvatarLoading: false,


  setFeedCategoryId: (categoryId) => set({ feedCategoryId: categoryId }),

  getFeedVideos: async () => {
    try {
      set({ isFeedLoading: true, isFeedError: null });

      const FEED_VIDEOS_ENDPOINT = import.meta.env.VITE_FEED_VIDEOS_ENDPOINT;
      const {feedCategoryId} = get();

      const response = await fetchApi(`${FEED_VIDEOS_ENDPOINT}&videoCategoryId=${feedCategoryId}`);
      if (!response || !response.items) throw new Error("Invalid API response");

      set({ feedVideos: response.items });
    } catch (error) {
      console.error("Error fetching feed videos:", error);
      let errorMessage = "Something went wrong";
      if (error.response?.data?.error?.message) {
        errorMessage = error.response.data.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
  
      set({ isFeedError: errorMessage });
    } finally {
      set({ isFeedLoading: false });
    }
  },

  getChannelDetails: async (channelId) => {
    try {
      set({ isAvatarLoading: true });

      const CHANNEL_DETAILS_ENDPOINT = import.meta.env.VITE_CHANNEL_DETAILS_ENDPOINT;
      const response = await fetchApi(`${CHANNEL_DETAILS_ENDPOINT}?id=${channelId}`);

      if (!response || !response.items) throw new Error("Invalid API response");

      set({ channelAvatar: response.items[0]?.snippet?.thumbnails?.high?.url });
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error fetching Channel details from Feed:", error);
      }
    } finally {
      set({ isAvatarLoading: false });
    }
  },
  

}));

export default useFeedStore;
