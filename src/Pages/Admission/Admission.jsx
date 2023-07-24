import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BiMinus, BiPlus } from "react-icons/bi";
import AccordionData from "../../Libs/AccordionData/AccordionData";
import { Helmet } from "react-helmet-async";
const Admission = () => {
  const [courses, setCourses] = React.useState([]);
  const [collapse, setCollapse] = React.useState(false);
  useEffect(() => {
    fetch("https://college-admission-server-ten.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);
  const handleToggle = (id) => {
    courses.find((item) => item._id === id).isCollapsed = !collapse;
    setCollapse(!collapse);
    setCourses([...courses]);
  };
  return (
    <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8 mb-8">
      <Helmet>
        <title>CAC | Admission</title>
      </Helmet>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-12 mb-4 text-[#D0ABFF]">
        Your Dream College Admission Is Here.
      </h2>
      {courses.map((course, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => handleToggle(course._id)}
              className={`flex justify-between shadow-lg items-baseline md:items-center mb-4 rounded-md box-border ${
                course.isCollapsed ? "" : "mb-4"
              }`}
            >
              <div className="md:flex items-center gap-4 p-4">
                <img
                  src={course.image}
                  alt=""
                  className="w-[112px] h-[112px] object-contain"
                />
                <div className="">
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl text-[#2f1238]">
                      {course.collegeName}
                    </h1>
                    <p className="flex items-center gap-1">
                      <CiLocationOn /> {course.location}
                    </p>
                    <div className="md:flex no-scrollbar hidden gap-4 items-center whitespace-nowrap overflow-x-auto no-scrollbar">
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
                        <span> {course.courses.length}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 cursor-pointer">
                {!course.isCollapsed ? (
                  <BiPlus size={21} />
                ) : (
                  <BiMinus size={21} />
                )}
              </div>
            </div>
            {course.isCollapsed && <AccordionData collegeDetails={course} />}
          </div>
        );
      })}
    </div>
  );
};

export default Admission;
