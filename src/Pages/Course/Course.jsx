import React from "react";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div className="md:px-[84px] px-[10px]">
      <h3 className="text-2xl font-bold text-center mb-[10px]">
        আমাদের কোর্সসমূহ
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-[30px]">
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </div>
    </div>
  );
};

export default Course;
