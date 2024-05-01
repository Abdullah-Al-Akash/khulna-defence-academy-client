import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardItems from "../DashboardItems";
import toast, { Toaster } from "react-hot-toast";

const UpdateQuiz = () => {
  const { quizId } = useParams();
  const [latestQuiz, setLatesQuiz] = useState([]);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [updateQuizId, setUpdateQuizId] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the dropdown selection changes
  };

  useEffect(() => {
    fetch(
      `https://khulna-defence-coaching-server.onrender.com/package?id=${quizId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatesQuiz(data);
      });
  }, []);

  //   Handle Update
  const handleUpdateQuiz = (event) => {
    event.preventDefault();
    const cursor = event.target;
    const quizQuestion = {
      question: cursor.question.value,
      options: {
        option1: cursor.option1.value,
        option2: cursor.option2.value,
        option3: cursor.option3.value,
        option4: cursor.option4.value,
      },
      correctOption: selectedValue,
      explanation: cursor.explanation.value,
    };
    // setUpdateQuiz(quizQuestion);
    console.log(quizQuestion);
    handleQuiz(quizQuestion);

    // Update The Quiz:
  };

  //   Update Quiz Function:
  const handleQuiz = (quizQuestion) => {
    fetch(
      `https://khulna-defence-coaching-server.onrender.com/updateQuiz?quizId=${quizId}&_id=${updateQuizId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizQuestion),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          toast.success("Successfully Updated Quiz");
        }
        // Handle success
      })
      .catch((error) => {
        // Handle error
        console.error("There was a problem with the PUT operation:", error);
      });
  };
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4 ms-12">
        {latestQuiz.map((quiz) => (
          <form
            onSubmit={handleUpdateQuiz}
            className="bg-yellow-100 m-4 p-6 rounded-md"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-xl">
                  {quiz.quizNumber}
                </span>
              </div>
              <input
                defaultValue={quiz.question}
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
                  defaultValue={quiz?.options?.option1 || ""}
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
                  defaultValue={quiz?.options?.option2 || ""}
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
                  defaultValue={quiz?.options?.option3 || ""}
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
                  defaultValue={quiz?.options?.option4 || ""}
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
                  defaultValue={quiz?.correctOption || ""}
                  onChange={handleSelectChange}
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
                  defaultValue={quiz?.explanation || ""}
                  name="explanation"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setUpdateQuizId(quiz._id)}
                type="submit"
                className="btn bg-yellow-400 text-black font-semibold text-xl hover:bg-black hover:text-white"
              >
                Update Quize
              </button>
            </div>
          </form>
        ))}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UpdateQuiz;
