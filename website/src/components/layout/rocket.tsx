import React from "react";
import { motion } from "framer-motion";

const RocketAnimation = () => {
  const pathAnimation = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 5, ease: "easeInOut" } },
  };

  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <motion.path
           d="M50 250 Q 250 -100, 450 250" // A hyperbolic path (quadratic bezier curve)
          stroke="blue"
          strokeWidth="2"
          fill="transparent"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
      </svg>

      {/* Rocket Image */}
      <motion.div
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          background: `url('rocket.png') center center / contain no-repeat`,
        }}
        initial={{ x: 50, y: 250 }}
        animate={{
          x: [50, 250, 450],
          y: [300, -100, 300],
        }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default RocketAnimation;
