import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardItems from "../DashboardItems";

const UpdateQuiz = () => {
  const { quizId } = useParams();
  const [latestQuiz, setLatesQuiz] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the dropdown selection changes
  };

  useEffect(() => {
    fetch(`http://localhost:5000/package?id=${quizId}`)
      .then((res) => res.json())
      .then((data) => {
        setLatesQuiz(data);
      });
  }, []);
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4 ms-12">
        {latestQuiz.map((quiz) => (
          <form>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-xl">
                  {quiz.quizNumber}
                </span>
              </div>
              <input
                value={quiz?.question}
                name="question"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-3/4"
                required
              />
            </label>
            <div className="grid grid-cols-2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option1</span>
                </div>
                <input
                  value={quiz?.options?.option1 || ""}
                  name="option1"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option2</span>
                </div>
                <input
                  value={quiz?.options?.option2 || ""}
                  name="option2"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option3</span>
                </div>
                <input
                  value={quiz?.options?.option3 || ""}
                  name="option3"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option4</span>
                </div>
                <input
                  value={quiz?.options?.option2 || ""}
                  name="option4"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">
                    Select Correct Ans
                  </span>
                </div>
                <select
                  value={quiz?.correctOption || ""}
                  //   value={selectedValue}
                  //   onChange={handleSelectChange}
                  className="input input-bordered w-1/2"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Explanation</span>
                </div>
                <input
                  value={quiz?.explanation || ""}
                  name="explanation"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-yellow-400 text-black font-semibold text-xl hover:bg-black hover:text-white"
              >
                Update Quize
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default UpdateQuiz;
