import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../UserReducer";

function Edituser() {
  const { id } = useParams();
  const Users = useSelector((state) => state.users);
  const existingusers = Users.filter((f) => f.id == id);
  const { name, email } = existingusers[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const handleBack = () => {
    Navigate("/");
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    console.log(Users);
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
            value={uname}
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
            value={uemail}
            placeholder="Enter email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Update
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

export default Edituser;
