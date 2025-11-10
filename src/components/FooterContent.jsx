import React from "react";

const FooterContent = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-8 lg:py-10">
      <div
        className="
          max-w-6xl mx-auto px-4 md:px-6 lg:px-8
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-6 md:gap-8 lg:gap-12 text-left
        "
      >
        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            Customer Service
          </h3>
          <p className="text-sm md:text-base">Service Hours: Mon-Sat (Excl. public holidays)</p>
          <p className="text-sm md:text-base">9AM - 1PM, 2PM - 5:30PM</p>
          <p className="mt-2 text-sm md:text-base">Phone: 07000449429</p>
          <p className="text-sm md:text-base">Email: care.ng@oraimo.com</p>
          <p className="text-sm md:text-base">Email: deliveryissue.ng@oraimo.com</p>
        </div>

        {/* About Oraimo */}
        <div>
          <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            About Oraimo
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Where to Buy</a></li>
            <li><a href="#" className="hover:underline">O-CLUB</a></li>
            <li><a href="#" className="hover:underline">Explorer Point Program</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Terms */}
        <div>
          <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            Terms
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="#" className="hover:underline">Warranty</a></li>
            <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            Get Help
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Visit Carlcare</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Online Shopping Guide</a></li>
            <li><a href="#" className="hover:underline">Product Authentication</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;