# LA CRÈME - Project Folder Structure

## 📁 Complete Directory Structure

```
react-vite-tailwind/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   └── hero-bg.jpg          # Main hero background
│   │   ├── menu/
│   │   │   ├── appetizers/
│   │   │   ├── mains/
│   │   │   └── desserts/
│   │   ├── gallery/                 # Restaurant ambiance photos
│   │   └── logo/
│   │       ├── logo.svg             # Main logo
│   │       └── logo-light.svg       # Light version
│   ├── fonts/                       # Local fonts if needed
│   └── favicon.ico
│
├── src/
│   ├── assets/                      # Static assets imported in components
│   │   ├── icons/
│   │   │   ├── ChevronDown.jsx     # Custom SVG icons as components
│   │   │   ├── Calendar.jsx
│   │   │   ├── Clock.jsx
│   │   │   ├── Users.jsx
│   │   │   └── index.js            # Barrel export
│   │   └── images/                  # Images that need to be processed by Vite
│   │
│   ├── components/
│   │   ├── common/                  # ⭐ Reusable UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css (if needed)
│   │   │   │   └── index.js        # Export
│   │   │   ├── Input/
│   │   │   │   ├── Input.jsx
│   │   │   │   └── index.js
│   │   │   ├── Select/
│   │   │   │   ├── Select.jsx
│   │   │   │   └── index.js
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── index.js
│   │   │   ├── LoadingSpinner/
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   └── index.js
│   │   │   └── ErrorBoundary/
│   │   │       ├── ErrorBoundary.jsx
│   │   │       └── index.js
│   │   │
│   │   ├── layout/                  # Layout structure components
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navigation.jsx
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── index.js
│   │   │   └── Layout/
│   │   │       ├── Layout.jsx      # Main wrapper with Header + Footer
│   │   │       └── index.js
│   │   │
│   │   ├── sections/                # ⭐ Landing page sections
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── HeroContent.jsx
│   │   │   │   └── index.js
│   │   │   ├── AboutSection/
│   │   │   │   ├── AboutSection.jsx
│   │   │   │   └── index.js
│   │   │   ├── MenuSection/
│   │   │   │   ├── MenuSection.jsx
│   │   │   │   ├── MenuCategories.jsx
│   │   │   │   ├── MenuGrid.jsx
│   │   │   │   ├── MenuItem.jsx
│   │   │   │   └── index.js
│   │   │   ├── GallerySection/
│   │   │   │   ├── GallerySection.jsx
│   │   │   │   ├── GalleryGrid.jsx
│   │   │   │   ├── GalleryImage.jsx
│   │   │   │   └── index.js
│   │   │   ├── ReservationSection/
│   │   │   │   ├── ReservationSection.jsx
│   │   │   │   └── index.js
│   │   │   └── ContactSection/
│   │   │       ├── ContactSection.jsx
│   │   │       ├── ContactInfo.jsx
│   │   │       ├── LocationMap.jsx
│   │   │       └── index.js
│   │   │
│   │   └── reservation/             # ⭐ Reservation system components
│   │       ├── ReservationForm/
│   │       │   ├── ReservationForm.jsx
│   │       │   └── index.js
│   │       ├── DatePicker/
│   │       │   ├── DatePicker.jsx
│   │       │   └── index.js
│   │       ├── TimePicker/
│   │       │   ├── TimePicker.jsx
│   │       │   └── index.js
│   │       ├── GuestSelector/
│   │       │   ├── GuestSelector.jsx
│   │       │   └── index.js
│   │       ├── ContactFields/
│   │       │   ├── ContactFields.jsx
│   │       │   └── index.js
│   │       ├── ConfirmationModal/
│   │       │   ├── ConfirmationModal.jsx
│   │       │   └── index.js
│   │       └── index.js             # Barrel export all reservation components
│   │
│   ├── pages/                       # Page-level components
│   │   ├── Home/
│   │   │   ├── Home.jsx            # Main landing page
│   │   │   └── index.js
│   │   └── NotFound/                # 404 page (future)
│   │       ├── NotFound.jsx
│   │       └── index.js
│   │
│   ├── services/                    # ⭐ API and external service logic
│   │   ├── api/
│   │   │   ├── client.js           # Axios/Fetch configuration
│   │   │   ├── reservations.js     # Reservation API calls
│   │   │   └── interceptors.js     # Request/response interceptors
│   │   └── analytics/
│   │       └── analytics.js        # Google Analytics integration (future)
│   │
│   ├── hooks/                       # ⭐ Custom React hooks
│   │   ├── useReservation.js       # Reservation form logic & API call
│   │   ├── useScrollPosition.js    # Track scroll for header effects
│   │   ├── useIntersectionObserver.js  # Lazy loading & animations
│   │   ├── useMediaQuery.js        # Responsive breakpoint detection
│   │   └── useLocalStorage.js      # Persist form data (optional)
│   │
│   ├── utils/                       # Utility functions
│   │   ├── validation.js           # Form validation helpers
│   │   ├── date.js                 # Date formatting utilities
│   │   ├── formatters.js           # Text/number formatters
│   │   └── helpers.js              # General helper functions
│   │
│   ├── constants/                   # ⭐ Static data & configuration
│   │   ├── menu.js                 # Restaurant menu data
│   │   ├── navigation.js           # Navigation links
│   │   ├── gallery.js              # Gallery images metadata
│   │   ├── hours.js                # Operating hours
│   │   └── config.js               # App-wide configuration
│   │
│   ├── styles/                      # Additional CSS if needed
│   │   └── animations.css          # Custom animation definitions
│   │
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # ⭐ Global styles (already created)
│
├── .env.example                     # Environment variable template
├── .env.local                       # Local environment variables (gitignored)
├── .gitignore
├── .prettierrc                      # Prettier configuration
├── .eslintrc.cjs                    # ESLint configuration
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # ⭐ Tailwind configuration (already created)
├── postcss.config.js                # PostCSS configuration
├── package.json
├── PROJECT.md                       # ⭐ Project documentation (already created)
└── README.md                        # Setup and development instructions
```

---

## 📝 File Naming Conventions

### Components

- **Format:** PascalCase (e.g., `ReservationForm.jsx`)
- **Index files:** Always include `index.js` for clean imports

### Utilities & Services

- **Format:** camelCase (e.g., `useReservation.js`, `validation.js`)

### Constants

- **Format:** camelCase for files, SCREAMING_SNAKE_CASE for exports
- Example: `constants/menu.js` exports `MENU_ITEMS`

---

## 🎯 Key Files Explanation

### `src/services/api/client.js`

Centralized API configuration with base URL, headers, and interceptors.

```javascript
// Example structure:
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request/response interceptors here
export default apiClient;
```

### `src/services/api/reservations.js`

All reservation-related API calls.

```javascript
// Example:
import apiClient from "./client";

export const createReservation = async (data) => {
  const response = await apiClient.post("/reservations", data);
  return response.data;
};
```

### `src/hooks/useReservation.js`

Business logic for reservation form (state, validation, submission).

```javascript
// Handles:
// - Form state management
// - Validation
// - API call
// - Loading/error states
// - Success handling
```

### `src/constants/menu.js`

Restaurant menu data structure.

```javascript
export const MENU_ITEMS = {
  appetizers: [...],
  mains: [...],
  desserts: [...],
};
```

---

## 🚀 Import Strategy

### Barrel Exports (index.js)

Every component folder has an `index.js` for clean imports:

```javascript
// components/common/Button/index.js
export { default } from "./Button";

// Now you can import:
import Button from "@/components/common/Button";
// Instead of:
import Button from "@/components/common/Button/Button";
```

### Path Aliases (vite.config.js)

Set up aliases for cleaner imports:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
});
```

---

## 🔄 Component Organization Philosophy

### Atomic Design Principles

1. **common/** - Atoms (smallest reusable pieces)
2. **sections/** - Organisms (complex sections)
3. **pages/** - Templates (full page compositions)
4. **layout/** - Structural wrappers

### Co-location

Keep related files together:

- Component
- Styles (if component-specific)
- Tests (future)
- Index for exports

---

## ⚡ Next Steps

1. **Create the folder structure** in your `src` directory
2. **Update vite.config.js** with path aliases
3. **Replace your current `src/index.css`** with the new one
4. **Replace `tailwind.config.js`** with the new configuration
5. **Start building components** following this structure

---

## 💡 Pro Tips

- **Don't create all folders at once** - Create them as you build
- **Start with common components** - Button, Input first
- **Build sections one at a time** - Hero → About → Menu → etc.
- **Test on mobile frequently** - Don't wait until the end
- **Commit after each section** - Clean git history

---

**Remember:** This structure is a guide, not a prison. Adapt as needed, but maintain consistency throughout the project.
