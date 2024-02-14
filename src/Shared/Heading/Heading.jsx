import React from "react";
import logo from "../../assets/logo1-01-01.png";
import supportImg from "../../assets/support.png";

const Heading = () => {
  return (
    <div>
      {/* For Large Device: */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-8 py-2">
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
              <h3 className="text-gray-400">সাহায্য দরকার? আমাদের কল করুন</h3>
              <h3 className="text-center font-bold text-xl">321 325 5678</h3>
            </div>
          </div>
          <div className="w-1/8">
            <button className="btn text-2xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400">
              নিবন্ধন
            </button>
          </div>
        </div>
      </div>
      {/* For Mobile Device */}
      <div className="block md:hidden p-4">
        <div>
          <img className="mx-auto" src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-center">
            Khulna Defence <span className="text-yellow-400">Coaching</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
