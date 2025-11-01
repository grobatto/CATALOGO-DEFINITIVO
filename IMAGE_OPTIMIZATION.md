# 🖼️ Image Optimization Guide

## Overview

This project includes an automated image optimization system to improve performance and reduce page load times. The system:

- ✅ Converts images to WebP format (typically 70-80% smaller)
- ✅ Compresses images without visible quality loss
- ✅ Backs up original images automatically
- ✅ Maintains directory structure

## Quick Start

### 1. Install Dependencies

```bash
npm install sharp --save-dev
```

### 2. Run Optimization

```bash
npm run optimize-images
```

This will:
1. Scan all images in `public/images/`
2. Create backups in `public/images-original-backup/`
3. Generate optimized WebP versions
4. Compress original formats
5. Show savings report

## Manual Image Optimization

### For the 20MB gallery_02.png file:

```bash
# Convert to WebP manually
npx sharp-cli --input public/images/gallery_02.png --output public/images/gallery_02.webp --webp --quality 80

# Or use online tools:
# - https://squoosh.app/ (Google's tool)
# - https://tinypng.com/
# - https://imagecompressor.com/
```

### Best Practices

1. **Before uploading images:**
   - Resize to appropriate dimensions (max 2000px width for large images)
   - Use WebP format when possible
   - Compress with 80-85% quality

2. **Image dimensions by use case:**
   - Product cards: 800x800px
   - Product detail: 1200x1200px
   - Hero images: 1920x1080px
   - Thumbnails: 300x300px

3. **File size targets:**
   - Product images: < 200KB each
   - Hero images: < 500KB each
   - Thumbnails: < 50KB each

## Using Optimized Images in Code

The `ImageWithFallback` component automatically handles lazy loading:

```jsx
import ImageWithFallback from './components/ImageWithFallback'

<ImageWithFallback
  src="/images/product.webp"
  alt="Product name"
  className="w-full h-full object-contain"
  loading="lazy" // or "eager" for above-the-fold images
/>
```

## WebP Browser Support

WebP is supported by:
- ✅ Chrome (all versions)
- ✅ Firefox 65+
- ✅ Safari 14+
- ✅ Edge (all versions)

For older browsers, keep original JPG/PNG as fallback.

## Performance Impact

### Before Optimization:
- gallery_02.png: **20MB** ⚠️
- Total images size: ~150MB (estimated)
- First load time: 10-30 seconds

### After Optimization:
- gallery_02.webp: **~2-4MB** ✅
- Total images size: ~30MB (estimated)
- First load time: 2-5 seconds

**Expected improvements:**
- 70-80% reduction in image file sizes
- 60-70% faster page load times
- Better mobile experience
- Lower bandwidth costs

## Troubleshooting

### "Cannot find module 'sharp'" error:

```bash
npm install sharp --save-dev
```

### Script doesn't run:

Make sure you have Node.js 14+ installed:

```bash
node --version
```

### Images look blurry:

Increase quality in `scripts/optimize-images.js`:

```javascript
const CONFIG = {
  webpQuality: 85,  // Increase from 80
  jpegQuality: 90,  // Increase from 85
}
```

## Restore Original Images

If you need to restore original images:

```bash
# Originals are in public/images-original-backup/
cp -r public/images-original-backup/* public/images/
```

## Automated Optimization (CI/CD)

Add to your build pipeline:

```json
{
  "scripts": {
    "prebuild": "npm run optimize-images",
    "build": "vite build"
  }
}
```

## Additional Resources

- [WebP Documentation](https://developers.google.com/speed/webp)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Web Performance Best Practices](https://web.dev/fast/)
