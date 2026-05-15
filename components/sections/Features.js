'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiLightningBolt, HiShieldCheck, HiSparkles, HiTrendingUp } from 'react-icons/hi';

const features = [
  {
    icon: HiLightningBolt,
    title: 'Lightning Fast',
    description: 'Engineered with cutting-edge materials for maximum speed and agility.',
    gradient: 'from-accent-white to-accent-light',
  },
  {
    icon: HiShieldCheck,
    title: 'Premium Protection',
    description: 'Advanced cushioning technology that adapts to your every move.',
    gradient: 'from-accent-light to-accent-glow',
  },
  {
    icon: HiSparkles,
    title: 'Luxury Design',
    description: 'Meticulously crafted with premium materials and attention to detail.',
    gradient: 'from-accent-glow to-accent-ice',
  },
  {
    icon: HiTrendingUp,
    title: 'Performance Boost',
    description: 'Scientifically proven to enhance your athletic performance.',
    gradient: 'from-accent-ice to-accent-white',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-3xl p-8 hover:border-border-medium hover:shadow-xl hover:shadow-accent-glow/10 transition-all duration-500 overflow-hidden"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Gradient Glow on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
      
      {/* Icon */}
      <motion.div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 relative z-10`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="text-3xl text-bg-primary" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 relative z-10 text-text-primary">{feature.title}</h3>
      <p className="text-text-secondary relative z-10">{feature.description}</p>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent-white/20 transition-all duration-500" />
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-bg-secondary">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-glow rounded-full blur-[150px] opacity-15" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-ice rounded-full blur-[150px] opacity-15" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-white rounded-full blur-[150px] opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-text-muted uppercase tracking-[0.3em] text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ENGINEERED EXCELLENCE
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-text-primary">
            <span className="block bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent">Next-Level</span>
            <span className="block">Performance</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Every detail engineered to perfection. Experience the future of footwear.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: '99%', label: 'Customer Satisfaction' },
            { value: '50K+', label: 'Happy Athletes' },
            { value: '24/7', label: 'Premium Support' },
            { value: '100+', label: 'Award Winning' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3
                className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-accent-white to-accent-light bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-text-secondary text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
