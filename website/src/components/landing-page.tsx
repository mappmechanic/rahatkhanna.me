'use client'

import HeroSection from "./layout/stars";
import AboutSection from "./landing-page/about-section";
import PortfolioSection from "./landing-page/portfolio-section";
import ContactSection from "./landing-page/contact-section";
import CoachingSection from "./landing-page/coaching-section";
import { useState } from 'react'
import VideoModal from './layout/video-modal'

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlay = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="relative">
      <section id="home">
        <HeroSection onPlay={handlePlay} />
      </section>
      <section id="about-me"><AboutSection /></section>
      <section id="portfolio"><PortfolioSection /></section>
      <section id="speaking"><CoachingSection /></section>
      <section id="newsletter"><ContactSection /></section>
      <style jsx global>{`
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
        }

        .shooting-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: white;
          border-radius: 50%;
          animation: shoot 5s linear infinite;
        }

        .glow-soft {
          box-shadow: 0 0 15px 5px rgba(168, 85, 247, 0.4);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
