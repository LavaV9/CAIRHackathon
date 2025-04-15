import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Learn Sign Language with Real-Time Feedback
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        SignLearn is an interactive platform using computer vision and AI to help you practice and improve your signing skills live, with instant tips, progress tracking, and guided lessons.
      </p>
      <Link to="/camera">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg shadow transition">
          Go to Camera
        </button>
      </Link>
    </main>
  );
}

export default Home;
