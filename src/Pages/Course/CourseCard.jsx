import React from "react";
import content from "../../assets/card1.jpg";

const CourseCard = () => {
  return (
    <div className="shadow-2xl grid md:grid-cols-2 grid-cols-1 gap-4 bg-[#0e412d] px-[10px] py-[15px] rounded-lg">
      <div className="flex justify-center items-center">
        <img className="w-full rounded-md" src={content} alt="" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-yellow-400">
          Level 1 Conceptual Course
        </h2>
        <p className="py-[6px] text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad atque a
          perferendis. Illo totam deleniti rem aperiam officiis consequuntur
          incidunt?
        </p>
        <div className="text-end py-[5px]">
          <button className="btn bg-yellow-400 text-black border-black hover:bg-black hover:text-yellow-400">
            ফ্রি রেজিস্ট্রেশন করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
