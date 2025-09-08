
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import hospital from '../../assets/hospital01.webp';
import doctors from '../../assets/doctors.jpg';
import image03 from '../../assets/image03.jpg';



export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(1); // Middle slide active by default

  const slides = [
    {
      id: 1,
      title: "Fantastic interior",
      category: "Hotel",
      image: hospital
    },
    {
      id: 2,
      title: "Mendella exterior",
      category: "Hall",
      image: doctors
    },
    {
      id: 3,
      title: "Scott Villa du",
      category: "Residence",
      image: image03
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlideBackground = (index) => {
    if (index === 0) {
      return (
        <div className="absolute inset-0">
          {/* Modern Interior - Glass ceiling structure */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 opacity-20">
            <div className="grid grid-cols-6 grid-rows-4 h-full gap-px">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="bg-blue-200 opacity-60"></div>
              ))}
            </div>
          </div>
          
          {/* Vertical structural elements */}
          <div className="absolute left-8 top-1/4 w-1 h-1/2 bg-gray-300 opacity-60"></div>
          <div className="absolute left-12 top-1/3 w-px h-1/3 bg-gray-400 opacity-50"></div>
          <div className="absolute right-8 top-1/4 w-1 h-1/2 bg-gray-300 opacity-60"></div>
          
          {/* Diagonal architectural lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-400 opacity-30 transform rotate-12"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gray-300 opacity-25 transform -rotate-6"></div>
        </div>
      );
    } else if (index === 1) {
      return (
        <div className="absolute inset-0">
          {/* Geometric Exterior - Tile pattern */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px p-4 opacity-85">
            {Array.from({ length: 48 }).map((_, i) => (
              <div 
                key={i} 
                className={`bg-gray-300 ${i % 7 === 0 ? 'bg-gray-500' : ''} ${i % 11 === 0 ? 'bg-gray-200' : ''}`}
              ></div>
            ))}
          </div>
          
          {/* Curved architectural elements */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-gray-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-gray-300 rounded-full opacity-25"></div>
          
          {/* Angular shadows */}
          <div className="absolute bottom-0 left-0 w-full h-1/4  opacity-15 transform skew-x-12"></div>
        </div>
      );
    } else {
      return (
        <div className="absolute inset-0">
          {/* Wooden Structure - Curved beams */}
          <div className="absolute top-8 right-4 w-24 h-12 bg-amber-700 rounded-full transform rotate-12 opacity-60"></div>
          <div className="absolute top-20 right-6 w-20 h-10 bg-amber-800 rounded-full transform rotate-6 opacity-50"></div>
          <div className="absolute top-32 right-4 w-24 h-12 bg-amber-700 rounded-full transform rotate-12 opacity-60"></div>
          
          {/* Glass cutout shapes */}
          <div className="absolute top-12 right-8 w-12 h-6 bg-blue-200 rounded-full opacity-40"></div>
          <div className="absolute top-24 right-10 w-10 h-5 bg-blue-300 rounded-full opacity-35"></div>
          <div className="absolute top-36 right-8 w-12 h-6 bg-blue-200 rounded-full opacity-40"></div>
          
          {/* Rivets/bolts pattern */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-amber-900 rounded-full opacity-70"
              style={{
                top: `${15 + (i % 4) * 12}%`,
                right: `${8 + Math.floor(i / 4) * 6}%`
              }}
            ></div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Three Column Grid */}
      <div className="grid grid-cols-3 h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative transition-all duration-300 ${
              index === currentSlide ? 'scale-105 z-10' : 'scale-100'
            }`}
          >
            {/* Background Image with hover effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform hover:scale-110"
              />
            </div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
              <div className="text-amber-500 uppercase text-xs lg:text-sm font-medium tracking-widest mb-2 lg:mb-4">
                {slide.category}
              </div>
              <h2 className="text-white text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                {slide.title}
              </h2>
              
              {/* Envato Badge - only on first slide */}
              {index === 0 && (
                <div className="mt-4 lg:mt-6">
                  <div className=" text-white px-4 py-2 rounded-full inline-flex items-center space-x-2 text-xs lg:text-sm">
                    <span>Buy on</span>
                    <span className="font-bold">envato</span>
                  </div>
                </div>
              )}
              
              {/* Description text for Scott Villa */}
              {index === 2 && (
                <p className="text-gray-200 text-sm lg:text-base leading-relaxed mt-4 max-w-xs">
                  Lorem ipsum dolor sit amet, Deora consectetur adipisicing.
                </p>
              )}
            </div>
            
            {/* Hover overlay for non-active slides */}
            {index !== currentSlide && (
              <div className="absolute inset-0 bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 cursor-pointer z-20"
                   onClick={() => setCurrentSlide(index)}></div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12  bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200 z-30"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200 z-30"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-amber-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      

      {/* URL indicator - visible when Scott Villa is active */}
      {currentSlide === 2 && (
        <div className="absolute bottom-2 lg:bottom-4 left-4 lg:left-8 text-xs text-white opacity-50 z-30">
          https://demo.casethemes.net/archio/portfolio/scott-villa-du/
        </div>
      )}
    </div>
  );
}