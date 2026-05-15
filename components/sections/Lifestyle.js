'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Lifestyle() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const lifestyleScenes = [
    {
      title: 'URBAN EXPLORER',
      description: 'Navigate city streets with confidence. Premium comfort meets street-ready style.',
      tags: ['Streetwear', 'Daily Wear', 'Versatile'],
    },
    {
      title: 'ATHLETIC PERFORMANCE',
      description: 'Push your limits. Engineered for athletes who demand excellence.',
      tags: ['Training', 'Competition', 'Pro-Level'],
    },
    {
      title: 'LUXURY CASUAL',
      description: 'Elevate every moment. Where sophistication meets effortless cool.',
      tags: ['Premium', 'Fashion', 'Statement'],
    },
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-bg-primary">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[200px] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.p
            className="text-text-muted uppercase tracking-[0.3em] text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DESIGNED FOR LIFE
          </motion.p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
            <span className="block text-text-primary">YOUR</span>
            <span className="block bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">
              LIFESTYLE
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From the gym to the streets. One shoe, infinite possibilities.
          </p>
        </motion.div>

        {/* Lifestyle Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {lifestyleScenes.map((scene, index) => (
            <LifestyleCard key={index} scene={scene} index={index} />
          ))}
        </div>

        {/* Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-12 md:p-20 overflow-hidden"
        >
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-glow via-transparent to-accent-ice opacity-30" />
          
          <div className="relative z-10 text-center">
            <motion.h3
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              "THE FUTURE OF<br />STREETWEAR."
            </motion.h3>
            <motion.p
              className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Redefining what it means to move through the world with style and purpose.
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-accent-white opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-light opacity-5 rounded-full blur-3xl" />
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {[
            { label: 'All-Day Comfort', icon: '✓' },
            { label: 'Weather Resistant', icon: '✓' },
            { label: 'Easy Care', icon: '✓' },
            { label: 'Timeless Design', icon: '✓' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-2xl p-6 text-center hover:border-border-medium transition-all duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <div className="text-text-secondary text-sm">{feature.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LifestyleCard({ scene, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-8 h-full hover:border-border-medium transition-all duration-500 overflow-hidden">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-accent-ice opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon/Number */}
          <motion.div
            className="text-6xl font-bold text-text-primary opacity-10 mb-6"
            whileHover={{ scale: 1.2, opacity: 0.2 }}
          >
            0{index + 1}
          </motion.div>

          {/* Content */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-text-primary mb-4"
            whileHover={{ x: 5 }}
          >
            {scene.title}
          </motion.h3>
          <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
            {scene.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {scene.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                className="px-3 py-1 bg-bg-elevated border border-border-subtle rounded-full text-xs text-text-muted uppercase tracking-wider"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      </div>
    </motion.div>
  );
}
