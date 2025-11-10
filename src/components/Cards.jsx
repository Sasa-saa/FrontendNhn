// import React, { useState } from "react";
// import useFetch from "../hooks/useFetch";

// const Cards = () => {
//   const [showAll, setShowAll] = useState(false);

//   // Fetch products from API
//   const { data, loading, error } = useFetch("https://dummyjson.com/products?limit=9");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   const products = data?.products || [];
//   const visibleItems = showAll ? products : products.slice(0, 6);

//   return (
    
//     <div className="p-6 my-10">
//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {visibleItems.map((item) => (
//           <div
//             key={item.id}
//             className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
//           >
//             {/* Product Image */}
//             <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
//                 onError={(e) => {
//                   e.target.src =
//                     "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";
//                 }}
//               />
//             </div>

//             {/* Card Body */}
//             <div className="p-4 flex flex-col flex-1">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                 {item.description}
//               </p>

//               {/* Buttons */}
//               <div className="flex space-x-3 mt-auto">
//                 <button className="flex-1 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-full text-sm font-medium transition-colors duration-200">
//                   Learn More
//                 </button>
//                 <button className="flex-1 bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Toggle Buttons */}
//       {products.length >= 5 && (
//         <div className="flex justify-center mt-6">
//           {!showAll ? (
//             <button
//               onClick={() => setShowAll(true)}
//               className="bg-white border border-black hover:bg-black hover:text-white text-gray-800 py-2 px-6 rounded font-medium transition-colors duration-200 text-sm md:text-base"
//             >
//               Show More
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowAll(false)}
//               className="bg-white border border-black hover:bg-black hover:text-white text-gray-800 py-2 px-6 rounded font-medium transition-colors duration-200 text-sm md:text-base"
//             >
//               Show Less
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cards;


// import React, { useState } from "react";
// import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";

// const Cards = () => {
//   const [showAll, setShowAll] = useState(false);

//   // Fetch products from API
//   const { data, loading, error } = useFetch("https://dummyjson.com/products?limit=9");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   const products = data?.products || [];
//   const visibleItems = showAll ? products : products.slice(0, 6);

//   return (
//     <Link to="/shop">
//       <div className="p-6 my-10">
//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {visibleItems.map((item) => (
//           <div
//             key={item.id}
//             className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
//           >
//             {/* Product Image */}
//             <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
//                 onError={(e) => {
//                   e.target.src =
//                     "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";
//                 }}
//               />
//             </div>

//             {/* Card Body */}
//             <div className="p-4 flex flex-col flex-1">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                 {item.description}
//               </p>

//               {/* Buttons */}
//               <div className="flex space-x-3 mt-auto">
//                 <button className="flex-1 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-full text-sm font-medium transition-colors duration-200">
//                   Learn More
//                 </button>
//                 <button className="flex-1 bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Toggle Buttons */}
//       {products.length >= 5 && (
//         <div className="flex justify-center mt-6">
//           {!showAll ? (
//             <button
//               onClick={() => setShowAll(true)}
//               className="bg-white border border-black hover:bg-black hover:text-white text-gray-800 py-2 px-6 rounded font-medium transition-colors duration-200 text-sm md:text-base"
//             >
//               Show More
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowAll(false)}
//               className="bg-white border border-black hover:bg-black hover:text-white text-gray-800 py-2 px-6 rounded font-medium transition-colors duration-200 text-sm md:text-base"
//             >
//               Show Less
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//     </Link>
    
//   );
// };

// export default Cards;


// import React, { useState } from "react";
// import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";

// const Cards = () => {
//   const [showAll, setShowAll] = useState(false);

//   const { data, loading, error } = useFetch("https://dummyjson.com/products?limit=9");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   const products = data?.products || [];
//   const visibleItems = showAll ? products : products.slice(0, 8);

//   return (
//     <div className="p-6 my-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {visibleItems.map((item) => (
//           <Link key={item.id} to={`/shop/${item.id}`}>
//             <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
//               <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                   className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="p-4 flex flex-col flex-1">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                   {item.description}
//                 </p>
//                 <div className="space-x-1 mt-auto inline-block">
//                   <button className="flex-1 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black rounded-full text-sm font-medium transition-colors duration-200">
//                     Learn More
//                   </button>
//                   <button className="flex-1 bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {products.length >= 5 && (
//         <div className="flex justify-center mt-6">
//           {!showAll ? (
//             <button
//               onClick={() => setShowAll(true)}
//               className="bg-white border text-black border-black hover:bg-black hover:text-white py-2 px-6 rounded font-medium transition-colors duration-200"
//             >
//               Show More
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowAll(false)}
//               className="bg-white border border-black hover:bg-black hover:text-white py-2 px-6 rounded font-medium transition-colors duration-200"
//             >
//               Show Less
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cards;


import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Cards = () => {
  const [showMore, setShowMore] = useState(false);

  // Fetch enough products to cover both states
  const { data, loading, error } = useFetch("https://dummyjson.com/products?limit=20");

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const products = data?.products || [];
  
  // Show 8 cards by default, 12 cards when "Show More" is clicked
  const visibleItems = showMore ? products.slice(0, 12) : products.slice(0, 8);

  return (
    <div className="p-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {visibleItems.map((item) => (
    <Link key={item.id} to={`/shop/${item.id}`}>
      <div className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
        {/* Image container with fixed height */}
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Content container with fixed structure */}
        <div className="p-4 flex flex-col flex-1 min-h-[200px]">
          {/* Title with fixed height */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 h-12 overflow-hidden">
            {item.title}
          </h3>
          
          {/* Description with fixed height */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1 min-h-[60px]">
            {item.description}
          </p>
          
          {/* Buttons container - always at bottom */}
          <div className="mt-auto space-x-1">
            <button className="flex-1 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black rounded-full text-sm font-medium transition-colors duration-200">
              Learn More
            </button>
            <button className="flex-1 bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleItems.map((item) => (
          <Link key={item.id} to={`/shop/${item.id}`}>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="space-x-1 mt-auto inline-block">
                  <button className="flex-1 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black rounded-full text-sm font-medium transition-colors duration-200">
                    Learn More
                  </button>
                  <button className="flex-1 bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}

      {products.length > 8 && (
        <div className="flex justify-center mt-6">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="bg-white border text-black border-black hover:bg-black hover:text-white py-2 px-6 rounded font-medium transition-colors duration-200"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={() => setShowMore(false)}
              className="bg-white/20 border border-black hover:bg-black hover:text-white py-2 px-6 rounded font-medium transition-colors duration-200"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;