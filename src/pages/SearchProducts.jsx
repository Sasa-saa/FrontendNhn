import React from "react";
import SearchProducts from "../components/SearchProducts";

const SearchProductsPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Products:</h1>
      <SearchProducts />
    </main>
  );
};

export default SearchProductsPage;
