'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Innovation() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const innovations = [
    {
      title: 'ADAPTIVE CUSHIONING',
      description: 'Revolutionary foam technology that responds to your every step, providing unmatched comfort and energy return.',
      stat: '40%',
      statLabel: 'More Energy Return',
    },
    {
      title: 'BREATHABLE MESH',
      description: 'Engineered knit upper with strategic ventilation zones keeps your feet cool during intense activity.',
      stat: '3X',
      statLabel: 'Better Airflow',
    },
    {
      title: 'CARBON FIBER PLATE',
      description: 'Lightweight carbon fiber propulsion system delivers explosive speed and forward momentum.',
      stat: '15%',
      statLabel: 'Faster Response',
    },
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-bg-primary via-bg-elevated to-bg-primary">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[200px] opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-20" />
      
      {/* Floating Particles */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent-white rounded-full blur-sm"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]), opacity }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent-white rounded-full blur-sm"
      />

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
            BREAKTHROUGH TECHNOLOGY
          </motion.p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
            <span className="block text-text-primary">PURE</span>
            <span className="block bg-gradient-to-r from-accent-white via-text-primary to-accent-light bg-clip-text text-transparent">
              INNOVATION
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every element engineered to perfection. Science meets design in perfect harmony.
          </p>
        </motion.div>

        {/* Innovation Cards */}
        <div className="space-y-8">
          {innovations.map((item, index) => (
            <InnovationCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24"
        >
          <motion.button
            className="group relative px-12 py-6 bg-transparent border-2 border-border-subtle text-text-primary font-bold text-lg rounded-full overflow-hidden hover:border-accent-white transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              EXPLORE TECHNOLOGY
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-glow to-accent-ice"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function InnovationCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-8 md:p-12 hover:border-border-medium transition-all duration-500 overflow-hidden">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-glow via-transparent to-accent-ice opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content Grid */}
        <div className="relative z-10 grid md:grid-cols-[1fr,auto] gap-8 items-center">
          <div>
            <motion.h3
              className="text-3xl md:text-5xl font-bold mb-4 text-text-primary"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Stat Display */}
          <motion.div
            className="text-center md:text-right"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-accent-white to-accent-light bg-clip-text text-transparent mb-2">
              {item.stat}
            </div>
            <div className="text-sm text-text-muted uppercase tracking-wider">
              {item.statLabel}
            </div>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-white via-accent-glow to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
}
