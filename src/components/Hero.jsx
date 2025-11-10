import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/hero.jpg"
        alt="hero image"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div
        className="
          absolute top-1/4 left-4 md:top-1/3 md:left-10 lg:left-20
          text-left text-white flex flex-col items-start
        "
      >
        <h1
          className="
            text-2xl md:text-4xl lg:text-6xl 
            font-bold mb-4
          "
        >
          Sound. Style. Soul.
        </h1>

        <button
          className="
            bg-transparent hover:bg-black border border-white
            text-sm md:text-lg lg:text-2xl font-light
            px-3 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4
            rounded-md transition-colors duration-300
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;