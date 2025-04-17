import React from 'react';
import './Login.css'; // reuse same styles as login, since tis is j signup
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user-plus"></i> Sign Up
        </h1>
        <hr className="mt-3" />

        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2">Username</label>
          <input type="text" id="username" placeholder="Enter Username..." className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
        </div>

        <div className="mt-3">
          <label htmlFor="email" className="block text-base mb-2">Email</label>
          <input type="email" id="email" placeholder="Enter Email..." className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2">Password</label>
          <input type="password" id="password" placeholder="Create Password..." className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
        </div>

        <div className="mt-5">
          <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
            <i className="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Sign Up
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm">Already have an account? 
            <span 
              className="text-indigo-800 font-semibold cursor-pointer ml-1"
              onClick={() => navigate("/")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
