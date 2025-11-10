// import { useThemeContext } from "../hooks/ThemeContext.jsx";
// import { FaSun, FaMoon } from "react-icons/fa";

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useThemeContext();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center gap-1 rounded 
//                   bg-blue-500 text-white hover:bg-blue-600
//                  dark:bg-yellow-400 dark:text-black 
//                    text-xs transition-colors duration-300"
//     >
//       Switch Mode{" "}
//       {theme === "light" ? (
//         <FaSun size={20} className="items-center justify-center text-white" />
//       ) : (
//         <FaMoon size={20} className="items-center justify-center text-black" />
//       )}{" "}
      
//     </button>
    

//   );
// }

// import { useThemeContext } from "../hooks/ThemeContext.jsx";
// import { FaSun, FaMoon } from "react-icons/fa";
// import styled from "styled-components";

// const Button = styled.button`
//   background: ${(props) => props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.text};
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
// `;

// export default Button;


// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useThemeContext();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center gap-1 rounded 
//                  bg-blue-500 text-white hover:bg-blue-600
//                  dark:bg-yellow-400 dark:text-black 
//                  text-xs transition-colors duration-300"
//     >
      
//       {theme === "light" ? (
//         <FaSun size={20} className="items-center justify-center text-white" />
//       ) : (
//         <FaMoon size={20} className="items-center justify-center text-black" />
//       )}
//     </button>
//   );
// }

// import { useThemeContext } from "../hooks/ThemeContext.jsx";
// import { FaSun, FaMoon } from "react-icons/fa";

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useThemeContext();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center gap-1 p-2 rounded-4xl
//                  bg-blue-500 text-white hover:bg-blue-600
//                  dark:bg-yellow-400 dark:text-black 
//                  text-xs transition-colors duration-300"
//     >
//       {theme === "light" ? (
//         <FaSun size={20} className="items-center justify-center text-white" />
//       ) : (
//         <FaMoon size={20} className="items-center justify-center text-black" />
//       )}
//     </button>
//   );
// }



//version 1 on both icons visible
// import { useThemeContext } from "../hooks/ThemeContext.jsx";
// import { FaSun, FaMoon } from "react-icons/fa";

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useThemeContext();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center gap-3 p-3 rounded-4xl
//                  bg-gray-200 hover:bg-gray-300
//                  dark:bg-gray-700 dark:hover:bg-gray-600 
//                  transition-all duration-300 shadow-md"
//     >
//       {/* Sun icon - bright when light mode, dull when dark mode */}
//       <FaSun 
//         size={20} 
//         className={`transition-all duration-300 ${
//           theme === "light" 
//             ? "text-yellow-500 scale-110" 
//             : "text-gray-400 scale-90"
//         }`}
//       />
      
//       {/* Moon icon - bright when dark mode, dull when light mode */}
//       <FaMoon 
//         size={20} 
//         className={`transition-all duration-300 ${
//           theme === "dark" 
//             ? "text-blue-300 scale-110" 
//             : "text-gray-500 scale-90"
//         }`}
//       />
//     </button>
//   );
// }



//version 2  with both icons bith with a slider effect
import { useThemeContext } from "../hooks/ThemeContext.jsx";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-6 p-2 rounded-4xl
                 bg-gray-200 hover:bg-gray-300
                 dark:bg-gray-700 dark:hover:bg-gray-600 
                 transition-all duration-300 shadow-md w-20"
    >
      {/* Sliding background indicator */}
      <div
        className={`absolute top-1 bottom-1 rounded-3xl transition-all duration-300 ${
          theme === "light" 
            ? "left-1 bg-yellow-400 w-8" 
            : "left-9 bg-blue-400 w-8"
        }`}
      />
      
      {/* Sun icon */}
      <FaSun 
        size={16} 
        className={`relative z-10 transition-all duration-300 ${
          theme === "light" ? "text-white scale-110" : "text-gray-500 scale-90"
        }`}
      />
      
      {/* Moon icon */}
      <FaMoon 
        size={16} 
        className={`relative z-10 transition-all duration-300 ${
          theme === "dark" ? "text-white scale-110" : "text-gray-500 scale-90"
        }`}
      />
    </button>
  );
}


//version3 with minimal styling
// import { useThemeContext } from "../hooks/ThemeContext.jsx";
// import { FaSun, FaMoon } from "react-icons/fa";

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useThemeContext();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center gap-2 p-2 rounded-4xl
//                  bg-gray-100 hover:bg-gray-200
//                  dark:bg-gray-800 dark:hover:bg-gray-700 
//                  transition-all duration-300 border border-gray-300 dark:border-gray-600"
//     >
//       <FaSun 
//         size={18} 
//         className={theme === "light" ? "text-orange-500" : "text-gray-400"}
//       />
//       <FaMoon 
//         size={18} 
//         className={theme === "dark" ? "text-blue-400" : "text-gray-400"}
//       />
//     </button>
//   );
// }