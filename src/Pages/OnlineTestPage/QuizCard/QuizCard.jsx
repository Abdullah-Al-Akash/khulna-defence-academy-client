/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const QuizCard = ({ stopTimer, setStopTimer, quizId, quizzes }) => {
  const [displayQues, setDisplayQues] = useState(0); // Changed initial state to 0
  const [userResponses, setUserResponses] = useState([]); // State to hold user responses
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [correctAns, setCorrectAns] = useState([]);
  const [wrongAns, setWrongAns] = useState([]);
  const [afterSubmit, setAfterSubmit] = useState(false);
  const [answeredQuiz, setAnsweredQuiz] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(stopTimer);

  useEffect(() => {
    if (stopTimer) {
      handleSubmit();
    }
  }, [stopTimer]); // This effect runs when stopTimer changes

  const totalQuizzes = quizzes.length;

  const handleNext = () => {
    setDisplayQues(displayQues + 1);
  };

  const handleBack = () => {
    setDisplayQues(displayQues - 1);
  };

  console.log(answeredQuiz);

  const handleOptionSelect = (selectedOption) => {
    const currentQuiz = quizzes[displayQues];
    const quizNumber = currentQuiz.quizNumber;

    setAnsweredQuiz([...answeredQuiz, quizNumber]);

    const isCorrect = currentQuiz?.correctOption === selectedOption;
    const response = {
      quizNumber: currentQuiz.quizNumber,
      selectedOption,
      isCorrect,
      correctOption: currentQuiz.correctOption,
    };
    const updatedResponses = [...userResponses];
    updatedResponses[displayQues] = response;
    setUserResponses(updatedResponses);
  };

  const handleSubmit = () => {
    if (stopTimer) {
      setStopTimer(true);
      setAfterSubmit(true);
      setShowCorrectAnswers(true);
      const correctAns = userResponses?.filter((ans) => ans?.isCorrect === true); // Null check added here
      setCorrectAns(correctAns);
      const wrongAns = userResponses?.filter((ans) => ans?.isCorrect === false); // Null check added here
      setWrongAns(wrongAns);

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
      fetch("https://khulna-defence-coaching-server.onrender.com/submit-ans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedAns),
      });
    } else {
      Swal.fire({
        title: "Are you sure to submit the quiz?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setStopTimer(true);
          setAfterSubmit(true);
          setShowCorrectAnswers(true);
          const correctAns = userResponses?.filter((ans) => ans?.isCorrect === true);
          setCorrectAns(correctAns);
          const wrongAns = userResponses?.filter((ans) => ans?.isCorrect === false);
          setWrongAns(wrongAns);

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
          fetch("https://khulna-defence-coaching-server.onrender.com/submit-ans", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedAns),
          });
        }
      });
    }
  };

  return (
    <div className="pb-5 mx-auto">
      <div>
        {showCorrectAnswers && (
          <div className="flex justify-center">
            <div>
              <h3 className="text-green-500 font-semibold text-xl">Correct Ans: {correctAns?.length}</h3>
              <h3 className="text-red-500 font-semibold text-xl">Wrong Ans: {wrongAns?.length}</h3>
              <h3 className="font-semibold text-xl">Not Ans: {totalQuizzes - correctAns?.length - wrongAns?.length}</h3>
            </div>
          </div>
        )}
      </div>
      {/*  All Quiz Button */}
      <div>
        {quizzes.map((quiz, index) => (
          <button
            key={index}
            onClick={() => setDisplayQues(index)}
            className={`m-1 ${
              answeredQuiz.includes(quiz.quizNumber) ? "bg-blue-500 hover:bg-blue-700 text-white" : "bg-gray-200 text-black "
            } ${
              index === displayQues
                ? userResponses[index] && showCorrectAnswers
                  ? userResponses[index].isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-yellow-500 text-white"
                : userResponses[index] && showCorrectAnswers
                ? userResponses[index].isCorrect
                  ? "bg-green-500 hover:bg-green-700 text-white"
                  : "bg-red-500 hover:bg-red-700 text-white"
                : ""
            } font-bold p-2 rounded`}
          >
            {quiz.quizNumber}
          </button>
        ))}
      </div>
      <div className="mt-5 mb-5 p-6 bg-yellow-50 shadow-2xl rounded-md md:w-2/3 mx-auto border">
        <p className="text-xl font-bold mb-4">
          {displayQues + 1}. {quizzes[displayQues]?.question}
        </p>

        <div>
          {quizzes[displayQues]?.options && (
            <div>
              {Object.entries(quizzes[displayQues].options).map(([optionKey, optionValue]) => (
                <label key={optionKey} className="flex items-center mt-2">
                  <input
                    disabled={afterSubmit === true ? true : false}
                    type="checkbox"
                    onChange={() => handleOptionSelect(optionKey)}
                    checked={userResponses[displayQues]?.selectedOption === optionKey}
                  />
                  <span className="ml-2">{optionValue}</span>
                </label>
              ))}

              {showCorrectAnswers && userResponses[displayQues] && (
                <div>
                  {userResponses[displayQues]?.isCorrect ? null : (
                    <p className="text-red-500 mt-2">
                      Your answer: {quizzes[displayQues].options[userResponses[displayQues]?.selectedOption]}
                    </p>
                  )}
                  <p className="text-gray-500 mt-2">
                    Correct answer: {quizzes[displayQues].options[userResponses[displayQues]?.correctOption]}
                  </p>
                </div>
              )}
              {!userResponses[displayQues] && showCorrectAnswers && <p className="text-gray-500 mt-2">Not Answered</p>}
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
            disabled={afterSubmit === true ? true : false}
            onClick={handleSubmit}
            className={`mt-4    
             text-2xl font-bold py-2 px-4 rounded ${
               afterSubmit === true ? "bg-gray-400" : "bg-black hover:bg-yellow-400 hover:text-black text-yellow-400"
             }`}
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
    </div>
  );
};

export default QuizCard;
