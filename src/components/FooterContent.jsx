

import React from "react";
import { useThemeContext } from "../hooks/ThemeContext.jsx"; // Import theme context

const FooterContent = () => {
  const { theme } = useThemeContext(); // Get theme from context

  return (
    <footer className={`py-6 md:py-8 lg:py-10 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gray-800 text-white" 
        : "bg-gray-100 text-black"
    }`}>
      <div
        className="
          max-w-6xl mx-auto px-4 md:px-6 lg:px-8
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-6 md:gap-8 lg:gap-12 text-left
        "
      >
        {/* Customer Service */}
        <div>
          <h3 className={`font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}>
            Customer Service
          </h3>
          <p className="text-sm md:text-base">Service Hours: Mon-Sat (Excl. public holidays)</p>
          <p className="text-sm md:text-base">9AM - 1PM, 2PM - 5:30PM</p>
          <p className="mt-2 text-sm md:text-base">Phone: 07000449429</p>
          <p className="text-sm md:text-base">Email: care.ng@oraimo.com</p>
          <p className="text-sm md:text-base">Email: deliveryissue.ng@oraimo.com</p>
        </div>

        {/* About Oraimo */}
        <div>
          <h3 className={`font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}>
            About Oraimo
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>About Us</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Where to Buy</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>O-CLUB</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Explorer Point Program</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Blogs</a></li>
          </ul>
        </div>

        {/* Terms */}
        <div>
          <h3 className={`font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}>
            Terms
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Warranty</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Shipping & Delivery</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Return & Refund Policy</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Terms & Conditions</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h3 className={`font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}>
            Get Help
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Track Order</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Visit Carlcare</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Contact Us</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Online Shopping Guide</a></li>
            <li><a href="#" className={`hover:underline transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>Product Authentication</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;