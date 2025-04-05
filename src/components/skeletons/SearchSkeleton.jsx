import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useThemeStore from '../../store/useThemeStore';

const SearchSkeleton = () => {
  const { theme } = useThemeStore();
  
  const skeletonColorLight = '#F3F3F3';
  const skeletonColorDark = '#313131';
  const skeletonHighlightLight = '#e0e0e0';
  const skeletonHighlightDark = '#494949';

  

  return (
    <div className="flex flex-col md:flex-row md:gap-4 w-full">
      {/* Thumbnail Skeleton */}
      <div className="relative w-full md:w-[28rem] h-[15rem] md:h-[16rem] md:rounded-md flex-shrink-0 overflow-hidden ">
        <Skeleton 
        className="w-full h-full"
        style={{borderRadius: '0.5rem'}}
        
        baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
        highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'dark' ? 'from-[#494949] to-[#313131]' : 'from-[#e0e0e0] to-[#F3F3F3]'} animate-shimmer`} />
      </div>

      {/* Text Skeletons */}
      <div className="flex flex-col md:px-0 px-3 w-full">
        {/* Title Skeleton */}
        <Skeleton height={22} width="75%"
         className="mt-2 sm:mt-0 dark:bg-[#313131] bg-[#F3F3F3]"
           baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
            highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
         />

        {/* Views & Timestamp Skeleton */}
        <Skeleton height={14} width="50%"
         className="mt-2 dark:bg-[#494949] bg-[#e0e0e0]"
         baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
         highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
         />

       {/* Avatar and Channel Name Skeleton */}
        <div className="flex items-center gap-3 mt-3 mb-3 sm:mb-0">
        <Skeleton circle height={32}
         width={32}
          className="dark:bg-[#313131] bg-[#F3F3F3]"
          baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
          highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
          />
        <Skeleton 
            height={12}  
            width={80}
            className="dark:bg-[#313131] bg-[#e0e0e0]" 
            baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
            highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
        />
        </div>
       {/* Description Skeleton */}
        <div className="hidden sm:block">
        <Skeleton height={12} width="90%"
         className="mt-3 dark:bg-[#494949] bg-[#e0e0e0]"
         baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
         highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
         />
        <Skeleton height={12} width="80%"
         className="mt-1 dark:bg-[#494949] bg-[#e0e0e0]"
         baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
         highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
         />
        </div>

      </div>
    </div>
  );
};

export default SearchSkeleton;
