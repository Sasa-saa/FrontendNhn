import React from "react";
import LatestLaunches from "../components/LatestLaunches";

const LatestLaunchesPages = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Launches</h1>
      <LatestLaunches />
    </main>
  );
};

export default LatestLaunchesPages;
