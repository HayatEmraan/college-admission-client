import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MdVerifiedUser } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const DetailsTabs = ({ collegeDetails }) => {
  console.log(collegeDetails);
  const [reviewsData, setReviewsData] = React.useState(collegeDetails.reviews);
  return (
    <div>
      <Tabs>
        <TabList
          className={"flex gap-4"}
          style={{
            boxShadow: "0 6px 16px rgba(16,24,64,.06)",
            padding: "12px 20px 16px",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <Tab className={"cursor-pointer"}>College Info</Tab>
          <Tab className={"cursor-pointer"}>Courses & Fees</Tab>
          <Tab className={"cursor-pointer"}>Reviews</Tab>
          <Tab className={"cursor-pointer"}>Admission</Tab>
        </TabList>
        <h1 className="flex gap-1 my-2 pl-5">
          <img
            src="https://images.shiksha.ws/pwa/public/images/commonIcons/darkClock.svg"
            alt=""
          />{" "}
          Last updated on 14 Jul '23
        </h1>
        <TabPanel className={"details-tabs-data"}>
          <p className="ml-5 py-3">{collegeDetails.about}</p>
        </TabPanel>
        <TabPanel className={"ml-2"}>
          <div>
            <h1 className="py-3 px-4 border rounded-t-md">
              {collegeDetails.collegeName} Courses Duration & Fees
            </h1>
            <div style={{ overflow: "auto", width: "100%" }} className="border">
              <div className="py-4 px-4">
                <table className="w-full table-class" border={1}>
                  <thead>
                    <tr>
                      <th>Courses</th>
                      <th>Duration</th>
                      <th>Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collegeDetails.courses.map((course, index) => {
                      return (
                        <tr key={index}>
                          <td>{course.name}</td>
                          <td>{course.duration}</td>
                          <td>{course.fees}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {reviewsData.map((review, index) => {
              return (
                <div key={index} className="border py-3 px-4 rounded-md mb-4">
                  <div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-12 rounded-full"
                          src={
                            review.image
                              ? review.image
                              : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          }
                          alt=""
                        />
                        <div>
                          <h1>{review.user}</h1>
                          <h1>
                            Reviewed on{" "}
                            {review.date ? review.date : "28 Aug 2023"}
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdVerifiedUser />
                        <h1>Verified</h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <p>{review.rating}</p>
                      <div className="flex text-red-500">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                    <p className="my-2">{review.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel className={"ml-2"}>
          <div>
            <h1 className="py-3 px-4 border rounded-t-md">
              {collegeDetails.collegeName} Courses Duration & Fees
            </h1>
            <div style={{ overflow: "auto", width: "100%" }} className="border">
              <div className="py-4 px-4">
                <table className="w-full table-class" border={1}>
                  <thead>
                    <tr>
                      <th>Courses</th>
                      <th>Duration</th>
                      <th>Fees</th>
                      <th>Deadline</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collegeDetails.courses.map((course, index) => {
                      return (
                        <tr key={index}>
                          <td>{course.name}</td>
                          <td>{course.duration}</td>
                          <td>{course.fees}</td>
                          <td>{collegeDetails.admission.deadline}</td>
                          <td>Apply</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DetailsTabs;
