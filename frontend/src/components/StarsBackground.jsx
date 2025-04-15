import React from 'react';

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden -z-10">
      <div className="w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>
  );
};

export default StarsBackground;
