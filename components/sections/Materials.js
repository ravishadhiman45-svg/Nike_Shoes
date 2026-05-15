'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Materials() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const materials = [
    {
      name: 'PREMIUM LEATHER',
      description: 'Full-grain Italian leather, hand-selected for superior quality and durability.',
      properties: ['Water-resistant', 'Breathable', 'Ages beautifully'],
    },
    {
      name: 'ENGINEERED MESH',
      description: 'Advanced synthetic fibers woven for maximum flexibility and ventilation.',
      properties: ['Lightweight', 'Quick-dry', 'Adaptive fit'],
    },
    {
      name: 'CARBON COMPOSITE',
      description: 'Aerospace-grade carbon fiber for unmatched strength-to-weight ratio.',
      properties: ['Ultra-light', 'Rigid support', 'Energy efficient'],
    },
    {
      name: 'MEMORY FOAM',
      description: 'Temperature-sensitive cushioning that molds to your unique foot shape.',
      properties: ['Pressure relief', 'Custom comfort', 'Impact absorption'],
    },
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-bg-secondary">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(180,210,255,0.08),transparent_50%)]" />

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
            CRAFTED WITH PRECISION
          </motion.p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
            <span className="block text-text-primary">PREMIUM</span>
            <span className="block bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">
              MATERIALS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Only the finest materials make the cut. Sourced globally, tested rigorously.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <MaterialCard key={index} material={material} index={index} />
          ))}
        </div>

        {/* Material Composition Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 relative"
        >
          <div className="bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-12 overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              MATERIAL COMPOSITION
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { material: 'Leather', percentage: 35 },
                { material: 'Mesh', percentage: 30 },
                { material: 'Foam', percentage: 20 },
                { material: 'Carbon', percentage: 15 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="relative w-32 h-32 mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="12"
                        fill="none"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 352' }}
                        whileInView={{ strokeDasharray: `${(item.percentage / 100) * 352} 352` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#EAEAEA" />
                          <stop offset="100%" stopColor="#D9D9D9" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-text-primary">{item.percentage}%</span>
                    </div>
                  </motion.div>
                  <p className="text-text-secondary uppercase tracking-wider text-sm">{item.material}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MaterialCard({ material, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-8 hover:border-border-medium transition-all duration-500 overflow-hidden"
      whileHover={{ y: -5 }}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-accent-ice opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-text-primary mb-4"
          whileHover={{ x: 5 }}
        >
          {material.name}
        </motion.h3>
        <p className="text-text-secondary mb-6 leading-relaxed">
          {material.description}
        </p>
        
        <div className="space-y-2">
          {material.properties.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
              className="flex items-center gap-2 text-text-muted text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-white" />
              {prop}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
    </motion.div>
  );
}
