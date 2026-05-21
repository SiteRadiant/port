// Temporarily disable PostCSS plugins to avoid Tailwind PostCSS plugin errors.
// Tailwind utilities are loaded via CDN in public/index.html during development.
module.exports = {
  plugins: {},
};