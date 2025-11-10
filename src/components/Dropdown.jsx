import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleUp } from "react-icons/fa";
import { createPortal } from "react-dom";

const Dropdown = ({ label, icon, items, to, closeDelay = 200 }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target)) {
        clearTimeout(closeTimeoutRef.current);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const measureAndOpen = () => {
    clearTimeout(closeTimeoutRef.current);

    // Instead of measuring the <li>, measure the NAVBAR
    const navbar = document.querySelector("nav");
    if (navbar) {
      const rect = navbar.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY, // directly below navbar
        left: rect.left + window.scrollX,  // align to navbar left
        width: rect.width,                 // full navbar width
      });
    }

    setOpen(true);
  };

  const closeWithDelay = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setOpen(false), closeDelay);
  };

  return (
    <li
      ref={triggerRef}
      className="relative flex flex-col"
      onMouseEnter={measureAndOpen}
      onMouseLeave={closeWithDelay}
    >
      <button
        onClick={() => (open ? closeWithDelay() : measureAndOpen())}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <Link to={to}>{label}</Link>
        <span
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {icon || <FaChevronCircleUp size={14} color="white" />}
        </span>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed z-50 bg-white text-black shadow-lg"
            style={{
              top: coords.top,
              left: coords.left,
              width: coords.width,
            }}
            onMouseEnter={measureAndOpen}
            onMouseLeave={closeWithDelay}
          >
            <ul className="
    absolute top-full left-0 right-0 w-full 
    bg-white text-black shadow-lg z-50
    flex justify-center gap-8 py-4
  "
>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </li>
  );
};

export default Dropdown;