import React, { useEffect, useState } from "react";
import DashboardItems from "./DashboardItems";
import { Link } from "react-router-dom";

const DashboardQuizCard = () => {
  const [quizSets, setQuizSets] = useState([]);
  useEffect(() => {
    fetch("/quizCard.json")
      .then((res) => res.json())
      .then((data) => setQuizSets(data));
  }, []);
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4">
        <div>
          <h3 className="text-center text-3xl p-4 font-bold mb-4">
            Set Your Verbal Quiz
          </h3>
          <div className="grid grid-cols-5 gap-6">
            {quizSets
              .filter((set) => set.category === "Verbal")
              .map((quiz) => (
                <div class="bg-black rounded-md p-4">
                  <h1 class="text-sm font-semibold text-white text-center">
                    {quiz.category}
                  </h1>
                  <h1 class="text-sm font-semibold text-white text-center">
                    {quiz.name}
                  </h1>
                  <div class="text-center">
                    <Link
                      to={`/dashboard/package/${quiz.id}`}
                      className="mt-4 btn bg-yellow-500 text-[12px] text-black"
                    >
                      Add Your Quiz
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-center text-3xl p-4 font-bold mb-4 mt-6">
            Set Your Non Verbal Quiz
          </h3>
          <div className="grid grid-cols-5 gap-6">
            {quizSets
              .filter((set) => set.category === "Non Verbal")
              .map((quiz) => (
                <div class="bg-black rounded-md p-4">
                  <h1 class="text-sm font-semibold text-white text-center">
                    {quiz.category}
                  </h1>
                  <h1 class="text-sm font-semibold text-white text-center">
                    {quiz.name}
                  </h1>
                  <div class="text-center">
                    <Link
                      to={`/dashboard/package/${quiz.id}`}
                      className="mt-4 btn bg-yellow-500 text-[12px] text-black"
                    >
                      Add Your Quiz
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardQuizCard;
