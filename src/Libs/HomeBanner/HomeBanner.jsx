import React from "react";

const HomeBanner = () => {
  return (
    <div className="homebanner text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl pt-20 mb-8 text-center">
        Find Colleges Abroad that are Right for You <br /> Discover.
        Research. Decide.
      </h2>
      <div className="">
        <input
          className="w-[45vw] h-[45px] focus:outline-none text-black rounded-md rounded-e-none px-4"
          type="text"
          placeholder="Search by college name ... "
        />
        <button className="bg-[#F37921] h-[46px] rounded-e-md px-8">Search</button>
      </div>
      <h2 className="text-xl pt-16 mb-2">Get insights into</h2>
      <ul className="flex gap-8 pb-6 list-disc">
        <li>Colleges</li>
        <li>Courses</li>
        <li>Admissions</li>
        <li>College Fees</li>
      </ul>
    </div>
  );
};

export default HomeBanner;
