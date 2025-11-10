import React from 'react';

const BrandGallerySection = () => {
  const Videos = "/video.mp4"; // ensure this file is in your public folder

  return (
    <div className="flex flex-col items-center py-6 md:py-10 lg:py-16">
      <h1
        className="
          text-xl sm:text-2xl md:text-3xl lg:text-5xl
          font-bold mb-4 md:mb-6 lg:mb-8
        "
      >
        Brand Gallery
      </h1>

      {/* Video player */}
      <video
        src={Videos}
        autoPlay     // ✅ starts automatically
        muted        // ✅ silent playback
        loop         // ✅ keeps replaying
        playsInline  // ✅ prevents fullscreen on mobile
        className="
          w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl
          rounded-md shadow-lg
        "
      >
        Your browser does not support the video tag.
      </video>

      {/* Attribution (optional) */}
      <p
        className="
          mt-2 text-xs sm:text-sm md:text-base lg:text-lg
          text-gray-500
        "
      >
        Video by Kampus Production from Pexels
      </p>
    </div>
  );
};

export default BrandGallerySection;