import React from 'react';

function FeatureList({ features, activeFeature, onSelectFeature }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Feature Showcase
      </h3>
      
      <div className="space-y-3">
        {features.map((feature, index) => {
          const isActive = index === activeFeature;
          
          return (
            <button
              key={feature.id}
              onClick={() => onSelectFeature(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-feature-blue focus:ring-offset-2 ${
                isActive
                  ? 'bg-blue-50 border-l-4 border-feature-blue pl-4'
                  : 'hover:bg-gray-50 pl-4'
              }`}
              aria-label={`Select ${feature.title}`}
              aria-pressed={isActive}
            >
              <div className="flex items-center space-x-3">
                {isActive && (
                  <div className="w-1 h-8 bg-feature-blue rounded-full flex-shrink-0"></div>
                )}
                
                <div className={`flex-1 transition-all duration-200 ${
                  isActive ? 'ml-2' : 'ml-6'
                }`}>
                  <div className={`font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-gray-900 text-base' 
                      : 'text-gray-600 text-sm'
                  }`}>
                    LOREM IPSUM {feature.id}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureList;
