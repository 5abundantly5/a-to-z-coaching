import React, { useState } from 'react';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import forestBg from './assets/forest-bg.png';

export default function App() {
  const [page, setPage] = useState('about');

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="text-white px-6 py-4 flex space-x-4"
      style={{
        backgroundImage: `url(${forestBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <button
          onClick={() => setPage('about')}
          className={`hover:bg-blue-500 px-3 py-2 rounded ${page === 'about' ? 'bg-blue-700' : ''}`}
        >
          About
        </button>
        <button
          onClick={() => setPage('services')}
          className={`hover:bg-blue-500 px-3 py-2 rounded ${page === 'services' ? 'bg-blue-700' : ''}`}
        >
          Services
        </button>
        <button
          onClick={() => setPage('contact')}
          className={`hover:bg-blue-500 px-3 py-2 rounded ${page === 'contact' ? 'bg-blue-700' : ''}`}
        >
          Contact
        </button>
      </nav>
      <main className="p-4 max-w-4xl mx-auto">{renderPage()}</main>
    </div>
  )
}

