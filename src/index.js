import React from 'react';
import { createRoot } from 'react-dom/client';
// index.css removed to avoid PostCSS/Tailwind build errors during development.
// Tailwind utilities are loaded via CDN in public/index.html and custom styles
// are inlined there as well.
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
