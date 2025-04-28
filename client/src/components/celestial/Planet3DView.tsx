import { useEffect, useState } from "react";
import { planets } from "@/lib/constants";

interface Planet3DProps {
  planetId: string;
}

// Simplified 2D Planet Viewer component
const Planet3DView = ({ planetId }: Planet3DProps) => {
  const [rotation, setRotation] = useState(0);
  const planet = planets.find(p => p.id === planetId) || planets[3]; // Default to Mars

  // Simple rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(r => (r + 1) % 360);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-[280px] w-full flex items-center justify-center bg-black/30 rounded-xl">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>
      
      {/* Planet */}
      <div 
        className="relative rounded-full flex items-center justify-center"
        style={{ 
          width: '160px', 
          height: '160px',
          backgroundColor: planet.color,
          boxShadow: `0 0 30px ${planet.color}80`,
          transform: `rotate(${rotation}deg)`
        }}
      >
        {/* Planet grid overlay - No Man's Sky style */}
        <div className="absolute inset-0 rounded-full grid-overlay">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <circle cx="80" cy="80" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="10" y1="80" x2="150" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="80" y1="10" x2="80" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <path d="M80,10 A70,70 0 0,1 150,80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M80,10 A70,70 0 0,0 10,80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="5,5" />
          </svg>
        </div>
      </div>
      
      {/* Hover points */}
      <div className="absolute" style={{ left: "42%", top: "35%" }}>
        <div className="h-3 w-3 rounded-full bg-space-blue animate-ping absolute"></div>
        <div className="h-3 w-3 rounded-full bg-white"></div>
      </div>
      <div className="absolute" style={{ left: "58%", top: "50%" }}>
        <div className="h-3 w-3 rounded-full bg-space-yellow animate-ping absolute"></div>
        <div className="h-3 w-3 rounded-full bg-white"></div>
      </div>
      
      {/* Planet name */}
      <div className="absolute bottom-3 font-space text-xl font-bold text-center text-glow">
        {planet.name}
      </div>
    </div>
  );
};

export default Planet3DView;
