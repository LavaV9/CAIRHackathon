import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user mr-2"></i> Login
        </h1>
        <hr className="mt-3" />
        <form className="mt-3">
          <div className="mt-3">
            <label className="block text-base mb-2" htmlFor="email">
              UNC Charlotte Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@uncc.edu"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              required
            />
          </div>

          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-1 text-sm">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-indigo-800 font-semibold text-sm">
              Forgot Password?
            </a>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            >
              <i className="fa-solid fa-right-to-bracket mr-2"></i> Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;







