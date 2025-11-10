import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  // Clear auth data when component mounts
  useEffect(() => {
    // Example: remove token from localStorage
    localStorage.removeItem("authToken");
    // You could also clear cookies or session storage here
  }, []);

  const handleConfirmLogout = () => {
    // Perform any additional cleanup if needed
    alert("You have been logged out successfully.");
    navigate("/login"); // Redirect to login page
  };

  const handleCancel = () => {
    navigate("/"); // Redirect back to home or dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-4">Logout</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to log out of your account?
        </p>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleConfirmLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Yes, Logout
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
