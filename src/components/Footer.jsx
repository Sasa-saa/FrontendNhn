import React from "react";
import Newsletter from "./Newsletter";
import FooterContent from "./FooterContent";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full">
      {/* Newsletter at the top */}
      <div className="bg-black text-white py-6 md:py-8 lg:py-10">
        <Newsletter />
      </div>

      {/* Footer content in the middle */}
      <div className="bg-gray-900 text-white">
        <FooterContent />
      </div>

      {/* Copyright at the bottom */}
      <div className="bg-gray-800 text-white">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;