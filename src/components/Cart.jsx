
import React, { useState } from "react";
import Popup from "../components/Popup";
import useFetch from "../hooks/useFetch";

function CartPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCheckout = () => {
    alert("Redirecting to checkout...");
    setIsPopupOpen(false);
  };

  // Fetch customer info
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Map API response to customerInfo
  const user = data && data.length > 0 ? data[1] : null;

  const customerInfo = user
    ? {
        name: user.name,
        email: user.email,
        address: `${user.address.street}, ${user.address.city}`,
      }
    : {
        name: "Unknown",
        email: "Unknown",
        address: "Unknown",
      };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsPopupOpen(true)}
        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
      >
        Add to Cart
      </button>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        customer={customerInfo}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default CartPage;
