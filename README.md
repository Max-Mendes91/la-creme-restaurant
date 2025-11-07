# La Crème Restaurant

> Elegant French restaurant landing page with integrated reservation system

![Tech Stack](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-cyan)

## 🎨 Design

Modern, upscale restaurant aesthetic featuring:
- Black background (#0a0a0a) with gold accents (#d4af37)
- Custom typography: Playfair Display (serif) + Inter (sans-serif)
- Mobile-first responsive design
- Smooth animations and transitions

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling (CSS-first configuration)
- **React Router** (planned) - Navigation
- **Axios** (planned) - API integration

## 📋 Features

- [x] Landing page foundation
- [ ] Hero section with CTA
- [ ] Menu showcase with filtering
- [ ] Image gallery
- [ ] Reservation form with validation
- [ ] Contact section with map
- [ ] Mobile-responsive design
- [ ] Accessibility (WCAG 2.1 AA)

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/la-creme-restaurant.git
cd la-creme-restaurant

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Header, Footer, Layout
│   ├── sections/        # Landing page sections
│   └── reservation/     # Reservation system
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── services/            # API calls
├── utils/               # Helper functions
├── constants/           # Static data
└── assets/              # Images, icons
```

## 🎨 Tailwind v4 Configuration

This project uses Tailwind CSS v4, which has a different configuration approach:

- Theme defined in `src/index.css` using `@theme` directive
- Custom colors available as utility classes
- Component classes defined in `@layer components`

### Custom Colors

```jsx
// Use in JSX
<div className="bg-primary-black text-primary-gold">
  <h1 className="text-accent-white">La Crème</h1>
</div>
```

## 🔧 Path Aliases

Clean imports configured in `vite.config.js`:

```javascript
import Button from '@/components/common/Button'
import { useReservation } from '@hooks/useReservation'
```

## 🌿 Git Workflow

```bash
# Feature development
git checkout develop
git checkout -b feature/component-name

# Work on feature...
git add .
git commit -m "feat: add component description"

# Push and create PR
git push origin feature/component-name
```

## 🚀 Deployment

Deployed on [Vercel](https://vercel.com):
- Main branch → Production
- Feature branches → Preview deployments

## 📝 Commit Convention

Following [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - CSS/formatting changes
- `refactor:` - Code restructure
- `docs:` - Documentation only
- `chore:` - Dependencies, config

## 📄 License

MIT

## 👤 Author

[Your Name]

---

**Status:** 🚧 In Development
