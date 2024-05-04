import React from "react";
import content from "../../assets/card1.jpg";

const CourseCard = () => {
  return (
    <div
      className="shadow-2xl grid md:grid-cols-2 grid-cols-1 md:gap-4 bg-[#0e412d] 
    px-[10px] py-[15px] rounded-lg"
    >
      <div className="flex justify-center items-center">
        <img className="w-full rounded-md" src={content} alt="" />
      </div>
      <div>
        <h2 className="font-bold md:text-2xl text-yellow-400">
          Level 1 Conceptual Course
        </h2>
        <p className="py-[6px] text-white h-[140px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad atque a
          perferendis.
        </p>
        <div className="text-end py-[5px]">
          <button
            className="bg-yellow-400 text-black border-black 
          hover:bg-black hover:text-yellow-400 py-1 px-2 rounded"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
