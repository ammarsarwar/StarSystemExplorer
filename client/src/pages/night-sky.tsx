import { useState } from "react";
import NightSky from "@/components/celestial/NightSky";
import GlowingCard from "@/components/ui/glowing-card";

const NightSkyPage = () => {
  const [currentDate, setCurrentDate] = useState("July 14, 2023");
  
  return (
    <div className="p-4 lg:p-8">
      {/* Night Sky Tonight */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-space text-2xl font-bold">Night Sky Tonight</h2>
          <div className="space-card px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
            <i className="fas fa-calendar-day"></i>
            <span>{currentDate}</span>
            <i className="fas fa-chevron-down ml-2 text-xs"></i>
          </div>
        </div>
        
        <NightSky location="Boston, MA" date={currentDate} />
      </section>
      
      {/* Additional Content */}
      <section className="mb-8">
        <h2 className="font-space text-2xl font-bold mb-6">Photography Tips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowingCard>
            <h3 className="font-space text-xl font-medium mb-4">Astrophotography Basics</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-space-blue/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i className="fas fa-camera text-space-blue"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Use a Tripod</h4>
                  <p className="text-sm text-gray-300">
                    Stability is crucial. Use a sturdy tripod to eliminate camera shake during long exposures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i className="fas fa-clock text-space-purple"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Long Exposure</h4>
                  <p className="text-sm text-gray-300">
                    Start with exposures of 15-30 seconds to capture more stars. Use the 500 rule to avoid star trails.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-space-green/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i className="fas fa-sliders-h text-space-green"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Manual Settings</h4>
                  <p className="text-sm text-gray-300">
                    Use manual focus and a wide aperture (f/2.8 or wider). Set ISO between 1600-3200 based on light pollution.
                  </p>
                </div>
              </div>
            </div>
          </GlowingCard>
          
          <GlowingCard>
            <h3 className="font-space text-xl font-medium mb-4">Best Viewing Conditions</h3>
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-space-red/20 flex items-center justify-center mr-3">
                  <i className="fas fa-map-marker-alt text-space-red"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Light Pollution Map</h4>
                  <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 w-[60%]"></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>Rural</span>
                    <span>Suburban</span>
                    <span>Urban</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4">
                For the best stargazing experience, try to find locations with minimal light pollution. The current location has moderate light pollution conditions.
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="space-card p-3 rounded-lg bg-opacity-40 text-center">
                  <p className="text-xs text-gray-400">Moon Phase</p>
                  <p className="font-medium">Waning Gibbous</p>
                </div>
                <div className="space-card p-3 rounded-lg bg-opacity-40 text-center">
                  <p className="text-xs text-gray-400">Visibility</p>
                  <p className="font-medium">Good (8/10)</p>
                </div>
                <div className="space-card p-3 rounded-lg bg-opacity-40 text-center">
                  <p className="text-xs text-gray-400">Humidity</p>
                  <p className="font-medium">45%</p>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 bg-space-blue/20 hover:bg-space-blue/30 transition rounded text-sm flex items-center justify-center">
                <i className="fas fa-location-arrow mr-2"></i>
                Find Dark Sky Sites
              </button>
            </div>
          </GlowingCard>
        </div>
      </section>
    </div>
  );
};

export default NightSkyPage;
