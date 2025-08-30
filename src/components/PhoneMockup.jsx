import React from 'react';

const PhoneMockup = ({ feature, isActive }) => {
  const phoneSize = "relative w-56 h-[28rem] sm:w-64 sm:h-[32rem] md:w-72 md:h-[36rem] lg:w-80 lg:h-[40rem]";
  
  return (
    <div className="relative animate-fade-in">
      <div className={`${phoneSize} bg-white rounded-3xl p-2 shadow-2xl border-2 border-gray-100`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl">
          <div className="absolute inset-1.5 sm:inset-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black">
            <div className="w-full h-full bg-gradient-to-b from-phone-pink via-phone-light to-phone-purple"></div>
            
            <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-24 h-7 sm:w-28 sm:h-8 bg-black rounded-full border-2 border-gray-600"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pt-14 sm:pt-16 pb-6 sm:pb-8 px-3 sm:px-4">
              <div className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-white/90 bg-black/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm">
                {feature.title}
              </div>
              
              <div className="text-base sm:text-lg lg:text-xl font-bold text-white drop-shadow-lg bg-black/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm">
                {feature.heading}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-1 bg-white rounded-full opacity-60"></div>
        </div>
        
        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
