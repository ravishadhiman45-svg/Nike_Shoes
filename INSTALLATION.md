# Installation & Quick Start Guide

## 🎯 Quick Start (2 Minutes)

### 1. Install Dependencies
```bash
npm install
```

This will install:
- Next.js 14 (React framework)
- Framer Motion (animations)
- GSAP (scroll animations)
- Lenis (smooth scrolling)
- Tailwind CSS (styling)
- React Icons (icons)

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

You should see the premium sneaker showcase with placeholder images!

---

## 📸 Adding Your Own Images

The website uses sequential frame images for the scroll animation. Currently, it's using placeholder images for testing.

### Quick Method: Replace Placeholders

1. **Prepare your images:**
   - 60-120 sequential images of a sneaker rotating
   - Format: JPG (recommended) or PNG
   - Resolution: 1920x1080 or higher
   - Named: `Images_001.jpg`, `Images_002.jpg`, etc.

2. **Replace the placeholders:**
   ```bash
   # Remove placeholder images
   rm public/Images/*.jpg
   
   # Add your images to public/Images/
   # Make sure they're named: Images_001.jpg, Images_002.jpg, etc.
   ```

3. **Update frame count** (if different from 120):
   Edit `components/sections/ScrollAnimation.js`:
   ```javascript
   const FRAME_COUNT = 120; // Change to your frame count
   ```

### Creating Frame Sequences

#### Option A: From Video
```bash
# Extract 60 frames
ffmpeg -i sneaker-video.mp4 -vf "fps=60/duration" public/Images/Images_%03d.jpg

# Extract 120 frames  
ffmpeg -i sneaker-video.mp4 -vf "fps=120/duration" public/Images/Images_%03d.jpg
```

#### Option B: From 3D Software
1. Set up 360° camera rotation
2. Render 60-120 frames
3. Export as JPG sequence
4. Name: `Images_001.jpg`, `Images_002.jpg`, etc.

#### Option C: Photography
1. Use turntable
2. Take photo every 3-6 degrees
3. Process and export sequentially

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#00ff88',        // Primary (green)
  'accent-blue': '#00d4ff', // Secondary (blue)
  'accent-purple': '#b400ff', // Tertiary (purple)
}
```

### Update Text Content

**Hero Section:**
```javascript
// components/sections/Hero.js
<h1>YOUR HEADLINE</h1>
<p>Your tagline</p>
```

**Scroll Animation Messages:**
```javascript
// components/sections/ScrollAnimation.js
<h2>Your message 1</h2>
<h2>Your message 2</h2>
// etc.
```

### Adjust Scroll Speed
```javascript
// components/SmoothScroll.js
duration: 1.2, // Lower = faster, Higher = slower
```

---

## 🚀 Build for Production

### Build
```bash
npm run build
```

### Test Production Build Locally
```bash
npm start
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

---

## 📁 Project Structure

```
Nike_Shoes/
├── app/
│   ├── layout.js              # Root layout
│   ├── page.js                # Main page
│   └── globals.css            # Global styles
│
├── components/
│   ├── sections/
│   │   ├── Hero.js            # Hero section
│   │   ├── ScrollAnimation.js # Frame animation
│   │   ├── Features.js        # Features grid
│   │   ├── HorizontalScroll.js # Product carousel
│   │   └── FinalCTA.js        # Final CTA
│   │
│   ├── SmoothScroll.js        # Lenis wrapper
│   ├── Cursor.js              # Custom cursor
│   ├── Grain.js               # Film grain
│   └── MagneticButton.js      # Magnetic button
│
├── public/
│   └── Images/                # Frame sequences
│       ├── Images_001.jpg
│       ├── Images_002.jpg
│       └── ...
│
├── tailwind.config.js         # Tailwind config
├── next.config.js             # Next.js config
└── package.json               # Dependencies
```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Images Not Loading
1. Check file names: `Images_001.jpg` (not `image_1.jpg`)
2. Verify location: `public/Images/`
3. Check browser console for errors
4. Test direct URL: `http://localhost:3000/Images/Images_001.jpg`

### Slow Performance
1. Compress images (80-85% quality)
2. Reduce frame count (60 is usually enough)
3. Check image file sizes (keep under 500KB each)
4. Enable hardware acceleration in browser

### Build Errors
```bash
# Clear cache
rm -rf node_modules .next

# Reinstall
npm install

# Try again
npm run dev
```

---

## 📦 Dependencies Explained

| Package | Purpose |
|---------|---------|
| next | React framework with SSR |
| react | UI library |
| framer-motion | Smooth animations |
| gsap | Advanced scroll animations |
| lenis | Buttery smooth scrolling |
| tailwindcss | Utility-first CSS |
| react-icons | Icon library |

---

## 🎯 Performance Tips

1. **Optimize Images:**
   ```bash
   # Using ImageMagick
   mogrify -quality 85 -resize 1920x1080 public/Images/*.jpg
   ```

2. **Reduce Frame Count:**
   - 60 frames = smooth enough for most cases
   - 120 frames = ultra-smooth but larger

3. **Enable Caching:**
   - Images are automatically cached by browser
   - Next.js optimizes static assets

4. **Use CDN:**
   - Deploy to Vercel for automatic CDN
   - Or use Cloudflare for custom hosting

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |

---

## 📚 Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Framer Motion:** https://www.framer.com/motion/
- **GSAP:** https://greensock.com/gsap/
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 🆘 Need Help?

1. Check `SETUP_GUIDE.md` for detailed instructions
2. Review `README.md` for feature overview
3. Check browser console for errors
4. Open an issue on GitHub

---

**Happy Building! 🚀**

Made with ❤️ for premium sneaker experiences
