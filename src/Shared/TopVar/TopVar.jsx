import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const TopVar = () => {
  return (
    <div className="hidden md:flex bg-[#092e20] md:px-[84px] py-3 md:gap-8 px-4">
      <div className="flex text-white items-center ">
        <IoLocation className="text-yellow-400 text-xl"></IoLocation>
        <h3 className="ps-2">27/5 ঠিকানা, ঠিকানা</h3>
      </div>
      <div className="flex items-center  text-white">
        <MdEmail className="text-yellow-400 text-xl"></MdEmail>

        <h3 className="ps-2">info@yourmail.com</h3>
      </div>
      <div className="ms-auto">
        <h3 className="text-yellow-400 font-bold">
          Khulna Defence Coaching | Come . Learn . Conquer
        </h3>
      </div>
    </div>
  );
};

export default TopVar;
