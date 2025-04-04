
import React from 'react'; // Ensure React is explicitly imported
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Explicitly create the React root using StrictMode for added safety
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
