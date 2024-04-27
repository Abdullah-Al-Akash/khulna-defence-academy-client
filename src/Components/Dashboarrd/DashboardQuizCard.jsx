import React, { useState } from "react";
import DashboardItems from "./DashboardItems";

const DashboardQuizCard = () => {
  const [updatePackage, setUpdatePackage] = useState(null);
  const quizOption = [
    {
      quizName: "package1",
    },
    {
      quizName: "package2",
    },
    {
      quizName: "package3",
    },
  ];
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4">
        {quizOption.map((quiz) => (
          <button className="m-4 btn bg-yellow-500 text-xl text-black">
            {quiz.quizName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardQuizCard;
