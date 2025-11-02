/** @type {import('tailwindcss').Config} */
export default {
  // In Tailwind v4, most configuration is done in CSS using @theme directive
  // This config file is mainly for plugins and other non-theme settings

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Theme customization is now done in CSS with @theme directive
  // See src/index.css for theme configuration

  plugins: [
    // Add Tailwind plugins here if needed
    // Example: require('@tailwindcss/forms'),
  ],
}
