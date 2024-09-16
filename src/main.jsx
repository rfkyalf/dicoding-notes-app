import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-neutral-50 px-20 h-full">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
