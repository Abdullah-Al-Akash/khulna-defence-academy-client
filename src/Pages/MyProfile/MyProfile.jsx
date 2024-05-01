import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(
      `https://khulna-defence-coaching-server.onrender.com/submit-ans?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="md:flex items-center justify-center">
        <div className="text-center">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://media.licdn.com/dms/image/D5603AQFGDobIsN6JfQ/profile-displayphoto-shrink_800_800/0/1684397636582?e=2147483647&v=beta&t=4zuyyzeS3faoqw-kSjgbeS0V7GHbNm0RoWJrPHZaXtQ" />
            </div>
          </div>
        </div>
        <div className="md:ms-8 md:text-start text-center">
          <h3 className="font-bold text-xl"> Abdullah Al Akash</h3>
          <h3 className="">aabdullahalakash@gmail.com</h3>
          <h3 className="">01859096600</h3>
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-center text-xl font-bold py-[20px]">
          My Dashboard
        </h3>
        {result.length ? (
          <table className="table table-zebra border border-black">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Quiz Package</th>
                <th className="text-green-500">Correct Ans</th>
                <th className="text-red-500">Wrong Ans</th>
                <th>Not Ans</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((r, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* Displaying serial number */}
                  <td>{r.quizSet}</td>
                  <td className="text-green-500">{r.correctAns}</td>
                  <td className="text-red-500">{r.wrongAns}</td>
                  <td>{r.notAns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center text-xl p-4">There is no</h3>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
