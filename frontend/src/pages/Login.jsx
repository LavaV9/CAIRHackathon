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

  const starCount = 100;
  const stars = Array.from({ length: starCount }, (_, i) => {
    const size = Math.random() * 2 + 1;
    const duration = 10 + Math.random() * 20;
    const direction = Math.random() > 0.5 ? "normal" : "reverse";
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${duration}s`,
          animationDirection: direction,
        }}
      ></div>
    );
  });

  return (
    <div className="login-bg">
      {stars}
      <div className="flex justify-center items-center h-screen">
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
  <p className="text-sm text-white">
    Don’t have an account?
    <button
      onClick={() => navigate("/signup")}
      className="transition-all ml-2 px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-black hover:from-purple-700 hover:to-indigo-700 font-semibold shadow-md"
    >
      Sign up
    </button>
  </p>
</div>


        </div>
      </div>
    </div>
  );
};

export default Login;











