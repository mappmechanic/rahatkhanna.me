'use client';

import { useState } from 'react';
import Link from 'next/link';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-purple-600 text-white shadow-lg">
      <Link href="/ai-multiverse" className="block">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1 text-center pr-8">
            <span role="img" aria-label="sparkles" className="mr-2">
              ✨
            </span>
            <span className="font-medium">
              Explore the AI Multiverse - Check out our new interactive AI tools guide!
            </span>
            <span className="ml-2 inline-block font-bold">
              Learn more →
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="flex-shrink-0 text-white hover:text-purple-200 focus:outline-none"
            aria-label="Dismiss banner"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
} 