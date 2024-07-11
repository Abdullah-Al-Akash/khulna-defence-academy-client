import React, { useEffect } from "react";
import DashboardItems from "../DashboardItems";

const DashboardExamList = () => {
  useEffect(() => {
    fetch("https://khulna-defence-coaching-server.onrender.com/submit-ans?email=all")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  }, []);
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div className="col-span-4">
        <h3 className="text-center text-3xl font-bold">All Exam List</h3>
        {}
      </div>
    </div>
  );
};

export default DashboardExamList;
