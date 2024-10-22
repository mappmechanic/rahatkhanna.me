import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLandingText = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const subtitles = ['Focus', 'Discipline', 'Growth', 'AI', 'Me'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 4000); // Change subtitle every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const subtitleVariants = {
    enter: { y: 20, opacity: 0 },
    center: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-screen text-white"
      style={{ backgroundColor: '#382c85' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-7xl md:text-10xl sm:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300"
        variants={itemVariants}
      >
        UNLEASH
      </motion.h1>
      <motion.div
        className="text-4xl md:text-6xl sm:text-5xl font-semibold flex items-center mb-4"
        variants={itemVariants}
      >
        <span className="mr-4 text-purple-200">your potential with</span>
      </motion.div>
      <motion.div 
        className="text-5xl md:text-7xl sm:text-6xl font-semibold flex items-center"
        variants={itemVariants}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSubtitle}
            variants={subtitleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="inline-block min-w-[400px] text-center text-yellow-300"
          >
            {subtitles[currentSubtitle]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLandingText;