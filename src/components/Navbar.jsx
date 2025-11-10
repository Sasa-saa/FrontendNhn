import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFire,
  FaShoppingCart,
  FaUser,
  FaBars, // hamburger icon
  FaTimes, // close icon
} from "react-icons/fa";
import Dropdown from "./Dropdown";
import DropdownPlain from "./DropdownPlain";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const Logo = "/logo.png";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-black text-white p-4 z-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="mr-4">
          <img src={Logo} alt="Oraimo Logo" className="h-10" />
        </Link>

        {/* Hamburger (md and smaller) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Nav (lg and up) */}
        <ul className="hidden md:flex gap-8 font-bold items-center">
          <li className="flex items-center space-x-2">
            <Link to="/oraimo-daily-deals">Daily Deals</Link>
            <FaFire size={20} className="text-red-500" />
          </li>

          <Dropdown
            label="Products"
            to="/products"
            items={[
              { label: "Phones", to: "/products/phones" },
              { label: "Accessories", to: "/products/accessories" },
              { label: "Power Banks", to: "/products/power" },
            ]}
          />

          <Dropdown
            label="Hot & New"
            to="/hot-and-new"
            items={[
              { label: "Latest Launches", to: "/hot-and-new/latest" },
              { label: "Trending", to: "/hot-and-new/trending" },
            ]}
          />

          <Dropdown
            label="Support"
            to="/support"
            items={[
              { label: "Help Center", to: "/support/help" },
              { label: "Warranty", to: "/support/warranty" },
              { label: "Contact Us", to: "/support/contact" },
            ]}
          />

          <ThemeToggleButton className="px-2 py-1" />
        </ul>

        {/* Right-side icons (desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownPlain
            label={<FaShoppingCart size={20} />}
            items={[
              { label: "View Cart", to: "/cart" },
              { label: "Checkout", to: "/checkout" },
            ]}
          />
          <DropdownPlain
            label={<FaUser size={20} />}
            items={[
              { label: "Logout", to: "/logout" },
              { label: "Login", to: "/login" },
            ]}
          />
        </div>
      </div>

      {/* Mobile Menu (md and smaller) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 font-bold">
          <Link to="/oraimo-daily-deals" className="flex items-center gap-2">
            <FaFire className="text-red-500" /> Daily Deals
          </Link>

          <Dropdown
            label="Products"
            to="/products"
            items={[
              { label: "Phones", to: "/products/phones" },
              { label: "Accessories", to: "/products/accessories" },
              { label: "Power Banks", to: "/products/power" },
            ]}
          />

          <Dropdown
            label="Hot & New"
            to="/hot-and-new"
            items={[
              { label: "Latest Launches", to: "/hot-and-new/latest" },
              { label: "Trending", to: "/hot-and-new/trending" },
            ]}
          />

          <Dropdown
            label="Support"
            to="/support"
            items={[
              { label: "Help Center", to: "/support/help" },
              { label: "Warranty", to: "/support/warranty" },
              { label: "Contact Us", to: "/support/contact" },
            ]}
          />

          <ThemeToggleButton className="px-2 py-1" />

          <DropdownPlain
            label={<FaShoppingCart size={20} />}
            items={[
              { label: "View Cart", to: "/cart" },
              { label: "Checkout", to: "/checkout" },
            ]}
          />

          <DropdownPlain
            label={<FaUser size={20} />}
            items={[
              { label: "Profile", to: "/profile" },
              { label: "Orders", to: "/orders" },
              { label: "Logout", to: "/logout" },
              { label: "Login", to: "/login" },
            ]}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
