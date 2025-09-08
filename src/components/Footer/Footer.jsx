import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* City Skyline SVG Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          {/* City skyline outline */}
          <g stroke="#333" strokeWidth="1" fill="none">
            {/* Left side buildings */}
            <rect x="50" y="250" width="40" height="150" />
            <rect x="100" y="200" width="50" height="200" />
            <rect x="160" y="230" width="35" height="170" />
            <rect x="205" y="180" width="60" height="220" />
            <rect x="275" y="220" width="45" height="180" />
            <rect x="330" y="160" width="55" height="240" />
            <rect x="395" y="190" width="40" height="210" />
            <rect x="445" y="140" width="65" height="260" />
            <rect x="520" y="170" width="50" height="230" />
            
            {/* Center tall buildings */}
            <rect x="580" y="80" width="70" height="320" />
            <rect x="660" y="120" width="55" height="280" />
            <rect x="725" y="60" width="80" height="340" />
            <rect x="815" y="100" width="60" height="300" />
            
            {/* Right side buildings */}
            <rect x="885" y="180" width="45" height="220" />
            <rect x="940" y="150" width="55" height="250" />
            <rect x="1005" y="200" width="40" height="200" />
            <rect x="1055" y="170" width="50" height="230" />
            <rect x="1115" y="140" width="45" height="260" />
            
            {/* Building details - windows */}
            {[...Array(15)].map((_, i) => (
              <g key={i}>
                <rect x={100 + i * 80} y={200 + Math.random() * 50} width="8" height="12" fill="#333" opacity="0.5" />
                <rect x={110 + i * 80} y={220 + Math.random() * 30} width="8" height="12" fill="#333" opacity="0.5" />
                <rect x={120 + i * 80} y={240 + Math.random() * 40} width="8" height="12" fill="#333" opacity="0.5" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Let's Talk Section */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Let's<br />
                Talk<br />
                <span className="font-bold">with us...</span>
              </h2>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Call */}
              <div>
                <div className="border border-yellow-600 inline-block px-6 py-2 mb-4">
                  <span className="text-yellow-600 text-sm font-medium tracking-wide">call</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">+333 22 42 38</p>
                  <p className="text-gray-300">+333 22 42 65</p>
                </div>
              </div>

              {/* Mail */}
              <div>
                <div className="border border-yellow-600 inline-block px-6 py-2 mb-4">
                  <span className="text-yellow-600 text-sm font-medium tracking-wide">mail</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">archio@gmail.com</p>
                  <p className="text-gray-300">info@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="border border-yellow-600 inline-block px-6 py-2 mb-4">
                  <span className="text-yellow-600 text-sm font-medium tracking-wide">address</span>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300">012, moke road,</p>
                  <p className="text-gray-300">2 natron street,</p>
                  <p className="text-gray-300">USA.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            {/* Left Side - Brand and Envato */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              
              
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-light">archio.</h3>
              </div>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center space-x-8">
              {/* Share */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-px bg-yellow-600"></div>
                <span className="text-sm">share</span>
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              {/* YouTube */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-px bg-yellow-600"></div>
                <span className="text-sm">youtube</span>
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>

            {/* Right Side - Copyright */}
            <div className="text-sm text-gray-400">
              Copyright © 2025. All Right Reserved.
            </div>
          </div>

          {/* Scroll to Top Button */}
          <div className="fixed bottom-8 right-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-colors flex items-center justify-center group"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;