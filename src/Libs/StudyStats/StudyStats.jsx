import React from "react";
import Countries from "../../assets/icons/country.png";
import College from "../../assets/icons/college.png";
import Courses from "../../assets/icons/courses.png";
import Scholarships from "../../assets/icons/money.png";
const StudyStats = () => {
  return (
    <div
      className="bg-white"
      style={{ borderBottom: "1px solid rgb(204, 204, 204)" }}
    >
      <h1 className="text-2xl text-center py-3 font-medium">
        CAC Study Abroad has information about
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center max-w-lg mx-auto justify-center gap-12 pb-4">
        <div className="flex items-center justify-center gap-2">
          <img src={Countries} alt="" />
          <div>
            <p className="text-[1.3rem]">40</p>
            <p className="text-[0.95rem]">Countries</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={College} alt="" />
          <div>
            <p className="text-[1.3rem]">40</p>
            <p className="text-[0.95rem]">Colleges</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={Courses} alt="" />
          <div>
            <p className="text-[1.3rem]">40</p>
            <p className="text-[0.95rem]">Courses</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={Scholarships} alt="" />
          <div>
            <p className="text-[1.3rem]">40</p>
            <p className="text-[0.95rem]">Scholarships</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyStats;
