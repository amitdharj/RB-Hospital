import React, { useState, useRef, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full">
      {/* Emergency Call Bar */}
      <div className="bg-blue-500 text-end text-white pr-10  py-1 text-sm font-medium">
        Emergency call: (406) 555-0120
      </div>
      
      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="text-white">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 17L12 22L22 17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 12L12 17L22 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">R.B.</h1>
                <p className="text-sm font-semibold text-gray-600">HOSPITAL</p>
              </div>
            </div>
            
            {/* Navigation: show inline links on md+ and dropdown on smaller screens */}
            <nav className="flex items-center">
              {/* Desktop / tablet: inline links */}
              <div className="hidden md:flex items-center space-x-6 mr-6">
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">About Us</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Services</a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-gray-700 hover:text-blue-500 font-medium"
                >
                  Contact
                </a>
              </div>

              {/* Mobile: dropdown toggle */}
              <div className="md:hidden relative">
                <Dropdown />
              </div>
            </nav>
            
            {/* Book Appointment Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
        
        {/* Removed separate mobile nav; dropdown contains all links */}
      </div>
    </header>
  );
}

function Dropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition-colors px-3 py-2 border border-transparent hover:border-gray-200 rounded-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="hidden sm:inline">Menu</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-40">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">About Us</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Services</a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}