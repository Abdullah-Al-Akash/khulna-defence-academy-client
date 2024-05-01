/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const QuizCard = ({ quizId, quizzes }) => {
  console.log(quizId);
  const [displayQues, setDisplayQues] = useState(0); // Changed initial state to 0
  const [userResponses, setUserResponses] = useState([]); // State to hold user responses
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const [correctAns, setCorrectAns] = useState([]);
  const [wrongAns, setWrongAns] = useState([]);
  const { user } = useContext(AuthContext);

  const totalQuizzes = quizzes.length;

  const handleNext = () => {
    setDisplayQues(displayQues + 1);
  };

  const handleBack = () => {
    setDisplayQues(displayQues - 1);
  };

  const handleOptionSelect = (selectedOption) => {
    const currentQuiz = quizzes[displayQues];
    const isCorrect = currentQuiz?.correctOption === selectedOption;
    const response = {
      quizNumber: currentQuiz.quizNumber,
      selectedOption,
      isCorrect,
      correctOption: currentQuiz.correctOption, // Store the correct option along with the user's response
    };
    const updatedResponses = [...userResponses];
    updatedResponses[displayQues] = response;
    setUserResponses(updatedResponses);
  };

  const handleSubmit = () => {
    setShowCorrectAnswers(true);
    console.log("User responses:", userResponses);
    const correctAns = userResponses?.filter((ans) => ans.isCorrect === true);
    setCorrectAns(correctAns);
    const wrongAns = userResponses?.filter((ans) => ans.isCorrect === false);
    setWrongAns(wrongAns);

    // Post Ans
    const submittedAns = {
      email: user?.email,
      correctAns: correctAns?.length,
      wrongAns: wrongAns?.length,
      notAns: totalQuizzes - correctAns?.length - wrongAns?.length,
      quizSet:
        quizId == 1
          ? " Verbal Set-1"
          : quizId == 2
          ? " Verbal Set-2"
          : quizId == 3
          ? " Verbal Set-3"
          : quizId == 4
          ? " Verbal Set-4"
          : quizId == 5
          ? " Verbal Set-5"
          : quizId == 6
          ? " Verbal Set-6"
          : quizId == 7
          ? " Verbal Set-7"
          : quizId == 8
          ? " Verbal Set-8"
          : quizId == 9
          ? " Verbal Set-9"
          : quizId == 10
          ? " Verbal Set-10"
          : quizId == 11
          ? " Non-Verbal Set-1"
          : quizId == 12
          ? " Non-Verbal Set-2"
          : quizId == 13
          ? " Non-Verbal Set-3"
          : quizId == 14
          ? " Non-Verbal Set-4"
          : quizId == 15
          ? " Non-Verbal Set-5"
          : "",
    };

    fetch("http://localhost:5000/submit-ans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedAns),
    });
  };

  return (
    <div className="pb-5 mx-auto md:w-1/2">
      {showCorrectAnswers && (
        <div className="flex justify-center">
          <div>
            <h3 className="text-green-500 font-semibold text-xl">
              Correct Ans: {correctAns?.length}
            </h3>
            <h3 className="text-red-500 font-semibold text-xl">
              Wrong Ans: {wrongAns?.length}
            </h3>
            <h3 className="font-semibold text-xl">
              Not Ans: {totalQuizzes - correctAns?.length - wrongAns?.length}
            </h3>
          </div>
        </div>
      )}
      <div className="mt-5 mb-5  p-2">
        <p className="text-xl font-bold mb-4">
          {displayQues + 1}. {quizzes[displayQues]?.question}
        </p>

        <div>
          {quizzes[displayQues]?.options && (
            <div>
              {Object.entries(quizzes[displayQues].options).map(
                ([optionKey, optionValue]) => (
                  <label key={optionKey} className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      onChange={() => handleOptionSelect(optionKey)}
                      checked={
                        userResponses[displayQues]?.selectedOption === optionKey
                      }
                    />
                    <span className="ml-2">{optionValue}</span>
                  </label>
                )
              )}

              {showCorrectAnswers && userResponses[displayQues] && (
                <div>
                  {userResponses[displayQues]?.isCorrect ? null : (
                    <p className="text-red-500 mt-2">
                      Your answer:{" "}
                      {
                        quizzes[displayQues].options[
                          userResponses[displayQues]?.selectedOption
                        ]
                      }
                    </p>
                  )}
                  <p className="text-gray-500 mt-2">
                    Correct answer:{" "}
                    {
                      quizzes[displayQues].options[
                        userResponses[displayQues]?.correctOption
                      ]
                    }
                  </p>
                </div>
              )}
              {!userResponses[displayQues] && showCorrectAnswers && (
                <p className="text-gray-500 mt-2">Not Answered</p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            disabled={displayQues === 0} // Disable back button when displaying the first quiz
            onClick={handleBack}
            className={`mt-4  ${
              displayQues === 0
                ? "bg-yellow-200 hover:bg-none text-gray-400 font-bold py-2 px-4 rounded"
                : "bg-yellow-400 hover:bg-black hover:text-yellow-400 text-black font-bold py-2 px-4 rounded"
            }`}
          >
            Back
          </button>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-yellow-400 hover:bg-black hover:text-yellow-400 text-black font-bold py-2 px-4 rounded"
          >
            Submit
          </button>

          <button
            disabled={displayQues === totalQuizzes - 1} // Disable next button when displaying the last quiz
            onClick={handleNext}
            className={`mt-4  ${
              displayQues === totalQuizzes - 1
                ? "bg-yellow-200 hover:bg-none text-gray-400 font-bold py-2 px-4 rounded"
                : "bg-yellow-400 hover:bg-black hover:text-yellow-400 text-black font-bold py-2 px-4 rounded"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      <div>
        {quizzes.map((quiz, index) => (
          <button
            key={index}
            onClick={() => setDisplayQues(index)}
            className={`mt-4 ms-2 ${
              index === displayQues
                ? userResponses[index] && showCorrectAnswers
                  ? userResponses[index].isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-yellow-500"
                : userResponses[index] && showCorrectAnswers
                ? userResponses[index].isCorrect
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-red-500 hover:bg-red-700"
                : "bg-gray-200 hover:bg-gray-300"
            }  text-black font-bold py-2 px-4 rounded`}
          >
            {quiz.quizNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
