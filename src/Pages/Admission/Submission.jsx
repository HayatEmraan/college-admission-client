import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { LayerContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Submission = () => {
  const collegeInfo = useLoaderData();
  const { user } = useContext(LayerContext);
  const handleForm = (e) => {
    e.preventDefault();
    const middle = e.target;
    const name = middle.name.value;
    const email = middle.email.value;
    const address = middle.address.value;
    const city = middle.city.value;
    const country = middle.country.value;
    const zipcode = middle.zipcode.value;
    const state = middle.state.value;
    const collegeName = middle.collegeName.value;
    const gpaNumber = middle.gpaNumber.value;
    const courseName = middle.courseName.value;
    const uniName = middle.uniName.value;
    const location = middle.location.value;
    fetch("https://college-admission-server-ten.vercel.app/bookCourses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniID: collegeInfo._id,
        name,
        email,
        address,
        city,
        country,
        zipcode,
        state,
        collegeName,
        gpaNumber,
        courseName,
        uniName,
        location,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if ((result.result = "Course user already exists!")) {
          toast.error("You've already applied an university!");
        } else {
          toast.success("Successfully applied!");
        }
      })
      .catch((error) => toast.error("Something went wrong. Try again."));
  };
  return (
    <div>
      <Helmet>
        <title>CAC | Submission</title>
      </Helmet>
      <div className="p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Admission Form
            </h2>
            <p className="text-gray-500 mb-6">Please fill out all the fields</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleForm}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
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
                        defaultValue={user?.displayName}
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
                        defaultValue={user?.email}
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
                        defaultValue=""
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder=""
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
                          defaultValue=""
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
                          defaultValue=""
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
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium text-lg">
                    Educational Qualification
                  </p>
                  <p>Please fill out all the fields.</p>
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
                        defaultValue=""
                        placeholder="CAC College & University"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="gpaNumber">GPA / CGPA</label>
                      <input
                        type="text"
                        name="gpaNumber"
                        id="gpaNumber"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="4.00 / 5.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium text-lg">
                    Interest University & Course
                  </p>
                  <p>Please fill out all the fields.</p>
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
                        defaultValue={collegeInfo?.collegeName}
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
                        defaultValue={collegeInfo?.location}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="courseName">Select Course</label>
                      <select
                        name="courseName"
                        id="courseName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-md"
                      >
                        {collegeInfo.courses.map((course, index) => (
                          <option key={index} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
