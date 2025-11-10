
// import React from "react";
// import { FaBell } from "react-icons/fa";

// const Newsletter = () => {
//   return (
//     <div className="text-white text-center py-6">
//       <h1 className="text-4xl mb-2">Subscribe now and earn 500 points!</h1>
//       <h3 className="text-xl mb-4">Get the Latest oraimo News and Giveaways</h3>

//       <form action="submit" className="flex flex-col items-center space-y-4">
//         <div className="relative w-80">
//           <input
//             name="email"
//             type="text"
//             placeholder="Enter your email address"
//             autoComplete="email"
//             className="w-full rounded-md py-2 pl-3 pr-10 text-black bg-white"
//           />
//           <button
//             type="submit"
//             className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
//           >
//             <FaBell className="h-5 w-5" />
//           </button>
//         </div>

//         <label className="flex items-center space-x-2 text-sm">
//           <input
//             type="radio"
//             name="terms"
//             className="form-radio text-amber-600"
//           />
//           <span>
//             I have read and agree to the{" "}
//             <a href="#" className="underline text-amber-400">
//               oraimo Store Terms of Use
//             </a>{" "}
//             and{" "}
//             <a href="#" className="underline text-amber-400">
//               Privacy Policy.
//             </a>
//           </span>
//         </label>
//       </form>
//     </div>
//   );
// };

// export default Newsletter;


import React from "react";
import { FaBell } from "react-icons/fa";
import { useThemeContext } from "../hooks/ThemeContext.jsx"; // Import theme context

const Newsletter = () => {
  const { theme } = useThemeContext(); // Get theme from context

  return (
    <div className={`text-center py-6 transition-colors duration-300 ${
      theme === "dark" 
        ? "text-white" 
        : "text-black"
    }`}>
      <h1 className="text-4xl mb-2">Subscribe now and earn 500 points!</h1>
      <h3 className="text-xl mb-4">Get the Latest oraimo News and Giveaways</h3>

      <form action="submit" className="flex flex-col items-center space-y-4">
        <div className="relative w-80">
          <input
            name="email"
            type="text"
            placeholder="Enter your email address"
            autoComplete="email"
            className={`w-full rounded-md py-2 pl-3 pr-10 transition-colors duration-300 ${
              theme === "dark" 
                ? "bg-gray-700 text-white placeholder-gray-300 border border-gray-600" 
                : "bg-white text-black placeholder-gray-500 border border-gray-300"
            }`}
          />
          <button
            type="submit"
            className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${
              theme === "dark" 
                ? "text-gray-400 hover:text-gray-200" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <FaBell className="h-5 w-5" />
          </button>
        </div>

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="terms"
            className={`form-radio transition-colors duration-300 ${
              theme === "dark" 
                ? "text-amber-500" 
                : "text-amber-600"
            }`}
          />
          <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
            I have read and agree to the{" "}
            <a href="#" className={`underline transition-colors duration-300 ${
              theme === "dark" 
                ? "text-amber-400 hover:text-amber-300" 
                : "text-amber-500 hover:text-amber-600"
            }`}>
              oraimo Store Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className={`underline transition-colors duration-300 ${
              theme === "dark" 
                ? "text-amber-400 hover:text-amber-300" 
                : "text-amber-500 hover:text-amber-600"
            }`}>
              Privacy Policy.
            </a>
          </span>
        </label>
      </form>
    </div>
  );
};

export default Newsletter;