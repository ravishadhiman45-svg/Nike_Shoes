# 🚀 Get Started - Premium Sneaker Showcase

## Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Visit: **http://localhost:3000**

---

## ✨ What You'll See

Your premium sneaker showcase is ready with:
- ✅ Hero section with massive typography
- ✅ Scroll-driven frame animation (120 placeholder frames)
- ✅ Premium features grid
- ✅ Horizontal product showcase
- ✅ Final CTA with dramatic effects
- ✅ Custom cursor
- ✅ Smooth scrolling
- ✅ Film grain overlay

---

## 📸 Next: Add Your Images

Currently using placeholder images. To add your own:

### Option 1: Quick Test (Use Existing Images)
```bash
./setup-images.sh
```

### Option 2: Add Your Frame Sequence
1. Place 60-120 sequential images in `public/Images/`
2. Name them: `Images_001.jpg`, `Images_002.jpg`, etc.
3. Refresh the browser

### Option 3: Extract from Video
```bash
ffmpeg -i video.mp4 -vf "fps=60/duration" public/Images/Images_%03d.jpg
```

---

## 🎨 Customize Your Site

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#00ff88',        // Your primary color
  'accent-blue': '#00d4ff', // Your secondary color
  'accent-purple': '#b400ff', // Your tertiary color
}
```

### Update Text
Edit files in `components/sections/`:
- `Hero.js` - Main headline
- `ScrollAnimation.js` - Scroll messages
- `Features.js` - Feature cards
- `HorizontalScroll.js` - Products
- `FinalCTA.js` - Final call-to-action

### Adjust Animations
Edit `components/SmoothScroll.js`:
```javascript
duration: 1.2, // Lower = faster, Higher = slower
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| **README.md** | Project overview |
| **INSTALLATION.md** | Detailed setup guide |
| **SETUP_GUIDE.md** | Image setup instructions |
| **FEATURES.md** | Complete feature list |
| **PROJECT_SUMMARY.md** | Technical architecture |
| **VISUAL_GUIDE.md** | Visual design guide |
| **GET_STARTED.md** | This file |

---

## 🛠️ Common Tasks

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Update Frame Count
Edit `components/sections/ScrollAnimation.js`:
```javascript
const FRAME_COUNT = 120; // Change to your count
```

### Disable Custom Cursor
In `app/page.js`, comment out:
```javascript
// <Cursor />
```

### Disable Film Grain
In `app/page.js`, comment out:
```javascript
// <Grain />
```

---

## 🎯 Project Structure

```
Nike_Shoes/
├── app/                    # Next.js pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Main page
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── sections/         # Page sections
│   └── ...               # Utilities
│
├── public/               # Static files
│   └── Images/          # Frame sequences
│
└── ...config files       # Configuration
```

---

## 🎬 Features Included

### ✅ Scroll Animation
- 120-frame sequence
- Canvas rendering
- 60 FPS performance
- Bidirectional playback

### ✅ Premium UI
- Glassmorphism
- Gradient effects
- Dynamic lighting
- Film grain overlay

### ✅ Smooth Interactions
- Lenis smooth scroll
- Framer Motion animations
- Magnetic buttons
- Custom cursor

### ✅ Responsive Design
- Mobile optimized
- Tablet layouts
- Desktop experience
- Touch-friendly

---

## 🚨 Troubleshooting

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Images Not Loading
1. Check file names: `Images_001.jpg`
2. Verify location: `public/Images/`
3. Check browser console

### Slow Performance
1. Compress images (80-85% quality)
2. Reduce frame count (60 is enough)
3. Check image file sizes

### Build Errors
```bash
rm -rf node_modules .next
npm install
npm run dev
```

---

## 🎓 Learn More

### Technologies:
- [Next.js](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP](https://greensock.com/gsap/)

### Inspiration:
- Apple Product Pages
- Nike SNKRS App
- Tesla Showcases
- Awwwards Sites

---

## 🎉 You're Ready!

Your premium sneaker showcase is set up and ready to customize. 

**Next Steps:**
1. ✅ Run `npm run dev`
2. ✅ Visit http://localhost:3000
3. ✅ Add your images
4. ✅ Customize colors and text
5. ✅ Deploy to production

---

## 💡 Pro Tips

1. **Images:** Use 60-120 frames for smooth animation
2. **Quality:** Compress images to 80-85% quality
3. **Format:** JPG is recommended over PNG
4. **Resolution:** 1920x1080 or higher
5. **Testing:** Test on mobile devices
6. **Performance:** Check Chrome DevTools Performance tab

---

## 🆘 Need Help?

1. Check documentation files
2. Review component comments
3. Check browser console
4. Open GitHub issue

---

**Happy Building! 🚀**

Made with ❤️ for premium sneaker experiences
