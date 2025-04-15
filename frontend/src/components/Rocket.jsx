import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Rocket = () => {
  const [showSyn, setShowSyn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSyn(true);
    }, 2000); // show SYN after rocket animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        initial={{ x: -200, y: 300, rotate: -45, opacity: 0 }}
        animate={{ x: '100vw', y: -200, rotate: 20, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="absolute text-20xl z-50"
      >
        🚀
      </motion.div>

      {showSyn && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex justify-center items-center text-white text-7xl font-extrabold z-40"
        >
          SYN
        </motion.h1>
      )}
    </>
  );
};

export default Rocket;

