'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    name: 'Air Velocity Pro',
    category: 'Performance',
    price: '$299',
    image: '/Images/020.png',
    color: 'from-accent-white to-accent-light',
  },
  {
    name: 'Quantum Stride',
    category: 'Lifestyle',
    price: '$249',
    image: '/Images/040.png',
    color: 'from-accent-light to-accent-glow',
  },
  {
    name: 'Apex Runner',
    category: 'Training',
    price: '$279',
    image: '/Images/060.png',
    color: 'from-accent-glow to-accent-ice',
  },
  {
    name: 'Elite Force',
    category: 'Basketball',
    price: '$329',
    image: '/Images/030.png',
    color: 'from-accent-ice to-accent-white',
  },
];

function ProductCard({ product, index }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[400px] md:w-[500px] group cursor-pointer"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative bg-bg-glass backdrop-blur-xl rounded-3xl overflow-hidden h-[600px] shadow-lg hover:shadow-xl hover:shadow-accent-glow/20 transition-shadow duration-500 border border-border-subtle hover:border-border-medium">
        {/* Image */}
        <div className="relative h-3/5 overflow-hidden bg-gradient-to-br from-bg-elevated to-bg-card">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}
          />
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            onError={(e) => {
              e.target.src = '/Images/001.png';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-2/5 p-8 flex flex-col justify-between bg-bg-elevated/90 backdrop-blur-sm border-t border-border-subtle">
          <div>
            <span className="text-sm text-text-muted uppercase tracking-wider">{product.category}</span>
            <h3 className="text-3xl font-bold mt-2 mb-3 text-text-primary">{product.name}</h3>
            <p className="text-text-secondary">
              Premium craftsmanship meets cutting-edge technology.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">{product.price}</span>
            <motion.button
              className="px-6 py-3 bg-accent-white text-bg-primary rounded-full font-semibold magnetic-btn hover:bg-accent-light shadow-md shadow-accent-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </div>
        </div>

        {/* Hover Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
      </div>
    </motion.div>
  );
}

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-bg-elevated to-bg-primary">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow rounded-full blur-[150px] opacity-15 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-ice rounded-full blur-[150px] opacity-15 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-6"
        >
          <motion.p
            className="text-text-muted uppercase tracking-[0.3em] text-sm mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DISCOVER MORE
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-text-primary">
            Explore the <span className="bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover our range of premium sneakers designed for every occasion.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <motion.div
            style={{ x }}
            className="flex gap-8 px-6 md:px-12"
          >
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
            {/* Duplicate for seamless loop effect */}
            {products.map((product, index) => (
              <ProductCard key={`dup-${index}`} product={product} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider">
            Scroll to explore more →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
