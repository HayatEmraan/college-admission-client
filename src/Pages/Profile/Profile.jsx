import React, { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { LayerContext } from "../../Context/AuthContext";
const Profile = () => {
  const { user } = useContext(LayerContext);
  return (
    <div>
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
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
