import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [result, setResult] = useState([]);
  const [liveUser, setLiveUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/submit-ans?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, [result]);
  useEffect(() => {
    fetch(`http://localhost:5000/singleUser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLiveUser(data);
      });
  }, [user]);

  return (
    <div className="min-h-screen">
      <div className="md:flex items-center justify-center">
        <div className="text-center">
          <div className="avatar online">
            <div className="w-24 rounded-full border-4 border-black">
              <img src="https://cdn5.vectorstock.com/i/1000x1000/55/19/modern-army-soldier-icon-simple-style-vector-10885519.jpg" />
            </div>
          </div>
        </div>
        <div className="md:ms-8 md:text-start text-center">
          <h3 className="font-bold text-xl"> {liveUser?.displayName}</h3>
          <h3 className="">{liveUser?.email}</h3>
          <h3 className="">{liveUser?.mobileNumber}</h3>
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
