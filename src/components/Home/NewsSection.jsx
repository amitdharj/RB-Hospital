import React from 'react';

const News = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-600 text-sm font-medium tracking-widest uppercase mb-4">
            Recent News
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our news can give you<br />
            information for <span className="text-yellow-600">foundation</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mt-6"></div>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Architecture */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400">
                {/* Modern architecture placeholder with geometric lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <div className="absolute top-8 left-8 w-32 h-1 bg-gray-600 transform rotate-12"></div>
                    <div className="absolute top-12 right-12 w-24 h-1 bg-gray-700 transform -rotate-6"></div>
                    <div className="absolute bottom-16 left-16 w-40 h-1 bg-gray-500 transform rotate-45"></div>
                    <div className="absolute bottom-8 right-8 w-20 h-20 border-4 border-gray-600 transform rotate-12"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-gray-500 text-sm mb-4">
                by Riva Collins / August 18, 2018
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                Job opportunity<br />in architecture
              </h3>
              <a 
                href="#" 
                className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors"
              >
                read more 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 - Hiring */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-gray-800">
                {/* Modern geometric design with neon triangle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Neon triangle effect */}
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 border-4 border-red-500 transform rotate-12 shadow-lg shadow-red-500/50">
                        <div className="w-full h-full bg-red-500/20"></div>
                      </div>
                      <div className="absolute top-2 left-2 w-16 h-16 border-2 border-red-400 transform -rotate-6 shadow-md shadow-red-400/30"></div>
                    </div>
                    {/* Background geometric elements */}
                    <div className="absolute -top-8 -right-8 w-12 h-12 bg-teal-400 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-400 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-gray-500 text-sm mb-4">
                by Riva Collins / July 18, 2018
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                We want to hire<br />someone for job
              </h3>
              <a 
                href="#" 
                className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors"
              >
                read more 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        

        {/* Scroll to top button */}
        <div className="fixed bottom-8 right-8">
          <button className="w-12 h-12 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;