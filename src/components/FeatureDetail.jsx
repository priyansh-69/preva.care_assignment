import React from 'react';

function FeatureDetail({ feature, onNavigate }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-feature-blue font-medium text-sm sm:text-base tracking-wide">
        {feature.title}
      </div>
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
        {feature.heading}
      </h2>
      
      <div className="space-y-3">
        {feature.description.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-feature-blue rounded-full mt-2"></div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex items-center space-x-4 pt-4">
        <button
          onClick={() => onNavigate('prev')}
          className="group p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-feature-blue focus:ring-offset-2"
          aria-label="Previous feature"
        >
          <svg 
            className="w-6 h-6 text-gray-700 group-hover:text-feature-blue transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
        
        <div className="w-8 h-px bg-gray-300"></div>
        
        <button
          onClick={() => onNavigate('next')}
          className="group p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-feature-blue focus:ring-offset-2"
          aria-label="Next feature"
        >
          <svg 
            className="w-6 h-6 text-gray-700 group-hover:text-feature-blue transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeatureDetail;
