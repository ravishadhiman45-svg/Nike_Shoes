'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Innovation from '@/components/sections/Innovation';
import Materials from '@/components/sections/Materials';
import Performance from '@/components/sections/Performance';
import Lifestyle from '@/components/sections/Lifestyle';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Features from '@/components/sections/Features';
import HorizontalScroll from '@/components/sections/HorizontalScroll';
import FinalCTA from '@/components/sections/FinalCTA';
import Grain from '@/components/Grain';

// Dynamically import components with no SSR to prevent hydration errors
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false });
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const ScrollAnimation = dynamic(() => import('@/components/sections/ScrollAnimation'), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Preload critical assets
    const preloadImages = () => {
      const imageCount = 76; // Adjust based on your frame count
      for (let i = 1; i <= Math.min(imageCount, 20); i++) {
        const img = new Image();
        img.src = `/Images/${String(i).padStart(3, '0')}.png`;
      }
    };
    
    preloadImages();
  }, []);

  return (
    <SmoothScroll>
      <Grain />
      <Cursor />
      <main className="relative">
        <Hero />
        <ScrollAnimation />
        <Innovation />
        <Materials />
        <Performance />
        <Features />
        <HorizontalScroll />
        <Lifestyle />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
    </SmoothScroll>
  );
}
