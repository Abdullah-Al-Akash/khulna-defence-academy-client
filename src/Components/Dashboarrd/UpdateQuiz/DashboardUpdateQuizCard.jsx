import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardItems from "../DashboardItems";

const DashboardUpdateQuizCard = () => {
  const [quizSets, setQuizSets] = useState([]);
  useEffect(() => {
    fetch("/quizOption.json")
      .then((res) => res.json())
      .then((data) => setQuizSets(data));
  }, []);
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4">
        <h3 className="text-center text-2xl p-4 font-semibold">
          Update Your Quiz
        </h3>
        <div className="grid grid-cols-5 gap-6 mt-4">
          {quizSets.map((quiz) => (
            <div class="bg-black rounded-md p-4">
              <h1 class="text-xl font-semibold text-white text-center">
                {quiz.quizName}
              </h1>
              <p class="text-white text-center">Question{quiz.set}</p>
              <div class="text-center">
                <Link
                  to={`/dashboard/update-quiz/${quiz.quizId}`}
                  className="m-4 btn bg-yellow-500 text-[14px] text-black"
                >
                  Update Your Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardUpdateQuizCard;
