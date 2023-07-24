import React, { useContext, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { LayerContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet-async";
const Profile = () => {
  const { user } = useContext(LayerContext);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/getBookCourses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Helmet>
        <title>CAC | My Profile</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
          <div className="p-4 border-b flex justify-between items-center">
            <div>
              <h2 className="text-2xl ">Applicant Information</h2>
              <p className="text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <AiOutlineEdit size={23} />
          </div>
          {/* <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Full name</p>
              <p>{user?.displayName}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">College Name</p>
              <p>Product Manager</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Email Address</p>
              <p>{user?.email}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Address</p>
              <p>$ 12000</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">About</p>
              <p>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </p>
            </div>
          </div> */}
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
