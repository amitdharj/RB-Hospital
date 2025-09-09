import React, { useState, useEffect } from 'react';

const HealthCare = () => {
  const [activeTab, setActiveTab] = useState('Emergency Care');
  const [counters, setCounters] = useState({
    departments: 0,
    doctors: 0,
    patients: 0,
    experience: 0
  });

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { departments: 50, doctors: 200, patients: 50000, experience: 25 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          departments: Math.floor(targets.departments * progress),
          doctors: Math.floor(targets.doctors * progress),
          patients: Math.floor(targets.patients * progress),
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

    const element = document.getElementById('healthcare-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num;
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Images */}
          <div className="space-y-6">
            {/* Main Hospital Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                <img src="/hospital01.webp" alt="image" />
              </div>
              {/* Virtual Tour Button */}
              <div className="absolute bottom-4 left-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Virtual Tour</span>
                </button>
              </div>
            </div>

            {/* Bottom Row Images */}
            <div className="grid grid-cols-2 gap-6">
              {/* Doctor Image */}
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                <img src="doctors.jpg" alt="new" />
              </div>

              {/* Operating Room with Success Rate */}
              <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center">
                <div className="w-full h-full relative">
                    <img src="staff.webp" alt="" />
                </div>
                {/* Success Rate Badge */}
                <div className="absolute bottom-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div className="text-sm font-bold">98%</div>
                </div>
                <div className="absolute bottom-0 right-3 text-xs text-green-700 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Healthcare excellence,<br />
                <span className="text-blue-600">compassionate</span> care,<br />
                and smart <span className="text-green-600">foundation</span>
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our commitment to healthcare excellence drives us to provide comprehensive medical services with cutting-edge technology and compassionate care. We believe in healing through innovation and personal attention.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                With over two decades of experience in healthcare, our dedicated team of medical professionals ensures that every patient receives the highest quality treatment in a comfortable and safe environment.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {['Emergency Care', 'Specialized Treatment', 'Patient Care'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {activeTab === 'Emergency Care' && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600">
                    24/7 emergency medical services with state-of-the-art equipment and experienced medical professionals ready to handle any critical situation with utmost care and precision.
                  </p>
                </div>
              )}
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Doctors</h4>
                  <p className="text-sm text-gray-600">Certified specialists</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">24/7 Available</h4>
                  <p className="text-sm text-gray-600">Emergency services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div id="healthcare-stats" className="mt-20 pt-16 border-t border-gray-200 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Medical Departments */}
            <div className="text-center ">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-blue-400">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {counters.departments}+
              </div>
              <p className="text-gray-600 font-medium">Medical Departments</p>
            </div>

            {/* Expert Doctors */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {counters.doctors}+
              </div>
              <p className="text-gray-600 font-medium">Expert Doctors</p>
            </div>

            {/* Patients Treated */}
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {formatNumber(counters.patients)}+
              </div>
              <p className="text-gray-600 font-medium">Patients Treated</p>
            </div>

            {/* Years Experience */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
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

export default HealthCare;