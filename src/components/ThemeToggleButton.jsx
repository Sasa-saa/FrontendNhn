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

import { useThemeContext } from "../hooks/ThemeContext.jsx";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1 rounded 
                 bg-blue-500 text-white hover:bg-blue-600
                 dark:bg-yellow-400 dark:text-black 
                 text-xs transition-colors duration-300"
    >
      Switch Mode{" "}
      {theme === "light" ? (
        <FaSun size={20} className="items-center justify-center text-white" />
      ) : (
        <FaMoon size={20} className="items-center justify-center text-black" />
      )}
    </button>
  );
}