# La Creme - Restaurant Landing Page Template

A modern, production-ready landing page template for upscale restaurants. Built with React, Tailwind CSS v4, and Vite.

![Preview](public/images/hero/hero-bg-1200w.webp)

## Features

- **Elegant Design** - Dark theme with gold accents, Playfair Display + Inter typography
- **Menu Showcase** - Categorized menu with food photography and filtering
- **Image Gallery** - Grid layout with lightbox modal
- **Reservation System** - Full booking form with EmailJS integration
- **Contact Section** - Location map, hours, and contact info
- **Scrolling Golden Accent** - Decorative scroll-following effect
- **Responsive** - Mobile-first design, works on all devices
- **Optimized Images** - WebP with responsive srcsets (400w, 800w, 1200w)
- **Accessibility** - WCAG 2.1 AA, keyboard navigation, ARIA labels

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS v4** - Styling (CSS-first `@theme` configuration)
- **EmailJS** - Reservation email notifications
- **PropTypes** - Runtime type checking

## Quick Start

```bash
# Clone repository
git clone https://github.com/Max-Mendes91/la-creme-restaurant.git
cd la-creme-restaurant

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials

# Start development server
npm run dev
```

Visit `http://localhost:5173`

## Scripts

```bash
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run optimize-images  # Generate responsive image variants
```

## Project Structure

```
la-creme-restaurant/
├── public/
│   └── images/                  # Optimized responsive images
│       ├── hero/                # Hero background (400w, 800w, 1200w)
│       └── menu/                # Menu items by category
│           ├── appetizers/
│           ├── mains/
│           └── desserts/
├── scripts/
│   └── optimize-images.js       # Image optimization utility
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI (Button, Input)
│   │   ├── effects/             # Visual effects (ScrollingGoldenAccent)
│   │   ├── layout/              # Header, Footer, Layout
│   │   ├── reservation/         # Reservation form
│   │   └── sections/            # Page sections (Hero, Menu, Gallery, Contact)
│   ├── constants/               # Menu data, gallery config
│   ├── context/                 # React context (PreOrder)
│   ├── hooks/                   # Custom hooks (scroll, intersection, reservation)
│   ├── services/                # API/EmailJS integration
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind v4 theme
├── .env.example                 # Environment variables template
├── EMAILJS_SETUP.md             # EmailJS configuration guide
└── README.md
```

## Customization

### Colors

Edit `src/index.css` theme variables:

```css
@theme {
  --color-primary-black: #0a0a0a;
  --color-primary-gold: #d4af37;
  --color-primary-cream: #f5f5dc;
  --color-accent-white: #fafafa;
  --color-accent-gray: #1a1a1a;
}
```

### Menu Items

Edit `src/constants/menu.js` to update dishes, descriptions, and prices.

### Images

Replace images in `public/images/` and run `npm run optimize-images` to generate responsive variants.

### Reservation System

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for full EmailJS configuration.

## Deployment

Deploy to [Vercel](https://vercel.com):

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables from `.env.example`
4. Deploy

## License

MIT

## Author

Max Mendes
