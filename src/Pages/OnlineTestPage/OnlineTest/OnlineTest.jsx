import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OnlineTest = () => {
  const [verbalQuiz, setVerbalQuiz] = useState([]);
  const [nonVerbalQuiz, setNonVerbalQuiz] = useState([]);

  useEffect(() => {
    // Fetch quiz package data from an API endpoint
    fetch("quizCard.json")
      .then((response) => response.json())
      .then((data) => {
        const verbalPackage = data.filter((d) => d.category === "Verbal");
        setVerbalQuiz(verbalPackage);
        const nonVerbalPackage = data.filter(
          (d) => d.category === "Non Verbal"
        );
        setNonVerbalQuiz(nonVerbalPackage);
      })
      .catch((error) => console.error("Error fetching quiz packages:", error));
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="bg-yellow-50 px-6 py-8">
        <h2 className="text-center text-3xl font-bold p-4">Verbal Quiz</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {verbalQuiz.map((quizPackage, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-white shadow-md"
            >
              <h2 className="text-xl font-bold mb-2 text-center">
                {quizPackage.category}
              </h2>
              <h2 className="text-xl font-bold mb-2 text-center">
                {quizPackage.name}
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">Instructions:</h3>
                <ul className="list-disc pl-5">
                  {quizPackage.instructions.map((instruction, i) => (
                    <li key={i} className="text-gray-800">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded mr-2">
                  Request for Access
                </button>
                <Link
                  to={`/onlineTest/${quizPackage.id}`}
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold p-2 rounded"
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 px-6 py-8">
        <h2 className="text-center text-3xl font-bold p-4 mt-6">
          Non Verbal Quiz
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {nonVerbalQuiz.map((quizPackage, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-white shadow-md"
            >
              <h2 className="text-xl font-bold mb-2 text-center">
                {quizPackage.category}
              </h2>
              <h2 className="text-xl font-bold mb-2 text-center">
                {quizPackage.name}
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">Instructions:</h3>
                <ul className="list-disc pl-5">
                  {quizPackage.instructions.map((instruction, i) => (
                    <li key={i} className="text-gray-800">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded mr-2">
                  Request for Access
                </button>
                <Link
                  to={`/onlineTest/${quizPackage.id}`}
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold p-2 rounded"
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineTest;
