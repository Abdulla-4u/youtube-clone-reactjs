import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import DefaultAvatar from "/avatar.png";
import GroupButtons from "./GroupButtons";
import useThemeStore from "../../store/useThemeStore";
import useVideoStore from "../../store/useVideoStore";
import useAppStore from "../../store/useAppStore";
import valueConvert from "../../utils/valueConvert";

const VideoDetails = ({ videoId }) => {
  const skeletonColorLight = "#F3F3F3";
  const skeletonColorDark = "#313131";
  const skeletonHighlightLight = "#e0e0e0";
  const skeletonHighlightDark = "#494949";

  const { theme } = useThemeStore();
  const { getChannelDetails, channelDetails } = useAppStore();
  const { videoDetails, isVideoDetailsLoading } = useVideoStore();

  const { snippet } = videoDetails || {};
  const { title, channelTitle, channelId } = snippet || {};

  const profilePic = channelDetails?.snippet?.thumbnails?.medium?.url;
  const subscriberCount = channelDetails?.statistics?.subscriberCount;

  useEffect(() => {
    if (channelId) getChannelDetails(channelId);
  }, [channelId]);

  return (
    <div className="bg-light-background dark:bg-dark-background max-w-[1440px] w-full mx-auto transition-all duration-300">
      {isVideoDetailsLoading ? (
        <div className="w-[98%] mx-auto sm:pl-2">
          <Skeleton
            width="98%"
            className="h-[16rem] sm:h-96 md:h-[24rem] lg:h-[36vw] rounded-2xl "
            baseColor={theme === "dark" ? "dark-skeleton" : "light-skeleton"}
            highlightColor={
              theme === "dark"
                ? "dark-skeleton-highlight"
                : "light-skeleton-highlight"
            }
          />
        </div>
      ) : (
        <iframe
          className="w-full h-[15rem] sm:h-96 md:h-[24rem] lg:h-[36vw] object-cover object-center md:rounded-xl order-1"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}

      {title ? (
        <h2 className="pt-4 pb-2 px-3 sm:px-0 font-semibold text-lg sm:text-2xl text-light-heading dark:text-dark-heading">
          {title}
        </h2>
      ) : (
        <div className="sm:pl-2 pt-4 pb-2">
          <Skeleton
            width="96%"
            height="1rem"
            className="sm:h-6 rounded-md"
            baseColor={theme === "dark" ? "dark-skeleton" : "light-skeleton"}
            highlightColor={
              theme === "dark"
                ? "dark-skeleton-highlight"
                : "light-skeleton-highlight"
            }
          />
        </div>
      )}

      <div className="flex sm:flex-row flex-col justify-between gap-3 sm:gap-0 w-full pt-1 sm:px-0">
        <div className="flex items-center sm:justify-start justify-between p gap-8 sm:px-0 px-3 w-full">
          <div className="flex gap-4 items-center">
            {profilePic ? (
              <img
                src={profilePic || DefaultAvatar}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DefaultAvatar;
                }}
              />
            ) : (
              <Skeleton
                circle
                height={45}
                width={45}
                baseColor={
                  theme === "dark" ? "dark-skeleton" : "light-skeleton"
                }
                highlightColor={
                  theme === "dark"
                    ? "dark-skeleton-highlight"
                    : "light-skeleton-highlight"
                }
              />
            )}

            <div className="flex gap-3 w-full items-center justify-between">
              <div>
                {channelTitle ? (
                  <h3 className="font-medium text-lg text-light-heading dark:text-dark-heading">
                    {channelTitle}
                  </h3>
                ) : (
                  <Skeleton
                    width="130%"
                    height="1rem"
                    className="rounded-md"
                    baseColor={
                      theme === "dark" ? "dark-skeleton" : "light-skeleton"
                    }
                    highlightColor={
                      theme === "dark"
                        ? "dark-skeleton-highlight"
                        : "light-skeleton-highlight"
                    }
                  />
                )}

                {subscriberCount ? (
                  <p className="text-sm text-light-text-muted dark:text-dark-text-secondary">
                    {valueConvert(subscriberCount)} subscribers
                  </p>
                ) : (
                  <Skeleton
                    width={80}
                    height="0.875rem"
                    className="mt-1 rounded-md"
                    baseColor={
                      theme === "dark" ? "dark-skeleton" : "light-skeleton"
                    }
                    highlightColor={
                      theme === "dark"
                        ? "dark-skeleton-highlight"
                        : "light-skeleton-highlight"
                    }
                  />
                )}
              </div>
            </div>
          </div>

          {isVideoDetailsLoading ? (
            <Skeleton
              width="auto"
              height="2.5rem"
              style={{
                padding: "1rem 3.3rem",
                borderRadius: "9999px",
                marginLeft: "20px",
              }}
              baseColor={
                theme === "dark" ? skeletonColorDark : skeletonColorLight
              }
              highlightColor={
                theme === "dark"
                  ? skeletonHighlightDark
                  : skeletonHighlightLight
              }
            />
          ) : (
            <button className="bg-light-surface-contrast hover:bg-dark-secondary dark:bg-dark-text dark:hover:bg-[#D9D9D9] text-white dark:text-dark-background text-sm rounded-full font-medium px-4 py-2.5 transition-colors shadow">
              Subscribe
            </button>
          )}
        </div>

        <GroupButtons likes={videoDetails?.statistics?.likeCount} />
      </div>
    </div>
  );
};

export default VideoDetails;
