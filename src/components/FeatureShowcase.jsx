import React, { useCallback, useEffect, useRef, useState } from 'react';
import { features } from '../features';
import FeatureDetail from './FeatureDetail';
import FeatureList from './FeatureList';
import PhoneMockup from './PhoneMockup';

function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);
  const autoAdvanceTimeout = useRef(null);

  // arrow keys
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateFeature('prev');
      } else if (e.key === 'ArrowRight') {
        navigateFeature('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeFeature]);

  // scroll stuff
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));
      
      setScrollProgress(progress);

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        setIsSticky(true);
        
        const targetFeature = Math.floor(progress * features.length);
        if (targetFeature !== activeFeature && targetFeature < features.length) {
          if (autoAdvanceTimeout.current) {
            clearTimeout(autoAdvanceTimeout.current);
          }
          
          autoAdvanceTimeout.current = setTimeout(() => {
            setActiveFeature(targetFeature);
          }, 100);
        }
      } else {
        setIsSticky(false);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (autoAdvanceTimeout.current) {
        clearTimeout(autoAdvanceTimeout.current);
      }
    };
  }, [activeFeature]);

  const navigateFeature = useCallback((direction) => {
    setActiveFeature(prev => {
      if (direction === 'next') {
        return prev === features.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? features.length - 1 : prev - 1;
      }
    });
  }, []);

  const selectFeature = useCallback((index) => {
    setActiveFeature(index);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen bg-white transition-all duration-300 ${
        isSticky ? 'sticky top-0 z-10' : ''
      }`}
    >
      {/* progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-feature-pink via-feature-purple to-feature-blue transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        {/* mobile */}
        <div className="lg:hidden space-y-8">
          <div className="flex justify-center">
            <PhoneMockup 
              feature={features[activeFeature]} 
              isActive={true}
            />
          </div>
          
          <div className="text-center">
            <FeatureDetail 
              feature={features[activeFeature]}
              onNavigate={navigateFeature}
            />
          </div>
          
          <div>
            <FeatureList 
              features={features}
              activeFeature={activeFeature}
              onSelectFeature={selectFeature}
            />
          </div>
        </div>

        {/* desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center">
          <div className="col-span-1">
            <FeatureDetail 
              feature={features[activeFeature]}
              onNavigate={navigateFeature}
            />
          </div>
          
          <div className="col-span-1 flex justify-center">
            <PhoneMockup 
              feature={features[activeFeature]} 
              isActive={true}
            />
          </div>
          
          <div className="col-span-1">
            <FeatureList 
              features={features}
              activeFeature={activeFeature}
              onSelectFeature={selectFeature}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureShowcase;
