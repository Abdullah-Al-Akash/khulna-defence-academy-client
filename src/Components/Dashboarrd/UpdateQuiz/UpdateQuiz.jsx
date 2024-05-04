import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardItems from "../DashboardItems";
import toast, { Toaster } from "react-hot-toast";

const UpdateQuiz = () => {
  const { quizId } = useParams();
  const [latestQuiz, setLatesQuiz] = useState([]);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [updateQuizId, setUpdateQuizId] = useState("");
  // For IMGBB Hosting
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [handleLoad, setHandleLoad] = useState(false);
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
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the dropdown selection changes
  };
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
  useEffect(() => {
    fetch(
      `https://khulna-defence-coaching-server.onrender.com/package?id=${quizId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLatesQuiz(data);
      });
  }, [handleLoad]);

  //   Handle Update
  const handleUpdateQuiz = (event) => {
    event.preventDefault();
    const cursor = event.target;
    const quizQuestion = {
      image: imageUrl,
      question: cursor?.question?.value || "",
      options: {
        option1: cursor?.option1.value,
        option2: cursor?.option2.value,
        option3: cursor?.option3.value,
        option4: cursor?.option4.value,
        option5: cursor?.option5.value,
        option6: cursor?.option6?.value,
        option7: cursor?.option7?.value,
        option8: cursor?.option8?.value,
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
          setHandleLoad(!handleLoad);
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
        {isVerbal == "Verbal"
          ? latestQuiz.map((quiz) => (
              <form
                onSubmit={handleUpdateQuiz}
                className="bg-yellow-100 m-4 px-4 py-2 rounded-md"
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
                    autoComplete="off"
                  />
                </label>
                <div className="grid grid-cols-4">
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
                      <span className="label-text font-bold">Option5</span>
                    </div>
                    <input
                      defaultValue={quiz?.options?.option5 || ""}
                      name="option5"
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
                      <option value="option5">Option 5</option>
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
            ))
          : latestQuiz.map((quiz) => (
              <form
                onSubmit={handleUpdateQuiz}
                className="bg-yellow-100 m-4 p-6 rounded-md"
              >
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-bold text-xl">
                      Q{quiz.quizNumber}
                    </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <label className="block">
                        <span className="text-gray-700 font-bold">
                          Upload Image
                        </span>
                        <input
                          type="file"
                          onChange={handleImageChange}
                          className="mt-1 block w-full"
                        />
                      </label>
                      <button
                        onClick={handleUpload}
                        disabled={!image || loading}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4"
                      >
                        {loading ? "Uploading..." : "Upload"}
                      </button>
                      {/* {imageUrl && (
                        <div className="mt-4">
                          <img
                            src={imageUrl}
                            alt="Uploaded"
                            className="w-full"
                          />
                        </div>
                      )} */}
                    </div>
                    <div className="w-3/4">
                      <img
                        className="rounded-lg border-2 border-black"
                        src={quiz?.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                </label>
                <div className="grid grid-cols-4">
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
                      <span className="label-text font-bold">Option5</span>
                    </div>
                    <input
                      defaultValue={quiz?.options?.option5 || ""}
                      name="option5"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-1/2"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-bold">Option6</span>
                    </div>
                    <input
                      defaultValue={quiz?.options?.option6 || ""}
                      name="option6"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-1/2"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-bold">Option7</span>
                    </div>
                    <input
                      defaultValue={quiz?.options?.option7 || ""}
                      name="option7"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-1/2"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-bold">Option8</span>
                    </div>
                    <input
                      defaultValue={quiz?.options?.option8 || ""}
                      name="option8"
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
                      <option value="option5">Option 5</option>
                      <option value="option6">Option 6</option>
                      <option value="option7">Option 7</option>
                      <option value="option8">Option 8</option>
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
