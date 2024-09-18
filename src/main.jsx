import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="bg-neutral-950 text-neutral-50 px-20">
      <div className="min-h-screen">
        <App />
      </div>
      <Footer />
    </main>
  </StrictMode>
);
