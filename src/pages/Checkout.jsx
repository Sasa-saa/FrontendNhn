import React from "react";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Check-out</h1>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
