//original in md files 
import React from 'react';
import './Login.css';

const Login = () => {
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
        <div className="w-96 p-6 shadow-lg login-box rounded-md">
          <h1 className="text-3xl block text-center font-semibold text-white">
            <i className="fa-solid fa-user"></i> Login to SYN
          </h1>
          <hr className="mt-3" />

          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2 text-white">
              Username
            </label>
            <input type="text" id="username" placeholder="Enter Username..." className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
          </div>

          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2 text-white">
              Password
            </label>
            <input type="password" id="password" placeholder="Enter Password..." className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
          </div>

          <div className="mt-3 flex justify-between items-center text-white">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2">Remember Me</label>
            </div>
            <a href="#" className="text-indigo-300 font-semibold">Forgot Password?</a>
          </div>

          <div className="mt-5">
            <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;









