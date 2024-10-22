'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import AnimatedLandingText from './animated-landing-text';
import Rocket from './rocket';
import PlayButton from './play-button';

export default function HeroSection({ onPlay }) {
  const stars = useMemo(() => [...Array(100)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 3 + 2}s`,
  })), []);

  const shootingStars = useMemo(() => [...Array(2)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
  })), []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-800 to-purple-600">
      {/* Starry background with twinkling effect */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {shootingStars.map((star, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Tagline - Center aligned */}
      <AnimatedLandingText />
      <Rocket />

      {/* Celestial object (without text and button) */}
      <motion.div
        className="absolute bottom-52 left-1/2 -translate-x-1/2 -translate-y-1/8"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-purple-400 bg-opacity-30 glow-soft">
          <PlayButton onPlay={onPlay} />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes shoot {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(300px) translateY(300px); opacity: 0; }
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          animation: twinkle linear infinite;
          will-change: opacity, transform;
        }

        .shooting-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: white;
          border-radius: 50%;
          animation: shoot 5s linear infinite;
          will-change: transform, opacity;
        }

        .glow-soft {
          box-shadow: 0 0 15px 5px rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </div>
  )
}