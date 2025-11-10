import React from "react";
import Cards from "./Cards";

const ShopSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 md:py-10 lg:py-16">
      {/* Best Seller */}
      <h3 className="text-center font-semibold text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 lg:mb-10">
        Best Seller
      </h3>

      {/* ✅ Container centers the section, but cards stay left-aligned */}
      <div className="max-w-6xl mx-auto w-full">
        <Cards />
      </div>

      {/* Banner Image */}
      <div className="relative -mx-4 md:-mx-8 lg:-mx-16">
        <img
          src="/image.webp"
          alt="hero image"
          className="
            w-screen
            h-40 md:h-64 lg:h-96
            object-cover
            my-8 md:my-12 lg:my-16
          "
        />
      </div>

      {/* New Arrival */}
      <h3 className="text-center font-semibold text-lg md:text-2xl lg:text-3xl mt-6 md:mt-8 lg:mt-10 mb-6">
        New Arrival
      </h3>

      {/* ✅ Same container for New Arrival cards */}
      <div className="max-w-6xl mx-auto w-full">
        <Cards />
      </div>
    </div>
  );
};

export default ShopSection;