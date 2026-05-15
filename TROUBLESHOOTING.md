# Troubleshooting Guide

## Common Issues and Solutions

### ✅ Fixed: PostCSS Configuration Error

**Error:**
```
Your custom PostCSS configuration must export a `plugins` key.
```

**Solution:**
Changed `postcss.config.js` from ES module to CommonJS format:
```javascript
// Use this format
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### ✅ Fixed: Hydration Mismatch Warning

**Error:**
```
Warning: Prop `style` did not match. Server: "..." Client: "..."
```

**Cause:**
Random positioning of particles calculated differently on server vs client.

**Solution:**
Added client-only rendering for components with random values:
```javascript
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

// Only render random elements after mounting
{mounted && [...Array(6)].map((_, i) => (
  // Random positioned elements
))}
```

---

## Other Common Issues

### Port Already in Use

**Error:**
```
Port 3000 is in use
```

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

---

### Images Not Loading

**Issue:**
Frame images not appearing in scroll animation.

**Checklist:**
1. ✅ Images are in `public/Images/` folder
2. ✅ Named correctly: `Images_001.jpg`, `Images_002.jpg`, etc.
3. ✅ Frame count matches in `ScrollAnimation.js`
4. ✅ Check browser console for 404 errors
5. ✅ Test direct URL: `http://localhost:3000/Images/Images_001.jpg`

**Solution:**
```bash
# Verify images exist
ls -la public/Images/ | head -10

# Check count
ls -1 public/Images/Images_*.jpg | wc -l
```

---

### Slow Performance

**Issue:**
Animations are laggy or choppy.

**Solutions:**

1. **Compress Images:**
```bash
# Using ImageMagick
mogrify -quality 85 -resize 1920x1080 public/Images/*.jpg
```

2. **Reduce Frame Count:**
Edit `components/sections/ScrollAnimation.js`:
```javascript
const FRAME_COUNT = 60; // Instead of 120
```

3. **Check Image Sizes:**
```bash
# Each image should be under 500KB
du -h public/Images/*.jpg | sort -h
```

4. **Enable Hardware Acceleration:**
- Chrome: `chrome://settings/system`
- Enable "Use hardware acceleration when available"

---

### Build Errors

**Error:**
```
Module not found or build fails
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install

# Try building again
npm run build
```

---

### Custom Cursor Not Showing

**Issue:**
Custom cursor not visible.

**Possible Causes:**
1. Browser doesn't support mix-blend-mode
2. Z-index conflict
3. Component not mounted

**Solution:**
Check browser console for errors. The cursor only shows on desktop browsers.

---

### Smooth Scrolling Not Working

**Issue:**
Lenis smooth scrolling not active.

**Solution:**
1. Check browser console for Lenis errors
2. Verify Lenis is installed: `npm list lenis`
3. Try disabling browser extensions
4. Clear browser cache

---

### Canvas Not Rendering

**Issue:**
Scroll animation section is blank.

**Checklist:**
1. ✅ Images are loaded (check Network tab)
2. ✅ Canvas element exists in DOM
3. ✅ No JavaScript errors in console
4. ✅ Browser supports Canvas 2D

**Debug:**
```javascript
// Add to ScrollAnimation.js
console.log('Images loaded:', images.length);
console.log('Current frame:', currentFrame);
```

---

### Framer Motion Warnings

**Warning:**
```
Warning: useLayoutEffect does nothing on the server
```

**Solution:**
This is normal and can be ignored. Framer Motion handles SSR automatically.

---

### TypeScript Errors (if using TS)

**Error:**
```
Cannot find module or type declarations
```

**Solution:**
```bash
# Install type definitions
npm install --save-dev @types/node @types/react @types/react-dom
```

---

### Deployment Issues

#### Vercel Deployment

**Issue:**
Build fails on Vercel.

**Solutions:**
1. Check build logs for specific errors
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility
4. Check environment variables

#### Image Optimization

**Issue:**
Images too large for deployment.

**Solution:**
```bash
# Compress all images before deploying
find public/Images -name "*.jpg" -exec mogrify -quality 85 {} \;
```

---

### Mobile Issues

#### Touch Scrolling

**Issue:**
Smooth scrolling doesn't work on mobile.

**Expected:**
Lenis is configured with `smoothTouch: false` for better mobile performance.

#### Performance on Mobile

**Issue:**
Animations are slow on mobile devices.

**Solutions:**
1. Reduce frame count for mobile
2. Disable custom cursor (auto-disabled)
3. Simplify particle effects
4. Use lower quality images for mobile

---

### Browser Compatibility

#### Safari Issues

**Issue:**
Some effects not working in Safari.

**Solutions:**
1. Check for `-webkit-` prefixes (Tailwind handles this)
2. Test backdrop-filter support
3. Verify mix-blend-mode support

#### Firefox Issues

**Issue:**
Smooth scrolling feels different.

**Expected:**
Firefox handles smooth scrolling differently. This is normal.

---

## Debug Mode

### Enable Verbose Logging

Add to `components/sections/ScrollAnimation.js`:
```javascript
useEffect(() => {
  console.log('Debug Info:', {
    imagesLoaded,
    imageCount: images.length,
    currentFrame,
    scrollProgress: scrollYProgress.get(),
  });
}, [currentFrame]);
```

### Check Performance

```javascript
// Add to any component
useEffect(() => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  const checkFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      console.log('FPS:', frameCount);
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(checkFPS);
  };
  
  checkFPS();
}, []);
```

---

## Getting Help

If you're still experiencing issues:

1. **Check Documentation:**
   - README.md
   - INSTALLATION.md
   - SETUP_GUIDE.md

2. **Browser Console:**
   - Open DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

3. **Verify Setup:**
   ```bash
   # Check Node version
   node --version  # Should be 18+
   
   # Check npm version
   npm --version
   
   # Verify dependencies
   npm list
   ```

4. **Clean Install:**
   ```bash
   rm -rf node_modules package-lock.json .next
   npm install
   npm run dev
   ```

5. **Test in Different Browser:**
   - Try Chrome, Firefox, Safari
   - Disable extensions
   - Use incognito/private mode

---

## Performance Checklist

- [ ] Images compressed (80-85% quality)
- [ ] Frame count optimized (60-120)
- [ ] Hardware acceleration enabled
- [ ] No console errors
- [ ] Network requests successful
- [ ] Canvas rendering at 60 FPS
- [ ] Smooth scrolling active
- [ ] Mobile tested

---

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Debugging
npm list             # List all dependencies
npm outdated         # Check for updates
npm audit            # Security audit

# Cleanup
rm -rf node_modules .next
npm install

# Image optimization
mogrify -quality 85 public/Images/*.jpg
```

---

**Last Updated:** May 2026

For additional help, check the other documentation files or open an issue on GitHub.
