import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSearchStore from "../store/useSearchStore";
import useNetworkStore from "../store/useNetworkStore";
import useNetworkStatus from "../hooks/useNetworkStatus";
import NoInternet from "../components/errors/NoInternet"
import Error from "../components/errors/Error"
import NoResults from "../components/errors/NoResults"
import SearchSkeleton from "../components/skeletons/SearchSkeleton"
import SearchVideoCard from "../components/search/SearchVideoCard"

const SearchTerm = () => {
  const { searchTerm } = useParams();
  const { searchResults, getSearchResults, searchInProgress, searchError } = useSearchStore();
  const { isOffline } = useNetworkStore();

  useNetworkStatus();

  useEffect(() => {
    if (searchTerm) getSearchResults(searchTerm);
  }, [searchTerm, getSearchResults]);
  
  return (
    <div className="bg-white dark:bg-[#0F0F0F] max-w-[1440px] mx-auto transition-all duration-300">
      {isOffline ? (
        <NoInternet />
      ) : (
        <div className="md:pt-5 pt-2 lg:px-3 grid md:gap-6 sm:gap-8 gap-1 min-h-screen md:w-[98%] w-full mx-auto pb-10">
          {searchError ? (
            searchError.includes("quota") ? (
              <Error message="YouTube API quota exceeded. Please try again later." />
            ) : (
              <Error
                message="An error occurred. Please try again."
                onRetry={() => getSearchResults(searchTerm)}
              />
            )
          ) : searchInProgress ? (
            Array.from({ length: 8 }).map((_, index) => (
              <SearchSkeleton key={index} />
            ))
          ) : searchResults?.length > 0 ? (
            searchResults.map((video) => (
              <SearchVideoCard key={video.id} video={video} />
            ))
          ) : (
            <NoResults onRetry={() => getSearchResults(searchTerm)} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchTerm;


