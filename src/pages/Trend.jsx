import React from "react";
import Trend from "../components/Trend";

const TrendPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trending</h1>
      <Trend />
    </main>
  );
};

export default TrendPage;
