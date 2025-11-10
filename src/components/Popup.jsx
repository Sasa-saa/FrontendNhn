// src/components/Popup.jsx
import React from "react";


function Popup({ isOpen, onClose, customer, onCheckout }) {
  if (!isOpen) return null; // don't render if popup is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
          Customer Info
        </h2>

        {/* Customer details */}
        <div className="mb-4 text-black dark:text-white">
          <p><strong>Name:</strong> {customer?.name}</p>
          <p><strong>Email:</strong> {customer?.email}</p>
          <p><strong>Address:</strong> {customer?.address}</p>
        </div>

        {/* Checkout button */}
        <button
          onClick={onCheckout}
          className="w-full px-4 py-2 mb-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        >
          Proceed to Checkout
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full px-4 py-2 rounded bg-gray-300 text-black hover:bg-gray-400 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
