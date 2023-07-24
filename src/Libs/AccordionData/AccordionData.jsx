import React from "react";
import { Link } from "react-router-dom";

const AccordionData = ({ collegeDetails }) => {
  return (
    <div className="mb-4">
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
                    <td className="text-green-600">
                      <Link to={`/admission/${collegeDetails._id}`}>Apply</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccordionData;
