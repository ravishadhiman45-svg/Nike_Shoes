'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Gallery() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const galleryItems = [
    {
      title: 'DETAIL SHOT',
      description: 'Premium stitching and materials',
      size: 'large',
    },
    {
      title: 'SIDE PROFILE',
      description: 'Aerodynamic silhouette',
      size: 'medium',
    },
    {
      title: 'SOLE TECHNOLOGY',
      description: 'Advanced grip pattern',
      size: 'medium',
    },
    {
      title: 'LIFESTYLE',
      description: 'Street-ready style',
      size: 'large',
    },
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-bg-secondary to-bg-primary">
      {/* Ambient Effects */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[200px] opacity-20"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-20"
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
            VISUAL SHOWCASE
          </motion.p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
            <span className="block text-text-primary">EVERY</span>
            <span className="block bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">
              ANGLE
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore the intricate details that make this shoe extraordinary.
          </p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            "MINIMAL FORM. MAXIMUM IMPACT."
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every detail meticulously crafted. Every angle tells a story of innovation and design excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isLarge = item.size === 'large';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${isLarge ? 'md:col-span-2' : ''}`}
    >
      <div className={`relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl overflow-hidden hover:border-border-medium transition-all duration-500 ${isLarge ? 'h-[500px]' : 'h-[400px]'}`}>
        {/* Placeholder for Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-card flex items-center justify-center">
          {/* Shoe Silhouette Placeholder */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="text-8xl md:text-9xl opacity-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.5 }}
            >
              👟
            </motion.div>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-glow via-transparent to-accent-ice opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-text-primary mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-text-secondary"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {item.description}
            </motion.p>
          </div>
        </div>

        {/* Corner Badge */}
        <div className="absolute top-6 right-6 px-4 py-2 bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-full text-xs text-text-muted uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          View Detail
        </div>
      </div>
    </motion.div>
  );
}
