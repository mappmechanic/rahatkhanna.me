"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionGrid } from "@/components/ui/accordion-grid"
import { StarryBackground } from "@/components/ui/starry-background"
import { Universe } from "@/lib/universes/types";
import { useState, useEffect } from "react";

export default function AIMultiverse() {
  const [universes, setUniverses] = useState<Universe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/universes');
        if (!response.ok) throw new Error('Failed to fetch universes data');

        const data = await response.json();
        setUniverses(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <StarryBackground />
      <main className="container mx-auto p-6 relative">
        <h1 className="text-4xl font-bold mb-8 pt-24 text-center text-white">
          AI Multiverse
        </h1>
        <p className="text-lg leading-relaxed text-slate-200 mb-6">
          Welcome to the <span className="font-bold text-blue-400">Multiverse of AI tools</span>, where reality blurs and possibilities abound! Explore unique dimensions of artificial intelligence, where categorizing tools becomes an exciting journey of discovery.
        </p>
        <p className="text-lg leading-relaxed text-slate-200 mb-6">
          As you embark on this adventure, wander through galaxies of <span className="font-semibold text-blue-400">machine learning</span>, navigate nebulae of <span className="font-semibold text-blue-400">natural language processing</span>, and explore the vastness of <span className="font-semibold text-blue-400">computer vision</span>. Each universe reflects the infinite possibilities of AI, waiting to be harnessed.
        </p>
        <p className="text-lg leading-relaxed text-slate-200 mb-6">
          Whether you're a seasoned traveler or a newcomer, this multiverse inspires exploration. Browse the cosmos of AI tools and let your curiosity guide you to new wonders!
        </p>
        
        <AccordionGrid 
          columns={{
            default: 1,
            md: 2
          }}
          className="gap-6"
        >
          {universes.map((universe, index) => (
            <div key={universe.id} className="bg-slate-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                {universe.name}
              </h2>
              <p className="text-slate-300 mb-4">{universe.description}</p>
              
              <Accordion type="single" collapsible className="space-y-4">
                {universe.subcategories.map((subcategory, planetIndex) => (
                  <AccordionItem 
                    key={planetIndex} 
                    value={`planet-${index}-${planetIndex}`}
                    className="border-slate-700/30"
                  >
                    <AccordionTrigger className="text-white hover:text-blue-400">
                      {subcategory.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-slate-300">
                        <ul className="list-disc list-inside space-y-2">
                          {subcategory.tools.map(tool => (
                            <li key={tool.id}>
                              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                {tool.name} - {tool.description}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </AccordionGrid>
      </main>
    </>
  )
}
