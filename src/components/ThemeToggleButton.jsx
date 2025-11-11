

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


