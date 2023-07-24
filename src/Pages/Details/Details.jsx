import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import DetailsTabs from "../../Libs/DetailsTabs/DetailsTabs";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const collegeDetails = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-8">
      <Helmet>
        <title>Details | {collegeDetails.collegeName}</title>
      </Helmet>
      <div style={{ boxShadow: "0 0 4px rgba(16,24,64,.12)" }}>
        <img
          style={{ borderRadius: "0 0 24px 24px" }}
          src={collegeDetails.coverImage}
          className="w-full object-cover h-[200px]"
          alt=""
        />
        <div className="lg:flex gap-6">
          <img
            className="w-[112px] h-[112px] lg:w-[160px] transition-all lg:h-[160px] object-contain details-photo"
            src={collegeDetails.image}
            alt=""
          />
          <div className="-mt-8 lg:mt-4 px-4">
            <div className="flex flex-col overflow-x-auto no-scrollbar">
              <h1 className="font-semibold text-2xl text-[#2f1238]">
                {collegeDetails.collegeName}
              </h1>
              <p className="flex items-center gap-1">
                <CiLocationOn /> {collegeDetails.location}
              </p>
              <div className="flex overflow-x-auto gap-4 items-center no-scrollbar">
                <p className="whitespace-nowrap">
                  <span className="bg-[#007c3d] rounded-lg text-white px-1 text-sm">
                    A++
                  </span>{" "}
                  <span className="underline">Shiksha Grade</span>
                </p>
                <p className="whitespace-nowrap">
                  <span className="bg-[#353535] rounded-md text-white px-1 text-sm">
                    Private
                  </span>{" "}
                  University
                </p>
                <p className="flex items-center gap-2 whitespace-nowrap">
                  <img
                    src="https://images.shiksha.ws/pwa/public/images/commonIcons/inst-icon.svg"
                    alt=""
                  />
                  <span>Courses Offered -</span>
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
