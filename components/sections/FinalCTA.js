'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function FinalCTA() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.08), transparent 60%)`;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-6 bg-gradient-to-b from-bg-primary to-bg-secondary"
    >
      {/* Animated Background */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-all duration-300 pointer-events-none"
      />

      {/* Cinematic Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-white rounded-full blur-[300px] opacity-[0.08] animate-float" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-15 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[200px] opacity-10 animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Giant Sneaker Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="relative mb-16"
        >
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Dramatic Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-glow via-accent-white to-accent-ice blur-[120px] opacity-40 animate-glow-pulse" />
            
            {/* Sneaker Image */}
            <motion.img
              src="/Images/040.png"
              alt="Premium Sneaker"
              className="relative z-10 w-full h-auto drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              onError={(e) => {
                e.target.src = '/Images/001.png';
              }}
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-white rounded-full blur-sm"
                style={{
                  top: `${20 + (i * 10)}%`,
                  left: `${10 + (i * 10)}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="text-text-muted uppercase tracking-[0.3em] text-sm mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LIMITED EDITION RELEASE
          </motion.p>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none text-text-primary">
            <span className="block">STEP INTO</span>
            <span className="block bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">
              THE FUTURE
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience unparalleled comfort, style, and performance. Only 500 pairs available worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="group relative px-12 py-6 bg-accent-white text-bg-primary font-bold text-lg rounded-full overflow-hidden magnetic-btn shadow-lg shadow-accent-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                PRE-ORDER NOW
                <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-accent-light"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="px-12 py-6 bg-transparent backdrop-blur-xl border-2 border-border-subtle text-text-primary font-bold text-lg rounded-full magnetic-btn hover:border-accent-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>

          {/* Limited Edition Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 inline-block"
          >
            <div className="bg-bg-glass backdrop-blur-xl px-8 py-4 rounded-full border border-border-subtle">
              <p className="text-sm uppercase tracking-wider">
                <span className="text-accent-white font-bold">Limited Edition</span>
                <span className="text-text-muted mx-3">•</span>
                <span className="text-text-secondary">Only 500 Pairs Available</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 py-12 px-6 border-t border-border-subtle"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-text-primary">PREMIUM SNEAKERS</h3>
            <p className="text-text-secondary text-sm">Engineered for Movement. Crafted for Excellence.</p>
          </div>

          <div className="flex gap-8">
            {['Instagram', 'Twitter', 'Facebook'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-text-secondary hover:text-accent-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>

          <p className="text-text-muted text-sm">
            © 2026 Premium Sneakers. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
