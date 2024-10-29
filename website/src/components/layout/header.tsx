"use client"; // Add this line to mark the component as a Client Component

import { useState, useEffect } from 'react';
import { Logo } from "./logo";

export function Header() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      const sections = ['home', 'about-me', 'portfolio', 'speaking', 'newsletter'];
      let newActiveSection = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (pageYOffset >= offsetTop - window.innerHeight / 2) {
            newActiveSection = index;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about-me' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Speaking/Coaching', id: 'speaking' },
    { label: 'Newsletter', id: 'newsletter' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === index ? 'bg-purple-600' : 'hover:bg-purple-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white bg-opacity-40 backdrop-blur-md p-4 rounded shadow">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-black px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === index ? 'bg-purple-600' : 'hover:bg-purple-700'
                } mb-2`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
