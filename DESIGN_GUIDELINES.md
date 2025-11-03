# LA CRÈME - DESIGN GUIDELINES

## Saisei-Inspired Design System for Professional Restaurant Landing Page

_Based on analysis of saisei-sbj.webflow.io with adaptations for React + Vite + Tailwind v4 stack_

---

## 🎯 Design Philosophy

**Core Principle:** Grand scale elegance with controlled motion

**Three Pillars:**

1. **Impact** - Large-scale typography, generous spacing
2. **Motion** - Subtle animations that enhance, don't distract
3. **Polish** - Attention to micro-interactions and details

**Technical Constraint:** Achieve Saisei feel WITHOUT external animation libraries (GSAP/Lenis)

---

## 📐 Spacing & Layout System

### Section Spacing (Vertical Rhythm)

```css
Mobile (375px):    py-16 (4rem / 64px)
Tablet (768px):    py-20 (5rem / 80px)
Desktop (1024px+): py-24 (6rem / 96px)
```

**Implementation:**

```jsx
<section className="section">
  <!-- Uses predefined .section class from index.css -->
</section>
```

### Container Width Strategy

**Saisei Pattern:** Wide containers with breathing room

```css
Standard Container:  max-w-7xl (80rem / 1280px)
Narrow Content:      max-w-4xl (56rem / 896px)
Hero Full-Bleed:     Full width with inner container
```

### Internal Spacing

**Element Spacing:**

- Headings → Body text: `mb-6` (1.5rem)
- Paragraphs: `mb-4` (1rem)
- Button groups: `gap-4` (1rem)
- Card grids: `gap-6` or `gap-8`

---

## 🎨 Typography Scale

### Saisei Effect: Grand Scale Typography

**Headline Sizes (Responsive):**

```css
Hero H1:
  Mobile:  text-5xl (3rem / 48px)
  Tablet:  text-6xl (3.75rem / 60px)
  Desktop: text-7xl or text-[7rem] (4.5rem+ / 112px)

Section H2:
  Mobile:  text-4xl (2.25rem / 36px)
  Tablet:  text-5xl (3rem / 48px)
  Desktop: text-6xl (3.75rem / 60px)

Section H3:
  Mobile:  text-3xl (1.875rem / 30px)
  Tablet:  text-4xl (2.25rem / 36px)
```

**Font Usage:**

- `font-serif` (Playfair Display): All headings, dramatic statements
- `font-sans` (Inter): Body text, buttons, navigation

**Weight Hierarchy:**

- H1/H2: `font-bold` or `font-semibold`
- Body: `font-normal`
- Captions/Labels: `font-light` or `font-normal`

---

## 🎭 Animation Strategy

### Phase 1: Build (Week 2) - Structure Only

Build sections with NO animations. Focus on layout, spacing, content.

### Phase 2: Polish (Week 3) - Add Motion

**Principle:** Motion follows scroll position and viewport entry

#### A. Scroll-Based Effects

**Parallax Background (Hero Section):**

```javascript
// Use existing useScrollPosition hook
const scrollY = useScrollPosition();

// Apply to background wrapper
style={{
  transform: `translateY(${scrollY * 0.5}px)`
}}
```

**Performance Rule:** Only use `transform` and `opacity` (GPU-accelerated)

#### B. Viewport Entry Animations

**Pattern:** Element reveals as it enters viewport

```javascript
// Use existing useIntersectionObserver hook
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

<div
  ref={ref}
  className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
>
```

**Staggered Entry:**

```jsx
<h1 className="animate-fade-in">Headline</h1>
<p className="animate-fade-in animate-delay-200">Subtitle</p>
<Button className="animate-fade-in animate-delay-400">CTA</Button>
```

**Available Animation Classes (from index.css):**

- `.animate-fade-in` - 0.6s fade in
- `.animate-slide-up` - 0.5s slide from bottom
- `.animate-slide-in-right` - 0.5s slide from left
- `.animate-scale-in` - 0.4s scale from 90%
- `.animate-delay-100/200/300/400` - Stagger timing

---

## 🖼️ Image Strategy

### Optimization Requirements

**Format Priority:**

1. WebP (modern browsers)
2. JPEG fallback (older browsers)

**Responsive Images:**

```jsx
<img
  srcSet="
    image-400w.webp 400w,
    image-800w.webp 800w,
    image-1200w.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  src="image-800w.jpg"
  alt="Description"
/>
```

### Loading Strategy

**Above-the-fold images (Hero):**

```jsx
<img loading="eager" fetchpriority="high" />
```

**Below-the-fold images (Gallery, Menu):**

```jsx
<img loading="lazy" />
```

**Progressive Loading Pattern:**

```jsx
// Blur placeholder while loading
<div className="relative">
  <img src="low-res-blur.jpg" className="absolute inset-0 blur-lg" />
  <img src="high-res.jpg" className="relative" onLoad={() => setLoaded(true)} />
</div>
```

### Gallery Implementation

**Grid System (Saisei Pattern):**

```jsx
<div className="grid-auto-fit">
  <!-- Uses predefined utility from index.css -->
  <!-- Auto-responsive: 1 col mobile, 2-3 cols desktop -->
</div>
```

**Hover Effect:**

```jsx
<div className="group relative overflow-hidden">
  <img
    className="transition-transform duration-500 group-hover:scale-105"
  />
  <div className="overlay opacity-0 group-hover:opacity-100">
    <!-- Optional overlay content -->
  </div>
</div>
```

**Intersection Observer Integration:**

```jsx
const [ref, isVisible] = useIntersectionObserver();

<img ref={ref} className={isVisible ? "animate-fade-in" : "opacity-0"} />;
```

---

## 🎨 Color Usage Guidelines

### Never Hardcode Colors ❌

**Wrong:**

```jsx
<div style={{ color: '#D4AF37' }}>
<div className="text-[#D4AF37]">
```

**Correct:**

```jsx
<div className="text-primary-gold">
<div style={{ color: 'var(--color-primary-gold)' }}>
```

### Theme Color Reference

```
Backgrounds:
  bg-primary-black       #0a0a0a (main background)
  bg-accent-gray         #1a1a1a (cards, sections)
  bg-accent-gray-light   #2a2a2a (hover states)

Text & Accents:
  text-primary-gold      #d4af37 (headings, CTAs)
  text-primary-gold-light #e8c468 (hover, highlights)
  text-accent-white      #fafafa (body text)
  text-accent-white/80   (secondary text)
  text-accent-white/60   (muted text)

Borders & Dividers:
  border-primary-gold
  border-accent-gray-light
```

### Color Application Strategy

**Text Hierarchy:**

- H1/H2: `text-primary-gold`
- H3/H4: `text-primary-gold` or `text-accent-white`
- Body: `text-accent-white`
- Captions: `text-accent-white/80`
- Muted: `text-accent-white/60`

**Interactive Elements:**

- Button primary: `bg-primary-gold` → `hover:bg-primary-gold-light`
- Button secondary: `border-primary-gold` → `hover:bg-primary-gold`
- Links: `text-primary-gold` → `hover:text-primary-gold-light`

---

## ✨ Micro-Interactions

### Button Hover States

**Current (from index.css):**

```css
.btn-primary:hover {
  background-color: var(--color-primary-gold-light);
  box-shadow: var(--shadow-gold-glow);
}
```

**Enhancement (Week 3):**
Add subtle scale and smooth transitions:

```jsx
<button className="btn-primary transition-all duration-300 hover:scale-105">
```

### Navigation Interactions

**Header Scroll Effect:**

```javascript
const scrollY = useScrollPosition();

<header className={`
  transition-all duration-300
  ${scrollY > 100
    ? 'bg-primary-black shadow-gold-glow'
    : 'bg-transparent'
  }
`}>
```

**Mobile Menu:**

- Slide in from right: `translate-x-full` → `translate-x-0`
- Backdrop blur: `backdrop-blur-sm`
- Staggered link entry with delays

### Form Interactions

**Input Focus:**

```css
/* Already defined in index.css */
.input:focus {
  border-color: var(--color-primary-gold);
  box-shadow: 0 0 0 1px var(--color-primary-gold);
}
```

**Validation States:**

- Error: `border-red-500` + shake animation
- Success: `border-green-500` + checkmark
- Loading: Disabled state with spinner

---

## 🎯 Component-Specific Guidelines

### Hero Section

**Structure:**

```
Full-viewport height (min-h-screen)
├─ Background Image Layer (parallax)
│  └─ overlay-gradient (dark to transparent)
├─ Content Layer (centered)
│  ├─ H1 (text-7xl, font-serif, text-primary-gold)
│  ├─ Tagline (text-xl, text-accent-white/80)
│  └─ CTA Button (btn-primary, btn-lg)
```

**Key Effects:**

- Background parallax (scroll \* 0.5)
- Content fade-in on load (staggered)
- CTA button with glow on hover

**Spacing:**

- Generous padding: `py-32` or more
- Content max-width: `max-w-4xl`

### Menu Section

**Layout Strategy:**

```
Section Header (centered)
├─ H2 (section-title)
├─ Divider (.divider)
└─ Category Tabs/Filters

Menu Grid (grid-auto-fit)
└─ Menu Items (card-hover)
   ├─ Image (aspect-square or aspect-video)
   ├─ Title (text-xl, font-serif)
   ├─ Description (text-accent-white/80)
   └─ Price (text-primary-gold)
```

**Interactions:**

- Category filter with active state
- Smooth transition between categories
- Image hover scale effect

### Gallery Section

**Grid Pattern (Saisei Style):**

```jsx
<div className="grid-auto-fit">
  {images.map((img, index) => (
    <GalleryImage
      key={index}
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    />
  ))}
</div>
```

**Modal/Lightbox:**

- Click image → Full-screen modal
- Navigation arrows (prev/next)
- ESC to close, dark backdrop
- Smooth scale-in animation

### Reservation Section

**Form Design:**

```
Two-column layout (desktop)
├─ Left: Form fields
│  ├─ Name, Email, Phone
│  ├─ Date, Time, Guests
│  └─ Special Requests
└─ Right: Confirmation preview or image

Mobile: Single column, stacked
```

**UX Requirements:**

- Real-time validation
- Clear error messages
- Loading state during submission
- Success confirmation with animation

---

## 🏗️ Implementation Phases

### Week 2: Structure (Current Phase)

**Build sections with:**

- ✅ Correct spacing (section classes)
- ✅ Typography hierarchy
- ✅ Color system (theme classes)
- ✅ Mobile-responsive layout
- ❌ NO animations yet
- ❌ NO parallax yet
- ❌ NO fancy effects yet

**Goal:** Functioning, well-structured landing page

### Week 3: Motion & Polish

**Add progressively:**

1. Viewport entry animations (useIntersectionObserver)
2. Scroll-based effects (useScrollPosition)
3. Hover micro-interactions
4. Loading states and transitions
5. Custom cursor (optional)

### Week 4: Optimization

**Performance audit:**

- Lighthouse score 90+
- Image optimization complete
- Animation performance tested
- Accessibility review (WCAG 2.1 AA)

---

## 🎨 Advanced Effects (Week 3)

### Gold Stripes Background

**Concept:** Diagonal gold stripes emanating from corners

**Implementation:**

```jsx
// In Hero or global background
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-1/2 -left-1/4 w-1 h-[200%]
                  bg-gradient-to-b from-transparent via-primary-gold/10
                  to-transparent rotate-12" />
  <div className="absolute -top-1/2 right-1/4 w-1 h-[200%]
                  bg-gradient-to-b from-transparent via-primary-gold/10
                  to-transparent -rotate-12" />
  <!-- More stripes as needed -->
</div>
```

**Performance:** Use CSS only, no JavaScript

### Custom Cursor

**When to add:** Week 3, after core content complete

**Pattern:**

```jsx
// src/components/common/Cursor/Cursor.jsx
const [position, setPosition] = useState({ x: 0, y: 0 });
const [isHovering, setIsHovering] = useState(false);

useEffect(() => {
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

return (
  <div
    className={`custom-cursor ${isHovering ? "scale-150" : ""}`}
    style={{
      left: position.x,
      top: position.y,
      transform: "translate(-50%, -50%)",
    }}
  />
);
```

---

## ♿ Accessibility Requirements

**Always maintain:**

- Keyboard navigation (Tab, Enter, Esc)
- Focus indicators visible
- ARIA labels on interactive elements
- Alt text on all images
- Color contrast 4.5:1 minimum
- No keyboard traps
- Screen reader friendly

**Animation Considerations:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📊 Performance Targets

**Lighthouse Scores:**

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Core Web Vitals:**

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimization Checklist:**

- [ ] Images lazy loaded (except hero)
- [ ] WebP format with fallbacks
- [ ] CSS animations use transform/opacity only
- [ ] No layout shifts during load
- [ ] Fonts preloaded
- [ ] Bundle size optimized

---

## 🎓 Design Principles Summary

**Remember Saisei's Core Lessons:**

1. **Scale Matters:** Don't be afraid of large typography
2. **Space is Luxury:** Generous padding = elegance
3. **Motion Enhances:** Animations should feel inevitable, not decorative
4. **Performance is Design:** Smooth = professional
5. **Consistency is Key:** Use design system religiously

**Build Philosophy:**

- Make it work (Week 2)
- Make it right (Week 3)
- Make it fast (Week 4)

---

**Last Updated:** November 3, 2025  
**For:** La Crème Restaurant Landing Page  
**Stack:** React 18 + Vite + Tailwind CSS v4  
**Inspiration:** saisei-sbj.webflow.io (adapted for current stack)
