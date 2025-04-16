import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-bg min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="home-title text-5xl font-bold mb-6 animate-frameshift">
        Welcome to SYN
      </h1>
      <p className="home-subtext text-gray-400 max-w-xl text-lg animate-frameshift delay-200">
        Learn sign language with real-time AI feedback, live camera tracking,
        and personalized lessons.
      </p>
      
      <div className="mt-10 flex gap-4 animate-frameshift delay-300">
        <Link to="/camera">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg shadow transition">
            Try the Camera
          </button>
        </Link>
        <Link to="/">
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-lg shadow transition">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;












