# Premium Sneaker Showcase 🚀

An ultra-premium cinematic sneaker showcase website built with Next.js, React, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.
 
## ✨ Features

- **Scroll-Driven Frame Animation**: Apple-style product showcase with smooth frame-by-frame sneaker rotation
- **Cinematic UI**: Premium dark theme with glassmorphism, gradients, and dynamic lighting
- **Smooth Scrolling**: Buttery smooth scroll experience powered by Lenis
- **Advanced Animations**: Framer Motion + GSAP for world-class motion design
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Performance Optimized**: 60 FPS animations with GPU acceleration
- **Interactive Elements**: Magnetic buttons, custom cursor, hover effects
- **Modern Stack**: Next.js 14 App Router, React 18, Tailwind CSS 3

## 🎬 Sections

1. **Hero Section**: Fullscreen with massive typography and animated text reveal
2. **Scroll Animation**: Sticky canvas with frame-by-frame shoe rotation (500vh scroll)
3. **Features**: Bento grid layout with animated cards and stats
4. **Horizontal Scroll**: Product showcase with parallax motion
5. **Final CTA**: Giant sneaker with dramatic lighting and premium buttons

## 📁 Project Structure

```
Nike_Shoes/
├── app/
│   ├── layout.js          # Root layout with fonts
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.js        # Hero section
│   │   ├── ScrollAnimation.js  # Frame-by-frame animation
│   │   ├── Features.js    # Features bento grid
│   │   ├── HorizontalScroll.js # Product carousel
│   │   └── FinalCTA.js    # Final call-to-action
│   ├── SmoothScroll.js    # Lenis wrapper
│   ├── Cursor.js          # Custom cursor
│   └── Grain.js           # Film grain overlay
├── public/
│   └── Images/            # Frame sequence images
│       ├── Images_001.jpg
│       ├── Images_002.jpg
│       └── ... (up to Images_120.jpg)
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your sneaker frame images:**
   - Create a folder: `public/Images/`
   - Add sequential images named: `Images_001.jpg`, `Images_002.jpg`, etc.
   - Recommended: 60-120 frames for smooth animation
   - Image format: JPG or PNG
   - Recommended resolution: 1920x1080 or higher

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Frame Count
Edit `FRAME_COUNT` in `components/sections/ScrollAnimation.js`:
```javascript
const FRAME_COUNT = 120; // Change to your frame count
```

### Colors
Edit theme colors in `tailwind.config.js`:
```javascript
colors: {
  accent: '#00ff88',      // Primary accent
  'accent-blue': '#00d4ff',  // Secondary accent
  'accent-purple': '#b400ff', // Tertiary accent
}
```

### Text Content
Edit text in each section component:
- Hero: `components/sections/Hero.js`
- Scroll overlays: `components/sections/ScrollAnimation.js`
- Features: `components/sections/Features.js`
- Products: `components/sections/HorizontalScroll.js`
- CTA: `components/sections/FinalCTA.js`

## 🎯 Performance Tips

1. **Image Optimization**: Use optimized JPG images (quality 80-85)
2. **Frame Count**: 60-120 frames is optimal (more = smoother but larger)
3. **Preloading**: First 20 frames are preloaded automatically
4. **Canvas Rendering**: Uses GPU-accelerated canvas for smooth playback
5. **Lazy Loading**: Images load progressively as needed

## 📱 Responsive Design

- **Desktop**: Full cinematic experience with all effects
- **Tablet**: Optimized layouts with maintained animations
- **Mobile**: Touch-optimized with adjusted frame counts

## 🛠️ Technologies

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS 3**: Utility-first CSS
- **Framer Motion**: Animation library
- **GSAP**: Advanced animations
- **Lenis**: Smooth scrolling
- **React Icons**: Icon library

## 📄 License

This project is open source and available under the MIT License.

## 🎥 Creating Frame Sequences

### Option 1: From Video
Use FFmpeg to extract frames from a video:
```bash
ffmpeg -i sneaker-rotation.mp4 -vf "fps=30" public/Images/Images_%03d.jpg
```

### Option 2: 3D Rendering
- Use Blender, Cinema 4D, or similar
- Render 360° rotation in 60-120 frames
- Export as sequential images

### Option 3: Photography
- Use a turntable
- Take photos every 3-6 degrees
- Process and name sequentially

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for premium sneaker experiences**
