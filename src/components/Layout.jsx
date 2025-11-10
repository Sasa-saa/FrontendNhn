import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx"; // optional if you want global scroll-to-top

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global scroll-to-top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;

// components/Layout.jsx
// import { useThemeContext } from "../hooks/ThemeContext.jsx";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function Layout({ children }) {
//   const { theme } = useThemeContext();

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       theme === "dark" ? "bg-black text-white" : "bg-white text-black"
//     }`}>
//       <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }