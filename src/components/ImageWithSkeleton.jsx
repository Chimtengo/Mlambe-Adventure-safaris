import React, { useState } from 'react';

const ImageWithSkeleton = ({ 
  src, 
  alt = '', 
  className = '', 
  skeletonType = 'shimmer',
  fallbackSrc = 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80',
  showIcon = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (e) => {
    setIsLoading(false);
    if (fallbackSrc) {
      e.target.src = fallbackSrc;
    }
  };

  const getSkeletonClass = () => {
    switch (skeletonType) {
      case 'shimmer':
        return 'bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 animate-shimmer bg-[length:200%_100%]';
      case 'pulse':
        return 'bg-neutral-200 animate-skeleton-pulse';
      case 'wave':
        return 'bg-gradient-to-r from-neutral-200 via-amber-100 to-neutral-200 animate-shimmer bg-[length:200%_100%]';
      default:
        return 'bg-neutral-200 animate-skeleton-pulse';
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <div className={`w-full h-full ${getSkeletonClass()}`}>
            {showIcon && (
              <div className="flex items-center justify-center w-full h-full">
                <svg 
                  className="w-12 h-12 sm:w-16 sm:h-16 text-neutral-400 animate-pulse" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 fade-in'} transition-opacity duration-500`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;