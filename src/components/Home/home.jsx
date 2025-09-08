import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Twitter } from 'lucide-react';
import Hospital from '../../assets/hospital01.webp';
import Doctors from '../../assets/doctors.jpg'
import Staff from '../../assets/staff.webp'




const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample slides data - in real implementation, these would be different architectural images
  const slides = [
    {
      id: 1,
      image: Hospital,
      title: "With the Touch of Archio",
      subtitle: "Discover your dream",
      description: "Delivering both full construction logistics and self-delivered preliminary solutions"
    },
    {
      id: 2,
      image: Doctors,
      title: "Modern Architecture Excellence",
      subtitle: "Building tomorrow",
      description: "Creating innovative spaces that blend functionality with aesthetic beauty"
    },
    {
      id: 3,
      image: Staff,
      title: "Sustainable Design Solutions",
      subtitle: "Future-focused",
      description: "Integrating eco-friendly practices with cutting-edge architectural innovation"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0' 
                : index < currentSlide 
                ? '-translate-x-full' 
                : 'translate-x-full'
            }`}
          >
            <img
              src={slide.image}
              alt={`Architecture ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>
          <div className="ml-4 text-white">
            <h1 className="text-2xl font-bold">RB+</h1>
          </div>
        </div>
      </header>

      

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-6">
          <div className="mb-6">
            <p className="text-sm md:text-base uppercase tracking-wider opacity-90 mb-4">
              {slides[currentSlide].subtitle}
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              With <span className="text-yellow-500">the</span> Touch
              <br />
              <span className="text-yellow-500">of</span> RB<span className="text-yellow-500">.</span>
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-8">
              {slides[currentSlide].description}
            </p>
            <button className="inline-flex items-center rounded-full bg-gray-800 text-white border border-yellow-500 px-6 py-3 hover:bg-white hover:text-black transition-colors">
              View more
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 bottom-20 z-20 w-12 h-12 border border-white text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute left-20 bottom-20 z-20 w-12 h-12 bg-white text-black hover:bg-yellow-500 transition-colors flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Bottom CTA Buttons */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-4">
        <button className="px-8 py-4 bg-transparent border rounded-2xl border-white text-white hover:bg-white hover:text-black transition-colors">
          Projects
        </button>
        <button className="px-8 py-4 bg-white rounded-2xl text-black hover:bg-yellow-500 transition-colors">
          Contact
        </button>
      </div>

     
    </div>
  );
};

export default HomePage;