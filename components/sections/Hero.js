'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.08), transparent 60%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-elevated">
      {/* Mouse-Follow Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-all duration-300 pointer-events-none"
      />
      
      {/* Cinematic Spotlight Behind Shoe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-white rounded-full blur-[250px] opacity-10 animate-float" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-15 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[200px] opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Overline */}
          <motion.p
            className="text-text-muted uppercase tracking-[0.4em] text-xs md:text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            INTRODUCING THE FUTURE
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[11rem] font-bold leading-[0.9] mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="block text-text-primary">PURE</span>
            <span className="block bg-gradient-to-r from-accent-white via-text-primary to-accent-light bg-clip-text text-transparent">
              PERFORMANCE
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Designed for movement. Engineered for excellence. Built for those who demand more.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-accent-white text-bg-primary font-bold text-base rounded-full overflow-hidden hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE NOW
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            className="group relative px-10 py-5 bg-transparent border-2 border-border-subtle text-text-primary font-bold text-base rounded-full overflow-hidden hover:border-accent-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">WATCH FILM</span>
            <motion.div
              className="absolute inset-0 bg-accent-glow"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-xs text-text-muted uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown className="text-xl text-accent-white" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-elevated to-transparent pointer-events-none" />
    </section>
  );
}
