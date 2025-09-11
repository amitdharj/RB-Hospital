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
      <div className=" display flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className=" display flex flex-col gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-1">
            {/* Header */}
            <div>
              <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Clients
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
                We depends on our<br />
                trusted <span className="text-yellow-600">clients</span>
              </h2>
              <div className="w-20 h-1 bg-yellow-600 mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our success is built on the trust and partnership of our<br />
                valued clients who believe in our vision and expertise.
              </p>
            </div>
          </div>

          {/* Right Content - Auto sliding client boxes */}
          <div className="w-full px-4 sm:px-0">
            {/* Inline style keyframes for continuous sliding */}
            <style>{`
              .pause-animation:hover { animation-play-state: paused; }
              @keyframes slideClients {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>

            <div className="overflow-hidden w-full pl-0">
              <div
                className="flex items-stretch space-x-3 hover:pause-animation justify-start will-change-transform"
                style={{
                  animation: 'slideClients 10s linear infinite'
                }}
              >
                {
                  // duplicate the items to create a seamless loop
                }
                {[
                  { title: 'LeanLaion', label: 'Unique Design', badge: '★★' },
                  { title: '2015', label: 'Excellence 2015', badge: null },
                  { title: 'LeanLaion', label: 'Special Design', badge: '★★' },
                  { title: 'LeanLaion', label: 'Creative Graphic', badge: '★★' }
                ].concat([
                  { title: 'LeanLaion', label: 'Unique Design', badge: '★★' },
                  { title: '2015', label: 'Excellence 2015', badge: null },
                  { title: 'LeanLaion', label: 'Special Design', badge: '★★' },
                  { title: 'LeanLaion', label: 'Creative Graphic', badge: '★★' },
                  { title: 'LeanLaion', label: 'Unique Design', badge: '★★' },
                  { title: '2015', label: 'Excellence 2015', badge: null },
                  { title: 'LeanLaion', label: 'Special Design', badge: '★★' },
                  { title: 'LeanLaion', label: 'Creative Graphic', badge: '★★' }
                ]).map((a, idx) => (
                  <div key={idx} className="w-36 sm:w-44 md:w-48 flex-shrink-0 text-center space-y-3">
                    <div className="bg-gray-400 h-28 sm:h-32 rounded-lg flex items-center justify-center hover:bg-gradient-to-bl from-blue-300 to-blue-500 hover:scale-110 transition-transform">
                      <div className="text-white text-center">
                        {a.badge && <div className="text-xs opacity-75 mb-1">{a.badge}</div>}
                        {a.title === '2015' ? (
                          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-1">
                            <span className="text-xs font-bold">2015</span>
                          </div>
                        ) : (
                          <div className="font-medium text-sm">{a.title}</div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium">{a.label}</p>
                  </div>
                ))}
              </div>
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