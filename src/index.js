import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const container = document.getElementById('root');
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

const root = createRoot(container);
root.render(app);
