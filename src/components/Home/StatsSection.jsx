import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function StatsSection() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    projects: 0,
    teamMembers: 0,
    pendingWork: 0,
    experience: 0
  });

  const finalNumbers = {
    years: 15,
    projects: 155,
    teamMembers: 18,
    pendingWork: 25,
    experience: 15
  };

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setAnimatedNumbers({
          years: Math.round(finalNumbers.years * easeOutProgress),
          projects: Math.round(finalNumbers.projects * easeOutProgress),
          teamMembers: Math.round(finalNumbers.teamMembers * easeOutProgress),
          pendingWork: Math.round(finalNumbers.pendingWork * easeOutProgress),
          experience: Math.round(finalNumbers.experience * easeOutProgress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedNumbers(finalNumbers);
        }
      }, stepTime);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  // Generate geometric background pattern
  const geometricShapes = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    rotation: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'square' : 'triangle'
  }));

  return (
    <div className="relative min-h-screen bg-gray-700 overflow-hidden">
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {geometricShapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute transition-all duration-1000 ${
              shape.shape === 'square' 
                ? 'bg-gray-700' 
                : 'bg-gray-500'
            }`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              opacity: shape.opacity,
              transform: `rotate(${shape.rotation}deg)`,
              clipPath: shape.shape === 'triangle' 
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                : 'none'
            }}
          />
        ))}
        
        {/* Additional layered geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-400 opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gray-500 opacity-25 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gray-600 opacity-15 transform -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Statistics */}
          <div className="space-y-8">
            
            {/* Years Badge */}
            <div className="border-2 border-amber-500 p-8 max-w-xs">
              
              <div className="text-white text-8xl lg:text-9xl font-bold leading-none ml-8">
                {animatedNumbers.years}
              </div>
              <div className="text-white text-xl font-medium ml-8 mt-2">
                years
              </div>
            </div>

            {/* Business Description */}
            <div className="text-white space-y-2 max-w-md">
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                Our established
              </h3>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                business in
              </h3>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                8 countries
              </h3>
            </div>

          </div>

          {/* Right Side - Brand and Statistics Grid */}
          <div className="space-y-12">
            
            {/* Brand Logo */}
            <div className="text-center">
              <h1 className="text-white text-6xl lg:text-7xl font-light">
                R.B<span className="text-amber-500">.</span>
              </h1>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              
              {/* Projects Done */}
              <div className="text-center">
                <div className="text-white text-5xl lg:text-6xl font-bold">
                  {animatedNumbers.projects}<span className="text-amber-500 text-4xl">+</span>
                </div>
                <div className="text-gray-300 text-sm lg:text-base mt-2">
                  project done
                </div>
              </div>

              {/* Pending Work */}
              <div className="text-center">
                <div className="text-white text-5xl lg:text-6xl font-bold">
                  {animatedNumbers.pendingWork}<span className="text-amber-500 text-4xl">+</span>
                </div>
                <div className="text-gray-300 text-sm lg:text-base mt-2">
                  pending work
                </div>
              </div>

              {/* Group Members */}
              <div className="text-center">
                <div className="text-white text-5xl lg:text-6xl font-bold">
                  {animatedNumbers.teamMembers}<span className="text-amber-500 text-4xl">+</span>
                </div>
                <div className="text-gray-300 text-sm lg:text-base mt-2">
                  group member
                </div>
              </div>

              {/* Years Experience */}
              <div className="text-center">
                <div className="text-white text-5xl lg:text-6xl font-bold">
                  {animatedNumbers.experience}<span className="text-amber-500 text-4xl">+</span>
                </div>
                <div className="text-gray-300 text-sm lg:text-base mt-2">
                  years experience
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      

      {/* Scroll to Top Button
      <div className="absolute bottom-6 right-6">
        <button className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div> */}

    </div>
  );
}