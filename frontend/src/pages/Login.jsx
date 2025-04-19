import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      console.log("Logged in:", data);
      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user"></i> Login
        </h1>
        <hr className="mt-3" />

        <div className="mt-3">
          <label htmlFor="email" className="block text-base mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>

        <div className="mt-5">
          <button
            onClick={handleLogin}
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
          >
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm">
            Don’t have an account?
            <span
              className="text-indigo-800 font-semibold cursor-pointer ml-1"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;










