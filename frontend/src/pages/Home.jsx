import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to SYN</h1>
      <p className="text-gray-400 mb-8 text-center max-w-xl">
        Learn sign language with AI-powered real-time feedback.
      </p>

      <Link to="/camera">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-lg">
          Go to Camera
        </button>
      </Link>
    </div>
  );
};

export default Home;








