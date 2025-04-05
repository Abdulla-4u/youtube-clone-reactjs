import { create } from "zustand";
import fetchApi from "../utils/Api";

const useSearchStore = create((set) => ({
  searchResults: [],
  searchTerm: "",
  searchInProgress: false,
  searchError: null,

  getSearchResults: async (query) => {
    if (!query.trim()) return; 
  
    set({ searchInProgress: true, searchError: null });
  
    const SEARCH_VIDEOS_ENDPOINT = import.meta.env.VITE_SEARCH_VIDEOS_ENDPOINT;
    const VIDEO_DETAILS_ENDPOINT = import.meta.env.VITE_VIDEO_DETAILS_ENDPOINT;
  
    if (!SEARCH_VIDEOS_ENDPOINT || !VIDEO_DETAILS_ENDPOINT) {
      console.error("API endpoints are not set");
      set({ searchError: "API configuration error" });
      return;
    }
  
    try {
      const searchParams = new URLSearchParams({ q: query });
      const response = await fetchApi(`${SEARCH_VIDEOS_ENDPOINT}&${searchParams}`);
      if (!response || !response.items?.length) throw new Error("No results found");
  
      const videoIds = response.items.map((item) => item.id?.videoId).filter(Boolean).join(",");
      if (!videoIds) throw new Error("No valid video IDs found");
  
      const videoDetails = await fetchApi(`${VIDEO_DETAILS_ENDPOINT}&id=${videoIds}`);
      console.log("Search Results:", videoDetails.items);
      set({ searchResults: videoDetails.items || [] });

    } catch (error) {
      console.error("Error fetching search videos:", error);
  
      let errorMessage = "Something went wrong";
      if (error.response?.data?.error?.message) {
        errorMessage = error.response.data.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
  
      set({ searchError: errorMessage });
    } finally {
      set({ searchInProgress: false });
    }
  },
  
  setSearchTerm: (term) => set((state) => ({ ...state, searchTerm: term })),
  
}));

export default useSearchStore;
