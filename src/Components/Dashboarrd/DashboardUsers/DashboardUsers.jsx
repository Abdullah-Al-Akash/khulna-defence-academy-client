import React, { useEffect, useState } from "react";
import DashboardItems from "../DashboardItems";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
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
                      <button className="btn bg-yellow-300">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
