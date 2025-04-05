import { create } from "zustand";
import fetchApi from "../utils/Api";

const useRecommendedStore = create((set) => ({
  recommendedVideos: [],
  isLoading: false,
  isError: null,

  fetchRecommendedVideos: async (categoryId) => {
    set({ isLoading: true, isError: null }); // Reset error state before fetching

    const RECOMMENDED_VIDEOS_ENDPOINT = import.meta.env.VITE_RECOMMENDED_VIDEOS_ENDPOINT;
    try {
      const response = await fetchApi(`${RECOMMENDED_VIDEOS_ENDPOINT}&videoCategoryId=${categoryId}`);

      if (!response || !response.items) throw new Error("Invalid API response");

      set({ recommendedVideos: response.items });
    } catch (error) {
      console.error("Error fetching videos:", error);
      set({ isError: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  
}));

export default useRecommendedStore;
