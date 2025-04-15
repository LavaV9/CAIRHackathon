import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [showRocket, setShowRocket] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowRocket(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      <StarsBackground />
      <AnimatePresence>{showRocket && <Rocket />}</AnimatePresence>

      {!showRocket && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1 className="text-6xl font-bold tracking-tight text-white mb-6">Welcome to SYN</h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Learn sign language with real-time feedback, gesture correction, and a responsive interface.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default Home;