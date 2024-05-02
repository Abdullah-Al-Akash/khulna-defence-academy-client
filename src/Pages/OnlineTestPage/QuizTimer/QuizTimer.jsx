import { useEffect, useState } from "react";
import QuizCard from "../QuizCard/QuizCard";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const QuizTimer = () => {
  const { id } = useParams();
  const [selectedTime, setSelectedTime] = useState(null);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [stopTimer, setStopTimer] = useState(false);
  const url = `https://khulna-defence-coaching-server.onrender.com/package?id=${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error("Error fetching quiz packages:", error));
  }, [url]);

  // console.log(quizzes);

  let timerInterval;

  const startCountdown = () => {
    let remainingSeconds = selectedTime * 60;

    timerInterval = setInterval(() => {
      const minutesLeft = Math.floor(remainingSeconds / 60);
      const secondsLeft = remainingSeconds % 60;

      setMinutesLeft(minutesLeft);
      setSecondsLeft(secondsLeft);

      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        setStopTimer(true)
        console.log("Countdown completed!");
      } else {
        remainingSeconds--;
      }
    }, 1000); // 1000 milliseconds = 1 second
  };

  const handleTimeChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedTime(value);
    if (value < 1 || value > 101) {
      setShowModal(true);
    }
  };

  const handleStart = () => {
    if (selectedTime > 0 && selectedTime < 100) {
      startCountdown();
      setTestStarted(true);
    } else {
      document.getElementById("my_modal_1").showModal();
      setShowModal(true);
    }
  };

  return (
    <div className="container mx-auto mt-10  min-h-[350px]">
      <div>
        {/* Back button */}
        <Link to="/onlineTest" className="inline-block mb-4 text-blue-500">
          <FaArrowLeft className="inline mr-1" />
          Back
        </Link>
      </div>
      <h2 className="text-3xl text-center font-bold mb-6">Online Test</h2>
      {showModal && (
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <p className="py-4">Please enter a time value between 1 minute and 100 minutes.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
      {!testStarted && (
        <div className="mb-4 max-w-md mx-auto">
          <label htmlFor="timeInput" className="block mb-2 text-lg font-medium">
            Set Time (minutes):
          </label>
          <input
            type="number"
            id="timeInput"
            className="border border-gray-400 rounded-md p-2 w-full"
            value={selectedTime}
            min="1"
            max="100"
            onChange={handleTimeChange}
          />
        </div>
      )}
      <div className={testStarted ? "text-xl font-medium flex justify-center" : "hidden"}>
        {!stopTimer ? (
          <p>
            Time left: {minutesLeft}m {secondsLeft}s
          </p>
        ) : (
          ""
        )}
      </div>
      {!testStarted && (
        <div className="flex justify-center">
          <button
            className="mt-4 bg-yellow-400 hover:bg-black hover:text-yellow-400 text-black font-bold py-2 px-4 rounded"
            onClick={handleStart}
          >
            Start Online Test
          </button>
        </div>
      )}
      {testStarted && <QuizCard setStopTimer={setStopTimer} stopTimer={stopTimer} quizId={id} quizzes={quizzes}></QuizCard>}
    </div>
  );
};

export default QuizTimer;
