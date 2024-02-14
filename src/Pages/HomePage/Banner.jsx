import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="p-2">
        <div className="text-white">
          <h1 className="text-center">Put your mind</h1>
          <h2 className="text-center">to the test</h2>
          <p className="pt-4 text-center">
            The World's Leading Online IQ Test.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <div>
            <button className="btn font-bold bg-yellow-400 border-none text-xl hover:bg-[#092e20] hover:text-yellow-400">
              Check Now
            </button>
            <button className="btn font-bold bg-yellow-400 border-none text-xl hover:bg-[#092e20] hover:text-yellow-400 ms-2">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
