import React from 'react';

function Camera() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Camera View</h2>
      <p className="text-gray-600 mb-6">
        Your camera and model will go here. We'll display live feedback and sign classification here later.
      </p>
      <div className="w-full h-[400px] bg-gray-100 rounded-xl border border-gray-300 flex items-center justify-center text-gray-400">
        {/* Placeholder for camera feed */}
        Live Camera Feed Coming Soon
      </div>
    </div>
  );
}

export default Camera;
