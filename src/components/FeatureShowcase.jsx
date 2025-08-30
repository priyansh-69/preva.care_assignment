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
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

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

  // touch gestures for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      
      const deltaX = touchStartX.current - touchEndX;
      const deltaY = touchStartY.current - touchEndY;
      
      // Only handle horizontal swipes if they're more horizontal than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          // Swipe left - next feature
          navigateFeature('next');
        } else {
          // Swipe right - previous feature
          navigateFeature('prev');
        }
      }
      
      touchStartX.current = 0;
      touchStartY.current = 0;
    };

    // Add touch event listeners
    const element = sectionRef.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeFeature]);

  // scroll behavior - fixed for strict requirements
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress through the section
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Section becomes sticky when it reaches the top
      if (sectionTop <= 0 && sectionBottom >= windowHeight) {
        setIsSticky(true);
        
        // Calculate progress through the sticky section (0 to 1)
        const stickyHeight = sectionHeight - windowHeight;
        const scrollDistance = Math.abs(sectionTop);
        const currentProgress = Math.min(scrollDistance / stickyHeight, 1);
        
        setScrollProgress(currentProgress);
        
        // Auto-advance features 1 → 5 based on scroll progress
        // Feature 1: 0-20% scroll, Feature 2: 20-40%, etc.
        const featureIndex = Math.floor(currentProgress * features.length);
        const clampedFeatureIndex = Math.min(featureIndex, features.length - 1);
        
        if (clampedFeatureIndex !== activeFeature && clampedFeatureIndex >= 0) {
          if (autoAdvanceTimeout.current) {
            clearTimeout(autoAdvanceTimeout.current);
          }
          
          autoAdvanceTimeout.current = setTimeout(() => {
            console.log(`Auto-advancing from Feature ${activeFeature + 1} to Feature ${clampedFeatureIndex + 1} (${Math.round(currentProgress * 100)}% scroll)`);
            setActiveFeature(clampedFeatureIndex);
          }, 50);
        }
      } else {
        // Section is not sticky
        setIsSticky(false);
        
        if (sectionTop > 0) {
          // Section is above viewport - no progress
          setScrollProgress(0);
        } else if (sectionBottom < windowHeight) {
          // Section is below viewport - full progress
          setScrollProgress(1);
        }
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
      className={`min-h-[150vh] bg-white transition-all duration-300 ${
        isSticky ? 'sticky top-0 z-10' : ''
      }`}
    >
      {/* progress bar - visible on all devices */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-feature-pink via-feature-purple to-feature-blue transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* sticky indicator - shows when section is sticky */}
      {isSticky && (
        <div className="fixed top-1 left-4 z-40 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
          Auto-Advance: Feature {activeFeature + 1} of {features.length} ({Math.round(scrollProgress * 100)}%)
        </div>
      )}

      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-16"
      >
        {/* mobile layout - improved */}
        <div className="lg:hidden">
          {/* Phone mockup at top */}
          <div className="flex justify-center mb-8">
            <PhoneMockup 
              feature={features[activeFeature]} 
              isActive={true}
            />
          </div>
          
          {/* Feature detail below phone */}
          <div className="mb-8">
            <FeatureDetail 
              feature={features[activeFeature]}
              onNavigate={navigateFeature}
            />
          </div>
          
          {/* Feature list at bottom */}
          <div>
            <FeatureList 
              features={features}
              activeFeature={activeFeature}
              onSelectFeature={selectFeature}
            />
          </div>
        </div>

        {/* desktop layout */}
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
        
        {/* Additional scroll space for sticky behavior */}
        <div className="h-32 lg:h-48"></div>
      </div>
    </div>
  );
}

export default FeatureShowcase;
