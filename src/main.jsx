import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Contact from './Contact';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contact/>
  </StrictMode>
);