import { useState } from "react";
import { zodiacSigns } from "@/lib/constants";
import GlowingCard from "@/components/ui/glowing-card";
import ConstellationLine from "@/components/ui/constellation-line";

interface ConstellationViewerProps {
  initialConstellation?: string;
}

const ConstellationViewer: React.FC<ConstellationViewerProps> = ({
  initialConstellation = "aries",
}) => {
  const [selectedConstellation, setSelectedConstellation] = useState(
    zodiacSigns.find((sign) => sign.id === initialConstellation) || zodiacSigns[0]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Constellation Selector */}
      <div className="space-card rounded-2xl p-6 lg:col-span-2">
        <h3 className="font-space font-medium mb-4">Explore Zodiac Signs</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.id}
              className={`space-card p-2 rounded-lg flex flex-col items-center justify-center transition group ${
                selectedConstellation.id === sign.id
                  ? "bg-space-purple/20"
                  : "hover:bg-space-purple/20"
              }`}
              onClick={() => setSelectedConstellation(sign)}
            >
              <i
                className={`${sign.icon} text-xl mb-1 ${
                  selectedConstellation.id === sign.id ? "text-space-purple" : "group-hover:text-space-purple"
                }`}
              ></i>
              <span className="text-xs">{sign.name}</span>
            </button>
          ))}
        </div>
        
        <div className="space-card p-4 rounded-lg bg-opacity-40">
          <h4 className="font-space text-lg font-medium mb-2">{selectedConstellation.name} Facts</h4>
          <div className="space-y-2 text-sm">
            <p>{selectedConstellation.description}</p>
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div>
                <p className="text-gray-400">Right ascension</p>
                <p className="font-mono">{selectedConstellation.rightAscension}</p>
              </div>
              <div>
                <p className="text-gray-400">Declination</p>
                <p className="font-mono">{selectedConstellation.declination}</p>
              </div>
              <div>
                <p className="text-gray-400">Area</p>
                <p className="font-mono">{selectedConstellation.area}</p>
              </div>
              <div>
                <p className="text-gray-400">Brightest star</p>
                <p className="font-mono">{selectedConstellation.brightestStar}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Constellation Viewer */}
      <div className="space-card rounded-2xl overflow-hidden lg:col-span-5 relative" style={{ minHeight: "500px" }}>
        {/* Background stars */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Night sky"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-space text-3xl font-bold text-glow-blue">{selectedConstellation.name.toUpperCase()}</h3>
              <p className="text-gray-300">{selectedConstellation.dateRange}</p>
            </div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full space-card flex items-center justify-center hover:bg-white/10 transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="w-10 h-10 rounded-full space-card flex items-center justify-center hover:bg-white/10 transition">
                <i className="fas fa-share"></i>
              </button>
            </div>
          </div>
          
          {/* Constellation Display */}
          <div className="mt-8 flex items-center justify-center h-[300px] relative">
            {/* SVG Constellation */}
            <svg width="400" height="300" viewBox="0 0 400 300" className="relative z-20">
              {/* Stars */}
              {selectedConstellation.stars.map((star, index) => (
                <circle
                  key={index}
                  cx={star.x}
                  cy={star.y}
                  r={star.size}
                  fill="white"
                  className="star"
                />
              ))}
              
              {/* Connection Lines */}
              {selectedConstellation.lines.map((line, index) => {
                const fromStar = selectedConstellation.stars[line.from];
                const toStar = selectedConstellation.stars[line.to];
                return (
                  <ConstellationLine
                    key={index}
                    x1={fromStar.x}
                    y1={fromStar.y}
                    x2={toStar.x}
                    y2={toStar.y}
                  />
                );
              })}
              
              {/* Star Names */}
              {selectedConstellation.stars.map((star, index) => (
                <text
                  key={`name-${index}`}
                  x={star.x - 10}
                  y={star.y - 10}
                  fill="white"
                  fontSize="10"
                  className="font-space"
                >
                  {star.name}
                </text>
              ))}
            </svg>
            
            {/* Historical Illustration */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-30 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt={`${selectedConstellation.name} historical illustration`}
                className="max-h-full"
              />
            </div>
          </div>
          
          {/* Info Tags */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
            {selectedConstellation.borders.map((border, index) => (
              <div
                key={index}
                className="space-card py-1 px-3 rounded-full text-xs bg-opacity-70 flex items-center"
              >
                <i className={`fas fa-tag mr-1 ${index % 4 === 0 ? 'text-space-purple' : index % 4 === 1 ? 'text-space-blue' : index % 4 === 2 ? 'text-space-green' : 'text-space-yellow'}`}></i>
                <span>{border} border</span>
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <div className="absolute top-6 right-6 space-card p-2 rounded-lg flex items-center space-x-1 bg-opacity-70">
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition">
              <i className="fas fa-arrows-alt"></i>
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition">
              <i className="fas fa-expand"></i>
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition">
              <i className="fas fa-info"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstellationViewer;
