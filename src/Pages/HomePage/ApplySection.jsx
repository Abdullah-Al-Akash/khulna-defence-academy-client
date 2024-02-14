import React from "react";

const ApplySection = () => {
  return (
    <div className="mt-[-110px] px-[20px] md:px-0 my-4">
      <div className="md:mx-[120px] px-[10px] grid md:grid-cols-2 bg-[#0d3023] md:py-[40px] py-[10px] rounded-lg opacity-[.95]">
        <div className="">
          <h2 className="text-3xl font-bold md:px-[120px] text-white py-[12px] text-center">
            সেনা, নৌ, বিমান বাহিনীতে অফিসার পদে আবেদনের জন্য
          </h2>
        </div>
        <div className="md:pe-[50px]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <button className="btn font-bold bg-yellow-400 border-none text-xl hover:bg-red-600 hover:text-white mx-2">
              আবেদন নির্দেশিকা
            </button>
            <button className="btn font-bold bg-yellow-400 border-none text-xl hover:bg-red-600 hover:text-white mx-2">
              আবেদন যোগ্যতা
            </button>
          </div>
          <div className="md:flex grid grid-cols-1 my-2">
            <button className="md:w-2/7 btn font-bold bg-yellow-400 border-none text-xl hover:bg-red-600 hover:text-white mx-2 my-2">
              পরীক্ষা পদ্ধতি
            </button>
            <button className="md:w-3/7 btn font-bold bg-yellow-400 border-none text-xl hover:bg-red-600 hover:text-white mx-2 my-2">
              বহুল জিজ্ঞাসিত প্রশ্নের উত্তর
            </button>
            <button className="btn font-bold bg-yellow-400 border-none text-xl hover:bg-red-600 hover:text-white mx-2 my-2">
              টেস্ট
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
