import React from 'react';
import { motion } from 'framer-motion';

const Rocket = () => {
  return (
    <motion.div
      initial={{ x: -300, y: 300, rotate: -45, opacity: 0 }}
      animate={{ x: '100vw', y: -200, rotate: 25, opacity: 1 }}
      transition={{ duration: 5, ease: 'easeInOut' }}
      className="absolute z-50"
    >
      <div className="text-[250px] scale-[200]">
        🚀
      </div>
    </motion.div>
  );
};

export default Rocket;



