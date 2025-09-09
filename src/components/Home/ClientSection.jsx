import React, { useState, useEffect } from 'react';

const ClientSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Assuming 3 slides
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Counter animation
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    experience: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 150, projects: 300, satisfaction: 98, experience: 5 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          experience: Math.floor(targets.experience * progress)
        });

        if (step >= steps) {
          setCounters(targets);
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Clients
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We depends on our<br />
                trusted <span className="text-yellow-600">clients</span>
              </h2>
              <div className="w-16 h-1 bg-yellow-600 mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our success is built on the trust and partnership of our<br />
                valued clients who believe in our vision and expertise.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setCurrentSlide((currentSlide + 1) % 3)}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-yellow-600 w-8' 
                      : 'bg-gray-300 w-4'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Awards Grid */}
          <div className="grid grid-cols-2 gap-6 ">
            {/* Award 1 - LeanLaion Unique Design */}
            <div className="text-center space-y-4 ">
              <div className="bg-gray-400 h-32 rounded-lg flex items-center justify-center hover:bg-gradient-to-bl from-blue-300 to-blue-500 hover:scale-110 transition-transform">
                <div className="text-white text-center">
                  <div className="text-xs opacity-75 mb-1">★★</div>
                  <div className="font-medium text-sm">LeanLaion</div>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Unique Design</p>
            </div>

            {/* Award 2 - Excellence 2015 */}
            <div className="text-center space-y-4">
              <div className="bg-gray-400 h-32 rounded-lg flex items-center justify-center  hover:bg-gradient-to-bl from-blue-300 to-blue-500 hover:scale-110 transition-transform">
                <div className="text-white text-center">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs font-bold">2015</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Excellence 2015</p>
            </div>

            {/* Award 3 - LeanLaion Special Design */}
            <div className="text-center space-y-4">
              <div className="bg-gray-400 h-32 rounded-lg flex items-center justify-center  hover:bg-gradient-to-bl from-blue-300 to-blue-500 hover:scale-110 transition-transform">
                <div className="text-white text-center">
                  <div className="text-xs opacity-75 mb-1">★★</div>
                  <div className="font-medium text-sm">LeanLaion</div>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Special Design</p>
            </div>

            {/* Award 4 - LeanLaion Creative Graphic */}
            <div className="text-center space-y-4">
              <div className="bg-gray-400 h-32 rounded-lg flex items-center justify-center  hover:bg-gradient-to-bl from-blue-300 to-blue-500 hover:scale-110 transition-transform">
                <div className="text-white text-center">
                  <div className="text-xs opacity-75 mb-1">★★</div>
                  <div className="font-medium text-sm">LeanLaion</div>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Creative Graphic</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div id="stats-section" className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Happy Clients */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {counters.clients}+
              </div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>

            {/* Projects Completed */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {counters.projects}+
              </div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {counters.satisfaction}%
              </div>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>

            {/* Years Experience */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {counters.experience}+
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;