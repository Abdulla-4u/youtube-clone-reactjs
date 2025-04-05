import { create } from "zustand";
import fetchApi from "../utils/Api";

const useVideoStore = create((set) => ({
  videoDetails: [],
  isVideoDetailsLoading: false,
  videoDetailsError: null,

  comments: [],
  isCommentsLoading: false,
  commentsError: null,

  getVideoDetails: async (videoId) => {
    try {
      set({ isVideoDetailsLoading: true, videoDetailsError: null });

      const VIDEO_DETAILS_ENDPOINT = import.meta.env.VITE_VIDEO_DETAILS_ENDPOINT;
      const response = await fetchApi(`${VIDEO_DETAILS_ENDPOINT}&id=${videoId}`);

      if (!response || !response.items || response.items.length === 0) throw new Error("Invalid API response");

      set({ videoDetails: response.items[0] });
    } catch (error) {
      console.error("Error fetching video details:", error);

      let errorMessage = "Something went wrong. Please try again.";

      if (error.message?.includes("quota")) {
        errorMessage = "YouTube API quota exceeded. Please try again later.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      set({ videoDetailsError: errorMessage });
    } finally {
      set({ isVideoDetailsLoading: false });
    }
  },

  getComments: async (videoId) => {
    try {
      set({ isCommentsLoading: true, commentsError: null });

      const COMMENTS_DETAILS_ENDPOINT = import.meta.env.VITE_COMMENTS_DETAILS_ENDPOINT;
      const response = await fetchApi(`${COMMENTS_DETAILS_ENDPOINT}&videoId=${videoId}`);

      if (!response || !response.items || response.items.length === 0) throw new Error("Invalid API response");

      set({ comments: response.items });
    } catch (error) {
      console.error("Error fetching comments:", error);

      let errorMessage = "Something went wrong. Please try again.";

      if (error.message?.includes("quota")) {
        errorMessage = "YouTube API quota exceeded. Please try again later.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      set({ commentsError: errorMessage });
    } finally {
      set({ isCommentsLoading: false });
    }
  },

}));

export default useVideoStore;
