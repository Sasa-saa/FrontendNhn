
import React from "react";
import { FaBell } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="text-white text-center py-6">
      <h1 className="text-4xl mb-2">Subscribe now and earn 500 points!</h1>
      <h3 className="text-xl mb-4">Get the Latest oraimo News and Giveaways</h3>

      <form action="submit" className="flex flex-col items-center space-y-4">
        <div className="relative w-80">
          <input
            name="email"
            type="text"
            placeholder="Enter your email address"
            autoComplete="email"
            className="w-full rounded-md py-2 pl-3 pr-10 text-black bg-white"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          >
            <FaBell className="h-5 w-5" />
          </button>
        </div>

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="terms"
            className="form-radio text-amber-600"
          />
          <span>
            I have read and agree to the{" "}
            <a href="#" className="underline text-amber-400">
              oraimo Store Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-amber-400">
              Privacy Policy.
            </a>
          </span>
        </label>
      </form>
    </div>
  );
};

export default Newsletter;
