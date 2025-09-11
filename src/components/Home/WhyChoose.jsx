import React from 'react';
import { Play, ArrowUp } from 'lucide-react';

export default function WhyChoose() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image Section */}
           <div className="space-y-6">
            {/* Fun fact label */}
            <div className="text-amber-600 font-medium text-sm uppercase tracking-wide">
              Why Choose Us
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
          
          {/* Right Side - Content Section */}
          <div className="relative">
            {/* Main architectural image placeholder */}
            <img src="/Doctors01.webp" alt="image01" className="w-full h-full object-cover" />
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