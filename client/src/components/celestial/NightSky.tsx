import { useState } from "react";
import { celestialEvents, visibleObjects, skyInfo } from "@/lib/constants";
import GlowingCard from "@/components/ui/glowing-card";

interface NightSkyProps {
  location?: string;
  date?: string;
}

const NightSky: React.FC<NightSkyProps> = ({ 
  location = "Boston, MA", 
  date = "July 14, 2023" 
}) => {
  const [currentTime, setCurrentTime] = useState(21);
  
  // Format time as HH:MM [AM|PM]
  const formatTime = (hour: number) => {
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const amPm = hour >= 12 ? 'PM' : 'AM';
    return `${displayHour}:00 ${amPm}`;
  };

  return (
    <div className="space-card rounded-2xl p-6">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        <div className="lg:w-1/3">
          <h3 className="font-space font-medium mb-4">Celestial Events</h3>
          <div className="space-y-3">
            {celestialEvents.map((event, index) => (
              <div 
                key={index} 
                className={`space-card p-4 rounded-lg bg-opacity-40 border-l-4 ${event.borderColor}`}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">{event.name}</h4>
                  <span className={`text-xs ${event.statusColor}`}>{event.status}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">{event.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs">{event.location}</span>
                  <button className="text-xs text-space-blue">Set reminder</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button className="w-full py-2 space-card hover:bg-white/10 transition rounded text-sm flex items-center justify-center">
              <i className="fas fa-calendar-alt mr-2"></i>
              View Full Calendar
            </button>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-space font-medium">Sky View from Your Location</h3>
            <div className="flex items-center text-sm">
              <i className="fas fa-map-marker-alt text-space-red mr-1"></i>
              <span>{location}</span>
              <i className="fas fa-chevron-down ml-2 text-xs"></i>
            </div>
          </div>
          
          <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Night sky" 
              className="w-full h-full object-cover"
            />
            
            {/* Interactive Elements */}
            <div className="absolute inset-0">
              {/* Simplified celestial objects */}
              <div className="absolute" style={{ left: "25%", top: "30%" }}>
                <div className="h-3 w-3 rounded-full bg-yellow-300 animate-pulse"></div>
                <span className="text-xs absolute mt-1 ml-2">Venus</span>
              </div>
              <div className="absolute" style={{ left: "60%", top: "40%" }}>
                <div className="h-3 w-3 rounded-full bg-space-red animate-pulse"></div>
                <span className="text-xs absolute mt-1 ml-2">Mars</span>
              </div>
              <div className="absolute" style={{ left: "75%", top: "35%" }}>
                <div className="h-4 w-4 rounded-full bg-space-blue animate-pulse"></div>
                <span className="text-xs absolute mt-1 ml-2">Jupiter</span>
              </div>
            </div>
            
            {/* Controls overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <div className="space-card p-2 rounded-lg bg-opacity-70 flex space-x-2">
                <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition">
                  <i className="fas fa-arrows-alt"></i>
                </button>
                <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition">
                  <i className="fas fa-expand"></i>
                </button>
                <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition">
                  <i className="fas fa-layer-group"></i>
                </button>
              </div>
              
              <div className="space-card py-1 px-4 rounded-full bg-opacity-70 flex items-center">
                <span className="text-xs mr-2">Time:</span>
                <span className="font-mono">{formatTime(currentTime)} EDT</span>
                <input 
                  type="range" 
                  className="w-24 ml-2" 
                  min="0" 
                  max="24" 
                  value={currentTime} 
                  onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                />
              </div>
            </div>
            
            {/* Time info */}
            <div className="absolute top-4 right-4 space-card p-3 rounded-lg bg-opacity-70">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <p className="text-gray-300">Sunset</p>
                  <p className="font-mono">{skyInfo.sunset}</p>
                </div>
                <div>
                  <p className="text-gray-300">Sunrise</p>
                  <p className="font-mono">{skyInfo.sunrise}</p>
                </div>
                <div>
                  <p className="text-gray-300">Moon Phase</p>
                  <p className="font-mono">{skyInfo.moonPhase}</p>
                </div>
                <div>
                  <p className="text-gray-300">Visibility</p>
                  <p className="font-mono">{skyInfo.visibility}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visible objects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {visibleObjects.map((object, index) => (
              <div key={index} className="space-card p-2 rounded-lg bg-opacity-40 flex items-center">
                <div className={`w-8 h-8 rounded-full ${object.bgColor} flex items-center justify-center mr-2`}>
                  <i className={`${object.icon} ${object.color}`}></i>
                </div>
                <div>
                  <p className="text-sm font-medium">{object.name}</p>
                  <p className="text-xs text-gray-400">{object.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightSky;
