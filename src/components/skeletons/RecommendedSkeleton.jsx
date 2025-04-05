import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useThemeStore from '../../store/useThemeStore';

const RecommendedSkeleton = ({isMediumScreen}) => {
  
  const { theme} = useThemeStore();
    
  const skeletonColorLight = '#F3F3F3';
  const skeletonColorDark = '#313131';
  const skeletonHighlightLight = '#e0e0e0';
  const skeletonHighlightDark = '#494949';

  return (
    <div className='flex gap-3 '>
    {/* Thumbnail Skeleton */}
    <Skeleton 
      height={isMediumScreen ? 90 : 85} 
      width={isMediumScreen ? 160 : 130} 
      className="rounded-lg" 
      baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
      highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
    />
    
    <div className="flex-1">
        {/* Title Skeleton */}
        <div className="w-full max-w-[90%]">
          <Skeleton
            height={14}
            width="100%"
            baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
            highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
          />
        </div>
      {/* Channel Name Skeleton */}
      <Skeleton 
        width="50%"
        height={12} 
        style={{ marginTop: '0.5rem' }} 
        baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
        highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
      />

      {/* Views & Date Skeleton */}
      <Skeleton 
         width="70%" 
        height={12} 
        baseColor={theme === 'dark' ? skeletonColorDark : skeletonColorLight}
        highlightColor={theme === 'dark' ? skeletonHighlightDark : skeletonHighlightLight}
      />
    </div>
  </div>
  )
}

export default RecommendedSkeleton
