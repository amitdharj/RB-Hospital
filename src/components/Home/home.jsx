import React, { useState, useEffect } from 'react';
import hospital01 from '../../assets/hospital01.webp';
import hospital from '../../assets/hospital.jpg';
import doctors from '../../assets/doctors.jpg';
import staff from '../../assets/staff.webp';


const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [hospital01, hospital, doctors, staff];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500); // change every 3 seconds

    return () => clearInterval(id);
  }, [slides.length+1]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 overflow-hidden">
      {/* Background Image Overlay */}
        {/* Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 flex h-full w-[100%] transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((img, idx) => (
              <div key={idx} className="w-full flex-shrink-0 relative">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0  bg-opacity-40 pointer-events-none"></div>
        </div>

    
          
         

      

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-700 mb-6 leading-tight">
            Innovative Design<br />
            Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-yellow-500 mb-12 leading-relaxed">
            Creating sustainable and functional spaces that inspire and endure
          </p>

          {/* View More Button */}
          <div className="mb-16">
            <button className="border-2 border-white rounded-4xl text-yellow-500 bg-gray-800 px-8 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium">
              View more →
            </button>
          </div>

          {/* Bottom Buttons
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-yellow-500 text-white px-8 py-4 font-semibold hover:bg-yellow-600 transition-colors">
              Projects
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
              Contact
            </button>
          </div> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-1 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-4 h-1 bg-white bg-opacity-50 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;