import { useState } from "react";

const QuizCard = ({ quizzes }) => {
  console.log(quizzes);
  const [displayQues, setDisplayQues] = useState(0); // Changed initial state to 0
  const totalQuizzes = quizzes.length;

  const handleNext = () => {
    setDisplayQues(displayQues + 1);
  };

  const handleBack = () => {
    setDisplayQues(displayQues - 1);
  };

  return (
    <div className="pb-5">
      <div className="mt-5 mb-5 border p-2">
        <p className="text-xl font-bold mb-4">
          {displayQues + 1}. {quizzes[displayQues]?.question}
        </p>

        <div>
          {quizzes[displayQues]?.options && (
            <div>
              {Object.entries(quizzes[displayQues].options).map(([optionKey, optionValue]) => (
                <label key={optionKey} className="flex items-center mt-2">
                  <input type="checkbox" />
                  <span className="ml-2">{optionValue}</span>
                </label>
              ))}
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
              index === displayQues ? "bg-green-500" : "bg-yellow-500"
            } hover:bg-black hover:text-yellow-400 text-black font-bold py-2 px-4 rounded`}
          >
            {quiz.quizNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
