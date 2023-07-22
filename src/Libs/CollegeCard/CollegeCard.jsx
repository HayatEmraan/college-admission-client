import React from "react";

const CollegeCard = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-medium mt-16">Featured Destinations From Dhaka</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="relative">
          <h1 className="absolute top-[8%] left-6 text-white uppercase bg-[#2aaa8a] px-3 rounded-md">
            Bangladesh
          </h1>
          <img
            className="w-full rounded-md"
            src="https://www.biman-airlines.com/assets/images/destinations/bangladesh-index.jpg"
            alt=""
          />
          <div>
            <h3 className="absolute top-[50%] text-xl text-white font-medium py-3 left-6">
              Dhaka, Barishal, Chattogram, Cox's Bazar, Jashore
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
