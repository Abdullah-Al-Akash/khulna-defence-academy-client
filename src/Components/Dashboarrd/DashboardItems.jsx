import React from "react";
import { Link } from "react-router-dom";

const DashboardItems = () => {
  return (
    <div className="bg-black text-white p-4 min-h-screen">
      <div className="pt-2">
        <Link
          className="font-semibold p-2 text-xl hover:text-yellow-400"
          to="/dashboard"
        >
          Home
        </Link>
      </div>
      <div className="pt-2">
        <Link
          className="font-semibold p-2 text-xl hover:text-yellow-400"
          to="/dashboard/quiz"
        >
          Set Quiz
        </Link>
      </div>
      <div className="pt-2">
        <Link
          className="font-semibold p-2 text-xl hover:text-yellow-400"
          to="/dashboard/update-quiz"
        >
          Update Quiz
        </Link>
      </div>
      <div className="pt-2">
        <Link
          className="font-semibold p-2 text-xl hover:text-yellow-400"
          to="/dashboard/users"
        >
          Users
        </Link>
      </div>
      <div className="pt-2">
        <Link
          className="font-semibold p-2 text-xl hover:text-yellow-400"
          to="/dashboard/notice"
        >
          Notice Board
        </Link>
      </div>
    </div>
  );
};

export default DashboardItems;
