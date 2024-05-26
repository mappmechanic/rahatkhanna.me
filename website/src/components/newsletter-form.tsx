'use client';

import { useState, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
          setEmail('');
          alert(data.message);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('Error submitting the form. Please try again.');
      }
    }
  };

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <Input
              className="flex-1 bg-white/10 border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="bg-white text-[#4c6ef5] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </form>
  );
}