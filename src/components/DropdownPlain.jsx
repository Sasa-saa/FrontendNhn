import { useState, useRef, useEffect } from "react";

const DropdownPlain = ({ label, items, search = false, closeDelay = 200 }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Close on outside click
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

  const openDropdown = () => {
    clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };

  const closeWithDelay = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setOpen(false), closeDelay);
  };

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeWithDelay}
    >
      {/* Trigger */}
      <button
        onClick={() => (open ? closeWithDelay() : openDropdown())}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {label}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2
            bg-white text-black rounded-md shadow-lg p-3 z-50
            w-40 max-w-xs
          "
        >
          {search ? (
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              />
              <button
                onClick={() => setOpen(false)}
                className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            <ul>
              {items?.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.to ? <a href={item.to}>{item.label}</a> : item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownPlain;