import React from "react";

const Copyright = () => {
  const Logo = "/logo.png";
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-center gap-2 py-4 px-4">
      <img src={Logo} alt="Oraimo Logo" className="h-8 md:h-10 mb-2 md:mb-0" />
      <p className="text-xs md:text-sm lg:text-base">
        &copy; {new Date().getFullYear()} Oraimo. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;