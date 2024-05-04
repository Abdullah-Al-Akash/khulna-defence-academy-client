import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardItems from "./DashboardItems";
import toast, { Toaster } from "react-hot-toast";

const AddQuiz = () => {
  const { quizId } = useParams();
  const [selectedValue, setSelectedValue] = useState("");
  const [latestQuiz, setLatesQuiz] = useState([]);
  const [quizNumber, setQuizNumber] = useState(0);

  // For IMGBB Hosting
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const isVerbal =
    quizId == 1 ||
    quizId == 2 ||
    quizId == 3 ||
    quizId == 4 ||
    quizId == 5 ||
    quizId == 6 ||
    quizId == 7 ||
    quizId == 8 ||
    quizId == 9 ||
    quizId == 10
      ? "Verbal"
      : "Non Verbal";
  console.log(isVerbal);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the dropdown selection changes
  };

  const handleQuiz = async (e) => {
    e.preventDefault();
    const cursor = e.target;
    const quizQuestion = {
      imageUrl: imageUrl,
      quizNumber: latestQuiz?.length + 1,
      question: cursor?.question?.value,
      options: {
        option1: cursor?.option1?.value,
        option2: cursor?.option2?.value,
        option3: cursor?.option3?.value,
        option4: cursor?.option4?.value,
        option5: cursor?.option5?.value,
        option6: cursor?.option6?.value,
        option7: cursor?.option7?.value,
        option8: cursor?.option8?.value,
      },
      correctOption: selectedValue,
      explanation: cursor?.explanation.value,
    };

    // Post Quiz Question to database:
    try {
      const response = await fetch(
        `http://localhost:5000/package?id=${quizId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quizQuestion),
        }
      );
      setQuizNumber(quizNumber + 1);
      console.log(response);
      if (response?.Response?.ok === true) {
        alert("Failed to submit quiz");
      } else {
        toast.success("Successfully Added Quiz");

        if (isVerbal == "Verbal") {
          cursor.question.value = "";
          cursor.option1.value = "";
          cursor.option2.value = "";
          cursor.option3.value = "";
          cursor.option4.value = "";
          cursor.option5.value = "";
          cursor.explanation.value = "";
        } else {
          cursor.option1.value = "";
          cursor.option2.value = "";
          cursor.option3.value = "";
          cursor.option4.value = "";
          cursor.option5.value = "";
          cursor.option6.value = "";
          cursor.option7.value = "";
          cursor.option8.value = "";
          cursor.explanation.value = "";
          setImageUrl(null);
          setImage(null);
        }
      }
    } catch (error) {
      console.error("Error submitting quiz:", error.message);
    }
  };
  useEffect(() => {
    fetch(`http://localhost:5000/package?id=${quizId}`)
      .then((res) => res.json())
      .then((data) => {
        setLatesQuiz(data);
      });
  }, [quizNumber]);

  // FOr Image Hosting:
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=d2c7f50d22d116296f74fd11ec45106d",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageUrl(data.data.url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      {isVerbal == "Verbal" ? (
        <div class="col-span-4 ms-12">
          <h3 className="text-center text-2xl font-semibold">
            Verbal Question
          </h3>
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
                autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">
                    Select Correct Ans
                  </span>
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
                  autoComplete="off"
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
      ) : (
        <div class="col-span-4 ms-12">
          <h3 className="text-center text-2xl font-semibold">
            Non Verbal Question
          </h3>
          <form onSubmit={handleQuiz}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-xl">
                  Q{latestQuiz.length + 1}
                </span>
              </div>
            </label>
            <div className="w-full max-w-xs">
              <label className="block">
                <span className="text-gray-700 font-bold">Upload Question</span>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="mt-1 block w-full"
                  required
                  autoComplete="off"
                />
              </label>
              <button
                onClick={handleUpload}
                disabled={!image || loading}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
              {imageUrl && (
                <div className="mt-4">
                  <img src={imageUrl} alt="Uploaded" className="w-full" />
                </div>
              )}
            </div>
            <div className="grid grid-cols-3">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option1</span>
                </div>
                <input
                  name="option1"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option6</span>
                </div>
                <input
                  name="option6"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                  autoComplete="off"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option7</span>
                </div>
                <input
                  name="option7"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                  autoComplete="off"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Option8</span>
                </div>
                <input
                  name="option8"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-1/2"
                  autoComplete="off"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">
                    Select Correct Ans
                  </span>
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
                  {isVerbal == "Non Verbal" ? (
                    <>
                      <option value="option6">Option 6</option>
                      <option value="option7">Option 7</option>
                      <option value="option8">Option 8</option>
                    </>
                  ) : (
                    ""
                  )}
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
                  autoComplete="off"
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
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddQuiz;
