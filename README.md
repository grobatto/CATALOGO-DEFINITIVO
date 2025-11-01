# 🎨 Barrios Amethysts - Luxury Catalog

**Premium Uruguayan Amethyst & Agate Showcase**

A stunning, production-ready React application showcasing luxury minerals from Uruguay's Catalán region.

## 📋 Overview

Barrios Amethysts is a family-owned business since 1992, specializing in mining and exporting premium amethysts and agates. This digital catalog presents their exclusive collection with an elegant, minimalist design inspired by luxury brands like Apple.

**Live Site**: [barriosamethysts.com](https://barriosamethysts.com)

---

## 🎯 Key Features

✨ **Luxury Design**
- Minimalist Apple-inspired aesthetic
- Black/white/grey premium color palette
- IBM Plex Sans/Serif typography
- Smooth animations and transitions

🖼️ **Product Showcase**
- Multiple curated collections
- High-quality product images
- Responsive gallery with lightbox
- Lazy-loaded images for performance

📱 **Responsive Design**
- Mobile-first approach
- Tablet optimization (768px)
- Desktop expanded view (1920px)
- Touch-friendly navigation

🔍 **SEO Optimized**
- Meta tags and Open Graph
- Schema.org structured data
- Sitemap and robots.txt
- Canonical URLs

⚡ **Performance**
- 67.67 KB bundle size (gzipped)
- Production build optimization
- Code splitting enabled
- Browser caching configured

🔐 **Security**
- HTTPS with Let's Encrypt
- Security headers configured
- DDoS protection via CDN
- Automatic daily backups

---

## 🛠️ Technology Stack

### Frontend
- **React** 18.x - UI framework
- **Vite** 5.x - Build tool and dev server
- **Tailwind CSS** 4.x - Utility-first styling
- **Lucide React** - Premium icon library

### Fonts
- **IBM Plex Sans** - Body text
- **IBM Plex Serif** - Headings

### Deployment
- **Netlify** - Hosting and CDN
- **GitHub** - Version control
- **Let's Encrypt** - SSL/TLS certificates

---

## 📁 Project Structure

```
barrios-react/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg          # Hero background (full-width)
│   │   ├── main.png             # Product showcase
│   │   ├── gallery_02.png       # Heritage gallery
│   │   ├── gallery_03.jpg       # Heritage gallery
│   │   └── [product images...]  # Collections
│   ├── robots.txt               # Search engine directives
│   ├── sitemap.xml              # SEO sitemap
│   └── favicon.svg              # Brand favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation (black background)
│   │   ├── Hero.jsx             # Hero section with pillar features
│   │   ├── Heritage.jsx         # Family story & heritage
│   │   ├── Gallery.jsx          # Product collections
│   │   ├── ProductGrid.jsx      # Product gallery grid
│   │   ├── Contact.jsx          # Contact form (2-column layout)
│   │   ├── Footer.jsx           # Footer with branding
│   │   └── ImageWithFallback.jsx # Image error handling
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & fonts
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration (optimized)
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── netlify.toml                # Netlify deployment config
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/barrios-amethysts.git
   cd barrios-amethysts/barrios-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:8080` in your browser.

### Development Commands

```bash
# Start development server with HMR
npm run dev

# Create production build
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
```

---

## 🎨 Design System - Apple-Inspired Tokens

### Philosophy
Inspired by Apple's Human Interface Guidelines, this design system prioritizes clarity, simplicity, and premium feel through precise typography, minimal color palette, and subtle micro-interactions.

### Color Palette

#### Apple Neutrals
- **Pure Black**: `#000000` - Pure backgrounds, premium feel
- **Gray 950**: `#1D1D1F` - Primary text, headers
- **Gray 900**: `#424245` - Secondary elements
- **Gray 800**: `#515154` - Tertiary elements
- **Gray 700**: `#6F6F77` - Body text
- **Gray 600**: `#86868B` - Secondary text
- **Gray 500**: `#A1A1A6` - Disabled states
- **Gray 400**: `#D2D2D7` - Borders (hairline-light)
- **Gray 300**: `#E5E5EA` - Subtle borders
- **Gray 200**: `#F5F5F7` - Light backgrounds
- **Gray 100**: `#FAFAFA` - Ultra-light backgrounds
- **White**: `#FFFFFF` - Pure white

#### Accent Colors
- **Hairline Dark**: `#3A3A3C` - Dark borders
- **Beige**: `#F5F1E8` - Warm section backgrounds
- **Amethyst** (minimal use): `#8B4789` - Interactive states only

### Typography Scale

#### Font Family
- **Primary**: `Inter` (SF Pro-like system font)
- **Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

#### Type Scale
| Name | Size | Line Height | Letter Spacing | Weight | Usage |
|------|------|-------------|----------------|--------|-------|
| **Display** | clamp(3rem, 8vw, 6rem) | 0.95 | -0.03em | 700 | Hero watermarks |
| **Hero** | clamp(2.5rem, 6vw, 4.5rem) | 1.05 | -0.02em | 600 | Main headlines |
| **H1** | clamp(2rem, 5vw, 3.5rem) | 1.1 | -0.02em | 600 | Section titles |
| **H2** | clamp(1.5rem, 4vw, 2.5rem) | 1.2 | -0.015em | 600 | Subsections |
| **H3** | clamp(1.25rem, 3vw, 1.75rem) | 1.3 | -0.01em | 600 | Card titles |
| **Body** | 17px | 1.6 | normal | 400 | Paragraph text |
| **Small** | 14px | 1.5 | normal | 400 | Secondary info |
| **Eyebrow** | 10px | 1.4 | 0.1em | 500 | Labels, categories |

### Spacing System (8pt Grid)

```
4px   →  0.25rem  →  spacing-4
8px   →  0.5rem   →  spacing-8
12px  →  0.75rem  →  spacing-12
16px  →  1rem     →  spacing-16
24px  →  1.5rem   →  spacing-24
32px  →  2rem     →  spacing-32
48px  →  3rem     →  spacing-48
64px  →  4rem     →  spacing-64
96px  →  6rem     →  spacing-96
```

### Borders

#### Hairlines
- **Light Mode**: 1px solid `#D2D2D7`
- **Dark Mode**: 1px solid `#3A3A3C`
- **Usage**: Section dividers, card borders, subtle separators
- **Class**: `.hairline`, `.hairline-top`, `.hairline-bottom`

#### Border Radii
- **None**: 0 - Cards, images (sharp corners)
- **Full**: 9999px - Buttons, pills, floating actions

### Shadows

```css
/* Minimal shadows - Apple style */
none:   none
soft:   0 2px 8px rgba(0, 0, 0, 0.04)
medium: 0 4px 16px rgba(0, 0, 0, 0.06)
```

### Transitions

```css
/* All transitions respect prefers-reduced-motion */
Duration: 150ms (standard)
Easing:   cubic-bezier(0.4, 0, 0.2, 1)
Class:    .transition-apple
```

### Interactive Elements

#### Links (Apple-style)
```css
.link-apple {
  text-decoration: underline 1px offset 2px;
  transition: 150ms;
}
.link-apple:hover {
  underline extends slightly
}
```

#### Buttons
- **Primary**: Black background, white text, rounded-full
- **Secondary**: White background, black text, rounded-full
- **Hover**: Subtle darkening (bg-gray-800)
- **Focus**: 2px outline with 4px offset

### Component Guidelines

#### Header
- Height: 56px mobile, 72px desktop
- Background: Black (#000000) with 90% opacity + backdrop-blur
- Hairline bottom border
- Sticky positioning

#### Hero
- Background: `#F5F5F7` (light gray)
- Watermark text: 15% opacity
- Clean composition: eyebrow → headline → CTAs → image
- Apple-link CTAs with underline animation

#### Collections
- **Black Section**: Pure black `#000000`, hairline-dark borders
- **Beige Section**: `#F5F1E8`, hairline-light borders
- Hover: brightness(1.05) + translate-y(-2px)
- No heavy overlays

#### Forms
- Border-bottom only (hairline style)
- Input height: 17px font + 16px padding
- Focus: Border color changes to primary
- No rings, clean minimal

### Accessibility Standards

#### Contrast Ratios
- **AA Compliance**: 4.5:1 minimum for body text
- **AAA Goal**: 7:1 for important content
- All text meets AA standards

#### Focus States
- All interactive elements have visible `focus-visible` rings
- 2px outline with 2-4px offset
- High contrast in both light/dark modes

#### Keyboard Navigation
- Tab order follows visual hierarchy
- Escape key closes modals
- Enter/Space activates buttons
- Arrow keys for galleries (lightbox)

#### ARIA Labels
- All buttons have `aria-label`
- Form inputs have proper labels
- Images have descriptive `alt` text
- Expandable elements have `aria-expanded`

### Responsive Breakpoints

```css
/* Mobile-first approach */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Small laptops */
xl:  1280px  /* Desktops */
2xl: 1440px  /* Large displays (max-w-apple) */
```

### Performance Optimization

#### Images
- Lazy loading: `loading="lazy"` (all non-hero images)
- Async decoding: `decoding="async"`
- Fallback handlers via `<ImageWithFallback>`
- Target size: <200KB per image

#### Reduce Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Dark Mode Support

- Uses `class="dark"` strategy
- All colors have dark variants
- Hairlines adapt: `#D2D2D7` → `#3A3A3C`
- Images maintain quality in both modes

---

## 📊 Performance Metrics

### Build Size
- **JavaScript**: 67.67 KB (gzipped)
- **CSS**: 4.11 KB (gzipped)
- **Total**: 71.78 KB (gzipped)
- **Target**: < 200 KB ✅

### Expected Performance Scores
- **Lighthouse Performance**: 85-95
- **Lighthouse SEO**: 95-100
- **LCP**: ~1.2-1.5s (< 2.5s target)
- **FID**: ~30-50ms (< 100ms target)
- **CLS**: ~0.05 (< 0.1 target)

---

## 🌐 Deployment to Netlify

### Automatic Deployment (Recommended)

1. **Connect GitHub to Netlify**
   ```bash
   git push origin main
   ```
   Visit [Netlify Dashboard](https://app.netlify.com) and connect your repository.

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Set Environment Variables**
   ```
   NODE_ENV = production
   VITE_APP_TITLE = Barrios Amethysts
   ```

4. **Add Custom Domain**
   - Netlify Settings → Domain Management
   - Add: `barriosamethysts.com`
   - Configure DNS records
   - HTTPS auto-enabled ✅

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy production build
netlify deploy --prod --dir=dist
```

---

## 📝 SEO Configuration

### Meta Tags
- ✅ Title tag (55 characters, optimized)
- ✅ Meta description (155 characters)
- ✅ Keywords (relevant to business)
- ✅ Author and robots directives

### Social Sharing
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Custom OG image

### Search Engines
- ✅ `robots.txt` (search directives)
- ✅ `sitemap.xml` (4 pages indexed)
- ✅ Canonical URLs
- ✅ Schema.org Organization schema

### Post-Deployment
1. Submit sitemap to Google Search Console
2. Monitor indexing status
3. Check Core Web Vitals
4. Track keyword rankings

---

## 🔒 Security

### HTTPS & SSL
- ✅ Automatic via Let's Encrypt (free)
- ✅ HTTP → HTTPS redirect
- ✅ HSTS headers enabled

### Security Headers
```
X-Frame-Options: SAMEORIGIN (prevent clickjacking)
X-Content-Type-Options: nosniff (prevent MIME sniffing)
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Caching
- **Static assets**: 1 year cache (immutable)
- **HTML**: 1 hour cache (frequent updates)
- **Browser**: 90%+ cache hit rate for returning visitors

---

## 📞 Contact Information

**Barrios Amethysts**
- Email: barriosamethystsuruguay@gmail.com
- USA: +1 (520) 486-4301
- Uruguay: +598 99 967 347
- Address: 1399 Manuel Freire, Artigas 55000, Uruguay

---

## 📄 License

© 2025 Barrios Amethysts. All rights reserved.

---

## 🎓 Documentation

For detailed deployment instructions, see:
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) - Complete deployment guide
- [`QUICK_DEPLOY_GUIDE.md`](./QUICK_DEPLOY_GUIDE.md) - 5-minute quick start
- [`PERFORMANCE_BASELINE.md`](./PERFORMANCE_BASELINE.md) - Performance metrics
- [`NETLIFY_DEPLOYMENT_READY.md`](./NETLIFY_DEPLOYMENT_READY.md) - Deployment checklist

---

## 🤝 Contributing

For updates or improvements:
1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit pull request

---

## 🐛 Troubleshooting

### Build Issues
**Problem**: Build fails locally
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Performance Issues
**Problem**: Slow page load
**Solution**: Check images are < 10MB, verify lazy loading, clear cache

### Deployment Issues
**Problem**: Deploy fails on Netlify
**Solution**: Check Node version (18+), verify `npm run build` works locally, review build logs

### Image Not Loading
**Problem**: Images don't display
**Solution**: Verify image paths start with `/`, check images exist in `public/images/`

---

## 📊 Version History

- **v1.0.0** (October 19, 2025) - Initial production release
  - React 18 + Vite setup
  - Tailwind CSS styling
  - SEO optimization
  - Netlify deployment ready

---

## 🙏 Credits

**Family**: Barrios Amethysts family for 33+ years of excellence

**Design Inspiration**: Apple's minimalist design philosophy

**Tools & Technologies**: React, Vite, Tailwind CSS, Netlify

---

## 📧 Support

For technical support:
1. Check documentation files
2. Review Netlify dashboard
3. Check browser console for errors
4. Contact: barriosamethystsuruguay@gmail.com

---

**Status**: 🟢 Production Ready | **Last Updated**: October 19, 2025

Built with ❤️ for luxury mineral excellence.
