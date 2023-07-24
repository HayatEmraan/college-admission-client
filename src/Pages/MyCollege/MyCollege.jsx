import React, { useContext, useEffect } from "react";
import { LayerContext } from "../../Context/AuthContext";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Loader from "../../Libs/Loader/Loader";
import { Helmet } from "react-helmet-async";

const MyCollege = () => {
  const { user } = useContext(LayerContext);
  const [data, setData] = React.useState([]);
  const [collegeData, setCollegeData] = React.useState(null);
  const [isHidden, setIsHidden] = React.useState(false);
  const handleToggle = () => {
    setIsHidden(!isHidden);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/getBookCourses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(
      `https://college-admission-server-ten.vercel.app/colleges/${data[0]?.uniID}`
    )
      .then((res) => res.json())
      .then((data) => setCollegeData(data))
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div>
      <Helmet>
        <title>CAC | My College</title>
      </Helmet>
      {collegeData ? (
        <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-12 mb-4 text-[#D0ABFF]">
            Your College Is Here.
          </h2>
          <div
            onClick={handleToggle}
            className={`flex justify-between shadow-lg items-baseline md:items-center mb-4 rounded-md box-border cursor-pointer`}
          >
            <div className="md:flex items-center gap-4 p-4">
              <img
                src={collegeData.image}
                alt=""
                className="w-[112px] h-[112px] object-contain"
              />
              <div className="">
                <div className="flex flex-col">
                  <h1 className="font-semibold text-2xl text-[#2f1238]">
                    {collegeData.collegeName}
                  </h1>
                  <p className="flex items-center gap-1">
                    <CiLocationOn /> {collegeData.location}
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
                      <span>Courses Offered -</span> <span> {""}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 cursor-pointer">
              {!isHidden ? <BiPlus size={21} /> : <BiMinus size={21} />}
            </div>
          </div>
          {isHidden && (
            <div className="p-2 lg:p-0 flex items-center justify-center">
              <div className="container max-w-screen-xl mx-auto">
                <div>
                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-lg">Personal Details</p>
                      </div>
                      <div className="lg:col-span-2 mb-8">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="name">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.name}
                              disabled
                            />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="text"
                              name="email"
                              disabled
                              id="email"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.email}
                              placeholder="email@domain.com"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <label htmlFor="address">Address / Street</label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.address}
                              disabled
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="city">City</label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.city}
                              disabled
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="country">Country / region</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                name="country"
                                id="country"
                                placeholder="Country"
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                defaultValue={data[0]?.country}
                                disabled
                              />
                              <p
                                tabIndex="-1"
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </p>
                              <p
                                tabIndex="-1"
                                htmlFor="show_more"
                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                              </p>
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="state">State / province</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                name="state"
                                id="state"
                                placeholder="State"
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                defaultValue={data[0]?.state}
                                disabled
                              />
                              <p
                                tabIndex="-1"
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </p>
                              <p
                                tabIndex="-1"
                                htmlFor="show_more"
                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                              </p>
                            </div>
                          </div>

                          <div className="md:col-span-1">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input
                              type="text"
                              name="zipcode"
                              id="zipcode"
                              className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                              defaultValue={data[0]?.zipcode}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-600">
                        <p className="font-medium text-lg">
                          Educational Qualification
                        </p>
                      </div>
                      <div className="lg:col-span-2 mb-8">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="collegeName">College Name</label>
                            <input
                              type="text"
                              name="collegeName"
                              id="collegeName"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.collegeName}
                              disabled
                            />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="gpaNumber">GPA / CGPA</label>
                            <input
                              type="text"
                              name="gpaNumber"
                              id="gpaNumber"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.gpaNumber}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-600">
                        <p className="font-medium text-lg">
                          Interest University & Course
                        </p>
                      </div>
                      <div className="lg:col-span-2 mb-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="uniName">University Name</label>
                            <input
                              type="text"
                              name="uniName"
                              disabled
                              id="uniName"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.uniName}
                            />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="location">Location</label>
                            <input
                              type="text"
                              name="location"
                              disabled
                              id="location"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.location}
                            />
                          </div>
                          <div className="md:col-span-5">
                            <label htmlFor="location">Course</label>
                            <input
                              type="text"
                              name="location"
                              disabled
                              id="location"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={data[0]?.courseName}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MyCollege;
