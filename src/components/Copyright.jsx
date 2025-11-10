// import React from "react";

// const Copyright = () => {
//   const Logo = "/logo.png";
//   return (
//     <div className="bg-black flex flex-col md:flex-row items-center justify-center gap-2 py-4 px-4">
//       <img src={Logo} alt="Oraimo Logo" className="h-8 md:h-10 mb-2 md:mb-0" />
//       <p className="text-xs md:text-sm lg:text-base">
//         &copy; {new Date().getFullYear()} Oraimo. All rights reserved.
//       </p>
//     </div>
//   );
// };

// export default Copyright;


import React from "react";
import { useThemeContext } from "../hooks/ThemeContext.jsx"; // Import theme context

const Copyright = () => {
  const { theme } = useThemeContext(); // Get theme from context
  const Logo = "/logo.png";

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-2 py-4 px-4 transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gray-900 text-white" 
        : "bg-gray-200 text-black"
    }`}>
      <img src={Logo} alt="Oraimo Logo" className="h-8 md:h-10 mb-2 md:mb-0" />
      <p className="text-xs md:text-sm lg:text-base">
        &copy; {new Date().getFullYear()} Oraimo. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;