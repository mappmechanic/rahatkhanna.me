"use client"; // Add this line to mark the component as a Client Component

import { useState, useEffect } from 'react';
import { Logo } from "./logo";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export function Header() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 20px
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ['home', 'about-me', 'portfolio', 'speaking', 'newsletter'];
        let newActiveSection = 0;

        sections.forEach((section, index) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            if (window.pageYOffset >= offsetTop - window.innerHeight / 2) {
              newActiveSection = index;
            }
          }
        });

        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      router.push('/');
      setIsMenuOpen(false);
      return;
    }
    
    if (pathname !== '/') {
      router.push(`/#${id}`);
      setIsMenuOpen(false);
      return;
    }

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

  const handleAIMultiverseClick = () => {
    router.push('/ai-multiverse');
    setIsMenuOpen(false);
  };

  const isActive = (index: number, itemId: string) => {
    if (pathname === '/ai-multiverse') {
      return false; // Don't highlight any main nav items on AI Multiverse page
    }
    return pathname === '/' && activeSection === index;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(index, item.id) ? 'bg-purple-600' : 'hover:bg-purple-700'
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
                  isActive(index, item.id) ? 'bg-purple-600' : 'hover:bg-purple-700'
                } mb-2`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleAIMultiverseClick}
              className={`block w-full text-left text-black px-3 py-2 rounded-md text-sm font-medium mb-2 ${
                pathname === '/ai-multiverse' ? 'bg-purple-600' : 'hover:bg-purple-700'
              }`}
            >
              ✨ AI Multiverse
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
