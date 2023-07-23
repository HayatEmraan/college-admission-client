import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import DetailsTabs from "../../Libs/DetailsTabs/DetailsTabs";

const Details = () => {
  const collegeDetails = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div style={{ boxShadow: "0 0 4px rgba(16,24,64,.12)" }}>
        <img
          style={{ borderRadius: "0 0 24px 24px" }}
          src={collegeDetails.coverImage}
          className="w-full object-cover h-[200px]"
          alt=""
        />
        <div className="flex gap-6">
          <img
            className="w-[112px] h-[112px] object-contain details-photo"
            src={collegeDetails.image}
            alt=""
          />
          <div className="mt-4">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl text-[#2f1238]">
                {collegeDetails.collegeName}
              </h1>
              <p className="flex items-center gap-1">
                <CiLocationOn /> {collegeDetails.location}
              </p>
              <div className="flex gap-4 items-center">
                <p>
                  <span className="bg-[#007c3d] rounded-lg text-white px-1 text-sm">
                    A++
                  </span>{" "}
                  <span className="underline">Shiksha Grade</span>
                </p>
                <p>
                  <span className="bg-[#353535] rounded-md text-white px-1 text-sm">
                    Private
                  </span>{" "}
                  University
                </p>
                <p className="flex items-center gap-2">
                  <img
                    src="https://images.shiksha.ws/pwa/public/images/commonIcons/inst-icon.svg"
                    alt=""
                  />
                  <span>Courses Offered -</span>{" "}
                  <span> {collegeDetails.courses.length}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DetailsTabs collegeDetails={collegeDetails} />
      </div>
    </div>
  );
};

export default Details;
