'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Testimonials() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "These shoes changed everything. The comfort is unmatched, and the style is absolutely next-level.",
      author: "Marcus Chen",
      role: "Professional Athlete",
      rating: 5,
    },
    {
      quote: "I've never experienced this level of performance. Every step feels effortless and powerful.",
      author: "Sarah Williams",
      role: "Marathon Runner",
      rating: 5,
    },
    {
      quote: "The perfect blend of luxury and functionality. These are my go-to shoes for everything.",
      author: "James Rodriguez",
      role: "Fashion Designer",
      rating: 5,
    },
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-bg-elevated">
      {/* Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-white rounded-full blur-[250px] opacity-[0.05]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[200px] opacity-10" />

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
            TRUSTED BY CHAMPIONS
          </motion.p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
            <span className="block text-text-primary">WHAT</span>
            <span className="block bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">
              THEY SAY
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who've elevated their game.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-glow to-accent-ice opacity-20" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: 'Happy Customers' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%', label: 'Would Recommend' },
              { value: '100+', label: 'Awards Won' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-accent-white to-accent-light bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }) {
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
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                className="text-accent-white text-xl"
              >
                ★
              </motion.span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg text-text-secondary mb-8 leading-relaxed flex-grow">
            "{testimonial.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-glow to-accent-ice flex items-center justify-center text-text-primary font-bold">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="text-text-primary font-bold">
                {testimonial.author}
              </div>
              <div className="text-text-muted text-sm">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Mark Decoration */}
        <div className="absolute top-6 right-6 text-6xl text-accent-white opacity-5 font-serif">
          "
        </div>
      </div>
    </motion.div>
  );
}
