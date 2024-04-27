import React from "react";
import DashboardItems from "./DashboardItems";

const DashboardHome = () => {
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div class="col-span-4">
        <h1 className="text-center mt-10 text-4xl font-bold leading-snug">
          Welcome<br></br> To <br></br> Admin Control
        </h1>
      </div>
    </div>
  );
};

export default DashboardHome;
