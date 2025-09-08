import React from 'react';
import { Play, ArrowUp } from 'lucide-react';

export default function WhyChoose() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image Section */}
          <div className="relative">
            {/* Main architectural image placeholder */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300 h-96 lg:h-[500px] relative">
                {/* Wooden curved structure simulation */}
                <div className="absolute inset-0">
                  {/* Curved wooden beams */}
                  <div className="absolute top-8 left-8 w-32 h-8 bg-amber-800 rounded-full transform rotate-12 opacity-80"></div>
                  <div className="absolute top-16 left-12 w-28 h-6 bg-amber-900 rounded-full transform rotate-6 opacity-70"></div>
                  <div className="absolute top-24 left-8 w-32 h-8 bg-amber-800 rounded-full transform rotate-12 opacity-80"></div>
                  
                  {/* Glass panels simulation */}
                  <div className="absolute top-12 right-8 w-24 h-16 bg-blue-200 opacity-60 rounded"></div>
                  <div className="absolute top-32 right-12 w-20 h-12 bg-blue-300 opacity-50 rounded"></div>
                  <div className="absolute top-52 right-8 w-24 h-16 bg-blue-200 opacity-60 rounded"></div>
                </div>
                
                {/* Geometric overlay */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-100 opacity-90">
                  <div className="grid grid-cols-8 grid-rows-8 h-full gap-px p-2">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="bg-white opacity-80"></div>
                    ))}
                  </div>
                </div>
                
                {/* Dotted pattern overlay */}
                <div className="absolute right-4 top-1/4 h-1/2 w-px">
                  <div className="flex flex-col space-y-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* View now button */}
              <div className="absolute bottom-6 left-6">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200">
                  <span className="font-medium">View now</span>
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content Section */}
          <div className="space-y-6">
            {/* Fun fact label */}
            <div className="text-amber-600 font-medium text-sm uppercase tracking-wide">
              Fun fact
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Archio's real estate,{' '}
              <span className="block">technical skills, network</span>
              <span className="block">
                and smart <span className="text-amber-600">foundation</span>
              </span>
            </h2>
            
            {/* Decorative line */}
            <div className="w-16 h-1 bg-amber-600"></div>
            
            {/* Description paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The argument in favor of using filler text goes something like this: If you 
                use real content in the <span className="underline decoration-amber-600">design process</span>, anytime you reach a review point 
                you'll end up reviewing and negotiating the content itself and not the 
                design.
              </p>
              
              <p>
                Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim 
                sim mi quis neque interdum, quis porta sem finibus.
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll to top button
        <div className="fixed bottom-6 right-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}