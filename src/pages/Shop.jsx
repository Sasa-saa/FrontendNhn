// import React from 'react'

// const ShopPage = () => {
//   return (
//     <div>
//         <img
//             src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//             alt="Shop"
//             style={{ width: '50%', height: 'auto' }}
//         />

//     </div>
//   )
// }

// export default ShopPage

// import React from 'react';

// const ShopPage = () => {
//   return (
//     <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
//       <div className="flex bg-white shadow-lg rounded-lg p-6 max-w-2xl">
//         {/* Product Image */}
//         <img
//           src="oraimo-watch.png" // replace with your actual image path
//           alt="oraimo Watch 5N Smart Watch"
//           className="w-48 h-auto rounded-md mr-6"
//         />

//         {/* Product Info */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">
//               oraimo Watch 5N 2.01'' TFT IP68 Smart Watch
//             </h2>
//             <p className="text-yellow-500 mt-2">★★★★☆ (143 reviews)</p>

//             <ul className="mt-4 text-gray-600 space-y-1">
//               <li>• Wireless HD Calling</li>
//               <li>• 100+ Sports Modes</li>
//               <li>• IP68 Water Resistance</li>
//             </ul>

//             <div className="mt-4 flex items-center space-x-3">
//               <span className="text-2xl font-bold text-red-600">₦19,900</span>
//               <span className="line-through text-gray-500">₦27,100</span>
//             </div>

//             <p className="mt-2 text-sm font-semibold text-red-700">
//               FLASH SALE ends in 11h 30m
//             </p>
//           </div>

//           <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl mx-auto">
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/3 h-auto rounded-md object-contain mb-6 md:mb-0 md:mr-6"
        />

        {/* Product Info */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="text-yellow-500 mt-2">Rating: {product.rating} ★</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="mt-4 flex items-center space-x-3">
              <span className="text-3xl font-bold text-red-600">
                ${product.price}
              </span>
              <span className="line-through text-gray-500">
                {(
                  product.price +
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold text-red-700">
              Stock: {product.stock}
            </p>
          </div>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
