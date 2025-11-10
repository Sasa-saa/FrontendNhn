// import React from "react";
// import Newsletter from "./Newsletter";
// import FooterContent from "./FooterContent";
// import Copyright from "./Copyright";

// const Footer = () => {
//   return (
//     <footer className="flex flex-col w-full">
//       {/* Newsletter at the top */}
//       <div className="bg-black text-white py-6 md:py-8 lg:py-10">
//         <Newsletter />
//       </div>

//       {/* Footer content in the middle */}
//       <div className="bg-gray-900 text-white">
//         <FooterContent />
//       </div>

//       {/* Copyright at the bottom */}
//       <div className="bg-gray-800 text-white">
//         <Copyright />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Newsletter from "./Newsletter";
import FooterContent from "./FooterContent";
import Copyright from "./Copyright";
import { useThemeContext } from "../hooks/ThemeContext.jsx"; // Import theme context

const Footer = () => {
  const { theme } = useThemeContext(); // Get theme from context

  return (
    <footer className="flex flex-col w-full transition-colors duration-300">
      {/* Newsletter at the top */}
      <div className={`py-6 md:py-8 lg:py-10 ${
        theme === "dark" 
          ? "bg-gray-900 text-white" 
          : "bg-gray-100 text-black"
      }`}>
        <Newsletter />
      </div>

      {/* Footer content in the middle */}
      <div className={`${
        theme === "dark" 
          ? "bg-gray-800 text-white" 
          : "bg-gray-200 text-black"
      }`}>
        <FooterContent />
      </div>

      {/* Copyright at the bottom */}
      <div className={`${
        theme === "dark" 
          ? "bg-gray-900 text-white" 
          : "bg-gray-300 text-black"
      }`}>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;