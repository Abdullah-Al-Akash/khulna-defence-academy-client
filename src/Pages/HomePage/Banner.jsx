import React from "react";
import "./Banner.css";
import banner from "../../assets/bg-home.jpg";
const Banner = () => {
  return (
    <div className="">
      {/* <div className="p-2">
        <div className="text-white">
          <p className="text-center text-[40px]">যোগ দিন</p>
          <h2 className="text-center text-[50px] font-bold py-[16px]">
            বাংলাদেশ সেনা, নৌ ও বিমানবাহিনীতে
          </h2>
          <p className="text-center text-[40px]">অফিসার পদে</p>
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
      </div> */}
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
