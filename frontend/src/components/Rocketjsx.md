//the code is here if it is needed
import React from 'react';
import { motion } from 'framer-motion';
import rocketImg from '../assets/cleanpng.png'; // i dont like this one just testing to see if it works lol

const Rocket = () => {
  return (
    <motion.img
      src={rocketImg}
      alt="rocket"
      initial={{ x: -300, y: 300, rotate: -45, opacity: 0 }}
      animate={{ x: '100vw', y: -200, rotate: 25, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      style={{
        width: '180px', //force size
        height: '180px', //force size 
        objectFit: 'contain',
        position: 'absolute',
        zIndex: 50,
      }}
    />
  );
};

export default Rocket;