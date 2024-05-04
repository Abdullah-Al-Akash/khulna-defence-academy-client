import React, { useContext, useEffect, useState } from "react";
import DashboardItems from "../DashboardItems";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  //   Handle Display Result:
  const displayResult = (email) => {
    document.getElementById("my_modal_4").showModal();
    fetch(`http://localhost:5000/submit-ans?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  };
  return (
    <div>
      <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
        <div class="col-span-1">
          <DashboardItems></DashboardItems>
        </div>
        <div class="col-span-4">
          <h2 className="text-xl font-semibold text-center p-6">All Users</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td> {/* Displaying serial number */}
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>{user.mobileNumber}</td>
                    <td>
                      <button
                        onClick={() => displayResult(user.email)}
                        className="btn bg-yellow-300"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal for see result */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
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
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DashboardUsers;
