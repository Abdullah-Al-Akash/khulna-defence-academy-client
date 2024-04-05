import React from "react";
import logo from "../../assets/logo1-01-01.png";
import supportImg from "../../assets/support.png";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="px-[20px] border-b-2">
      {/* For Large Device: */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <div className="w-1/8">
            <img src={logo} alt="" />
          </div>
          <div className="w-1/8">
            <h2 className="text-5xl font-extrabold">
              Khulna Defence <span className="text-yellow-400">Coaching</span>
            </h2>
          </div>
          <div className="w-1/8 flex justify-center items-center gap-4">
            <img src={supportImg} alt="" />
            <div>
              <h3 className="text-gray-400">হটলাইন</h3>
              <h3 className="text-center font-bold text-xl">01970-181233</h3>
            </div>
          </div>
          <div className="w-1/8">
            <Link to="login">
              <button className="btn text-2xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400">
                নিবন্ধন
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* For Mobile Device */}
      <div className="block md:hidden pt-[6px]">
        <div>
          <img className="mx-auto w-1/4" src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-center">
            Khulna Defence <span className="text-yellow-400">Coaching</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
