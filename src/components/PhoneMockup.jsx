import React from 'react';

const PhoneMockup = ({ feature, isActive }) => {
  const phoneSize = "relative w-64 h-[32rem] sm:w-72 sm:h-[36rem] lg:w-80 lg:h-[40rem]";
  
  return (
    <div className="relative animate-fade-in">
      <div className={phoneSize}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-[2.5rem] shadow-2xl">
          <div className="absolute inset-2 rounded-[2rem] overflow-hidden bg-black">
            <div className="w-full h-full bg-gradient-to-b from-phone-pink via-phone-light to-phone-purple"></div>
            
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full border-2 border-gray-600"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pt-16 pb-8 px-4">
              <div className="text-sm font-medium mb-3 text-white/90 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {feature.title}
              </div>
              
              <div className="text-xl font-bold text-white drop-shadow-lg bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                {feature.heading}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
        </div>
        
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
