'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Performance() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const metrics = [
    {
      value: '2.5X',
      label: 'ENERGY RETURN',
      description: 'Compared to standard foam',
    },
    {
      value: '40%',
      label: 'LIGHTER',
      description: 'Than previous generation',
    },
    {
      value: '99.9%',
      label: 'PRECISION',
      description: 'Manufacturing accuracy',
    },
    {
      value: '24/7',
      label: 'COMFORT',
      description: 'All-day wearability',
    },
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-bg-primary to-bg-elevated">
      {/* Cinematic Spotlight Effect */}
      <motion.div
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-white rounded-full blur-[250px] opacity-10"
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-32"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-muted uppercase tracking-[0.3em] text-sm mb-6"
          >
            ENGINEERED EXCELLENCE
          </motion.p>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none mb-8">
            <span className="block text-text-primary">MAXIMUM</span>
            <span className="block bg-gradient-to-r from-accent-white via-text-primary to-accent-light bg-clip-text text-transparent">
              PERFORMANCE
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Designed for athletes. Built for champions. Tested beyond limits.
          </p>
        </motion.div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureShowcase
            title="EXPLOSIVE SPEED"
            description="Carbon fiber propulsion plate delivers instant energy transfer with every stride. Feel the difference from the first step."
            features={['Instant acceleration', 'Reduced ground contact', 'Forward momentum']}
            index={0}
          />
          <FeatureShowcase
            title="ADAPTIVE SUPPORT"
            description="Dynamic fit system adjusts to your foot's natural movement, providing stability exactly where you need it."
            features={['360° lockdown', 'Pressure distribution', 'Natural motion']}
            index={1}
          />
        </div>

        {/* Performance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block">
            <motion.h3
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
              whileHover={{ scale: 1.05 }}
            >
              "MINIMAL FORM.<br />MAXIMUM IMPACT."
            </motion.h3>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-glow to-accent-ice blur-3xl opacity-20 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-8 hover:border-border-medium transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10 }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 text-center">
        <motion.div
          className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-accent-white to-accent-light bg-clip-text text-transparent mb-3"
          whileHover={{ scale: 1.1 }}
        >
          {metric.value}
        </motion.div>
        <div className="text-lg font-bold text-text-primary mb-2 tracking-wider">
          {metric.label}
        </div>
        <div className="text-sm text-text-muted">
          {metric.description}
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent-white opacity-5 rounded-bl-full" />
    </motion.div>
  );
}

function FeatureShowcase({ title, description, features, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="group relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-10 hover:border-border-medium transition-all duration-500 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ice via-transparent to-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          whileHover={{ x: 10 }}
        >
          {title}
        </motion.h3>
        <p className="text-text-secondary mb-8 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-white to-accent-light" />
              <span className="text-text-secondary">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}
