import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardItems from "./DashboardItems";
import toast, { Toaster } from "react-hot-toast";

const AddQuiz = () => {
  const { quizId } = useParams();
  const [selectedValue, setSelectedValue] = useState("");
  const [latestQuiz, setLatesQuiz] = useState([]);
  const [quizNumber, setQuizNumber] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the dropdown selection changes
  };

  const handleQuiz = async (e) => {
    e.preventDefault();
    const cursor = e.target;
    const quizQuestion = {
      quizNumber: latestQuiz.length + 1,
      question: cursor.question.value,
      options: {
        option1: cursor.option1.value,
        option2: cursor.option2.value,
        option3: cursor.option3.value,
        option4: cursor.option4.value,
        option5: cursor.option5.value,
      },
      correctOption: selectedValue,
      explanation: cursor.explanation.value,
    };

    // Post Quiz Question to database:
    try {
      const response = await fetch(
        `https://khulna-defence-coaching-server.onrender.com/package?id=${quizId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quizQuestion),
        }
      );
      setQuizNumber(quizNumber + 1);
      if (!response.ok) {
        alert("Failed to submit quiz");
      }
      if (response.ok) {
        toast.success("Successfully Added Quiz");
        cursor.question.value = "";
        cursor.option1.value = "";
        cursor.option2.value = "";
        cursor.option3.value = "";
        cursor.option4.value = "";
        cursor.option5.value = "";
        cursor.explanation.value = "";
      }
    } catch (error) {
      console.error("Error submitting quiz:", error.message);
    }
  };
  useEffect(() => {
    fetch(
      `https://khulna-defence-coaching-server.onrender.com/package?id=${quizId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatesQuiz(data);
      });
  }, [quizNumber]);
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4 ms-12">
        <form onSubmit={handleQuiz}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-xl">
                Q{latestQuiz.length + 1}
              </span>
            </div>
            <input
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
                name="option4"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-1/2"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Option5</span>
              </div>
              <input
                name="option5"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-1/2"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Select Correct Ans</span>
              </div>
              <select
                value={selectedValue}
                onChange={handleSelectChange}
                className="input input-bordered w-1/2"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Explanation</span>
              </div>
              <input
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
              Add Quiz
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddQuiz;
