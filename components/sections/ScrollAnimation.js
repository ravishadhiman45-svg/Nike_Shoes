'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 76; // Adjust based on your actual frame count
const FRAME_PATH = '/Images/';

export default function ScrollAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Text animations
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
  const textOpacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const textOpacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Preload all images
  useEffect(() => {
    if (!mounted) return;
    
    const loadImages = async () => {
      const imagePromises = [];
      const loadedImages = [];

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, '0');
        img.src = `${FRAME_PATH}${frameNumber}.png`;
        
        const promise = new Promise((resolve, reject) => {
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Failed to load frame ${frameNumber}`);
            resolve(null);
          };
        });
        
        imagePromises.push(promise);
        loadedImages.push(img);
      }

      await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null));
      setImagesLoaded(true);
    };

    loadImages();
  }, [mounted]);

  // Render frame based on scroll
  useEffect(() => {
    if (!mounted || !imagesLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    const render = () => {
      const scrollProgress = scrollYProgress.get();
      const frameIndex = Math.min(
        Math.floor(scrollProgress * images.length),
        images.length - 1
      );

      if (frameIndex !== currentFrame && images[frameIndex]) {
        setCurrentFrame(frameIndex);
        
        // Set canvas size
        const scale = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        
        context.scale(scale, scale);
        
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate dimensions to cover the canvas while maintaining aspect ratio
        const img = images[frameIndex];
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }
        
        // Draw image
        context.drawImage(
          img,
          offsetX / scale,
          offsetY / scale,
          drawWidth / scale,
          drawHeight / scale
        );
      }
    };

    const unsubscribe = scrollYProgress.on('change', render);
    render(); // Initial render

    // Handle resize
    const handleResize = () => render();
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted, imagesLoaded, images, scrollYProgress, currentFrame]);

  if (!mounted) {
    return (
      <section className="relative h-[500vh] bg-bg-primary">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-primary">
          <div className="absolute inset-0 flex items-center justify-center bg-bg-primary">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-accent-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-text-secondary">Loading experience...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-gradient-to-b from-bg-elevated via-bg-primary to-bg-secondary">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-primary">
        {/* Dramatic Spotlight Effect Behind Shoe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-white rounded-full blur-[300px] opacity-[0.08] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-ice rounded-full blur-[200px] opacity-[0.12] pointer-events-none" />
        
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Loading State */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-primary">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-accent-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-text-secondary">Loading experience...</p>
            </div>
          </div>
        )}

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-secondary/30 pointer-events-none" />

        {/* Animated Text Overlays - WHITE TEXT WITH GLOW */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ opacity: textOpacity1 }}
            className="absolute text-center px-6"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              PRECISION IN<br />EVERY ANGLE
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: textOpacity2 }}
            className="absolute text-center px-6"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              PREMIUM<br />CONSTRUCTION
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: textOpacity3 }}
            className="absolute text-center px-6"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              BUILT FOR<br />SPEED
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: textOpacity4 }}
            className="absolute text-center px-6"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-accent-white to-accent-light bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              DESIGNED TO<br />STAND OUT
            </h2>
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-border-subtle rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-accent-white to-accent-light"
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
