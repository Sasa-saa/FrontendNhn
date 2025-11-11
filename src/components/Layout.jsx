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
