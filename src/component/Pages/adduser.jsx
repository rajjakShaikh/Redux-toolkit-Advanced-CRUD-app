import React, { useState } from "react";
import { addUser } from "../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Adduser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const dispatch = useDispatch();
  const Users = useSelector((state) => state.users);
  const handlesubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Users.length + 1,
      name,
      email,
    };
    dispatch(addUser(newUser));
    Navigate("/");
  };

  const handleBack = () => {
    Navigate("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center border-b-2">
          ADD User
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handlesubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
