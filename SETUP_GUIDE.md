# Setup Guide for Premium Sneaker Showcase

## Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Sneaker Images

You need sequential frame images for the scroll animation. Place them in:
```
public/Images/Images_001.jpg
public/Images/Images_002.jpg
public/Images/Images_003.jpg
...
public/Images/Images_120.jpg
```

#### Option A: Use Your Own Images
1. Create or obtain 60-120 sequential images of a sneaker rotating
2. Name them `Images_001.jpg` through `Images_XXX.jpg`
3. Place them in `public/Images/`

#### Option B: Use Existing Sneaker Images (Quick Test)
If you have sneaker images in your current project:
```bash
# Copy existing images to the new location
cp src/assets/images/big-shoe*.png public/Images/
```

Then rename them sequentially or use the same image multiple times for testing:
```bash
# Quick test: duplicate one image
for i in {1..120}; do
  cp public/Images/your-sneaker.jpg public/Images/Images_$(printf "%03d" $i).jpg
done
```

#### Option C: Extract from Video
If you have a video of a rotating sneaker:
```bash
ffmpeg -i sneaker-video.mp4 -vf "fps=30" public/Images/Images_%03d.jpg
```

### Step 3: Update Frame Count
Edit `components/sections/ScrollAnimation.js` if you have a different number of frames:
```javascript
const FRAME_COUNT = 120; // Change to your actual frame count
```

### Step 4: Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## Customization Guide

### 1. Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#00ff88',        // Your primary color
  'accent-blue': '#00d4ff', // Your secondary color
  'accent-purple': '#b400ff', // Your tertiary color
}
```

### 2. Update Text Content

**Hero Section** (`components/sections/Hero.js`):
```javascript
<h1>YOUR HEADLINE</h1>
<p>Your tagline here</p>
```

**Scroll Animation Overlays** (`components/sections/ScrollAnimation.js`):
```javascript
<h2>Your first message</h2>
<h2>Your second message</h2>
// etc.
```

**Features** (`components/sections/Features.js`):
Update the `features` array with your content.

**Products** (`components/sections/HorizontalScroll.js`):
Update the `products` array with your sneaker models.

### 3. Adjust Animation Speed

**Scroll Speed** (`components/SmoothScroll.js`):
```javascript
const lenis = new Lenis({
  duration: 1.2, // Lower = faster, Higher = slower
});
```

**Scroll Animation Height** (`components/sections/ScrollAnimation.js`):
```javascript
// Change h-[500vh] to adjust scroll distance
<section className="relative h-[500vh]">
```

### 4. Disable Custom Cursor (Optional)
In `app/page.js`, comment out:
```javascript
// <Cursor />
```

### 5. Disable Film Grain (Optional)
In `app/page.js`, comment out:
```javascript
// <Grain />
```

## Image Requirements

### Optimal Specifications:
- **Format**: JPG (recommended) or PNG
- **Resolution**: 1920x1080 or higher
- **Quality**: 80-85% (balance between quality and file size)
- **Frame Count**: 60-120 frames
- **File Size**: Keep each image under 500KB for best performance

### Creating Frame Sequences:

#### From 3D Software (Blender, Cinema 4D):
1. Set up 360° camera rotation around sneaker
2. Render 60-120 frames
3. Export as sequential JPGs
4. Name: `Images_001.jpg`, `Images_002.jpg`, etc.

#### From Video:
```bash
# Extract 60 frames
ffmpeg -i video.mp4 -vf "fps=60/duration" public/Images/Images_%03d.jpg

# Extract 120 frames
ffmpeg -i video.mp4 -vf "fps=120/duration" public/Images/Images_%03d.jpg
```

#### From Photography:
1. Use a turntable
2. Take photo every 3-6 degrees (60-120 photos total)
3. Process in Lightroom/Photoshop
4. Export and rename sequentially

## Performance Optimization

### 1. Image Optimization
Compress images before adding:
```bash
# Using ImageMagick
mogrify -quality 85 -resize 1920x1080 public/Images/*.jpg

# Using online tools
# - TinyPNG.com
# - Squoosh.app
```

### 2. Lazy Loading
The app automatically preloads the first 20 frames. Adjust in `app/page.js`:
```javascript
for (let i = 1; i <= Math.min(imageCount, 20); i++) {
  // Change 20 to preload more/fewer frames
}
```

### 3. Canvas Optimization
Already optimized with:
- GPU acceleration
- RequestAnimationFrame
- Device pixel ratio scaling
- Efficient rendering

## Deployment

### Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Upload 'out' folder to Netlify
```

### Custom Server:
```bash
npm run build
npm start
```

## Troubleshooting

### Images Not Loading
1. Check file names match exactly: `Images_001.jpg` (not `image_1.jpg`)
2. Verify images are in `public/Images/` folder
3. Check browser console for 404 errors
4. Try with absolute path in browser: `http://localhost:3000/Images/Images_001.jpg`

### Animation Not Smooth
1. Reduce image file sizes (compress to 80-85% quality)
2. Reduce frame count (60 frames is usually sufficient)
3. Check browser performance tab for bottlenecks
4. Ensure hardware acceleration is enabled in browser

### Scroll Too Fast/Slow
Adjust in `components/SmoothScroll.js`:
```javascript
duration: 1.2, // Increase for slower, decrease for faster
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

## Browser Support

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## Need Help?

1. Check the main README.md
2. Review component comments
3. Open an issue on GitHub
4. Check browser console for errors

---

**Happy Building! 🚀**
