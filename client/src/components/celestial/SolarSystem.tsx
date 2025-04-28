import { useState } from "react";
import { planets } from "@/lib/constants";
import { Link } from "wouter";
import GlowingCard from "@/components/ui/glowing-card";

// Simplified 2D Planet component
const Planet2D = ({ 
  planet, 
  index, 
  isSelected, 
  onClick 
}: { 
  planet: typeof planets[0];
  index: number;
  isSelected: boolean;
  onClick: () => void;
}) => {
  // Calculate position in a circle layout
  const angle = (index * 2 * Math.PI) / planets.length;
  const radius = 140; // Pixels
  const left = 50 + Math.cos(angle) * radius;
  const top = 50 + Math.sin(angle) * radius;
  
  return (
    <div 
      className={`absolute transition-transform duration-500 cursor-pointer hover:scale-110
        ${isSelected ? 'scale-125' : ''}`}
      style={{ 
        left: `${left}%`, 
        top: `${top}%`, 
        transform: 'translate(-50%, -50%)',
        zIndex: isSelected ? 5 : 1 
      }}
      onClick={onClick}
    >
      {/* Orbit line - render as a faded circle */}
      <div 
        className="absolute rounded-full border border-white/10"
        style={{ 
          width: `${radius * 2}px`, 
          height: `${radius * 2}px`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.3,
          zIndex: 0
        }}
      ></div>
      
      {/* Planet */}
      <div 
        className="planet rounded-full flex items-center justify-center relative animate-pulse-slow"
        style={{ 
          width: `${planet.size / 2}px`, 
          height: `${planet.size / 2}px`,
          backgroundColor: planet.color,
          boxShadow: `0 0 20px ${planet.color}80`
        }}
      >
        <div className="font-space text-[8px] font-bold text-center absolute -bottom-5 whitespace-nowrap">
          {planet.name}
        </div>
      </div>
    </div>
  );
};

// Sun component - at the center
const Sun2D = () => {
  return (
    <div 
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 animate-pulse"
      style={{ width: '80px', height: '80px', boxShadow: '0 0 40px rgba(255, 255, 0, 0.7)' }}
    >
      <div className="font-space text-[10px] font-bold text-center absolute -bottom-6">
        Sun
      </div>
    </div>
  );
};

// Selected Planet Info Card
const PlanetInfoCard = ({ planetId }: { planetId: string | null }) => {
  if (!planetId) return null;
  
  const planet = planets.find(p => p.id === planetId);
  if (!planet) return null;
  
  return (
    <GlowingCard className="absolute bottom-4 right-4 p-4 rounded-lg w-64 z-30 animate-float">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-space font-bold text-xl text-glow-blue">{planet.name}</h3>
        <span className="px-2 py-1 bg-space-red/30 text-space-red text-xs rounded-full">{planet.orderNumber}th Planet</span>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-gray-300">{planet.description}</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-gray-400 text-xs">Diameter</p>
            <p className="font-mono">{planet.diameter}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Day Length</p>
            <p className="font-mono">{planet.dayLength}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Orbital Period</p>
            <p className="font-mono">{planet.orbitalPeriod}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Moons</p>
            <p className="font-mono">{planet.moons}</p>
          </div>
        </div>
      </div>
      <Link href={`/planet/${planet.id}`}>
        <a className="block mt-3 w-full py-2 bg-space-red/20 hover:bg-space-red/30 transition rounded text-sm font-medium text-center">
          Explore in Detail
        </a>
      </Link>
    </GlowingCard>
  );
};

// Controls
const SolarSystemControls = ({ 
  speed, 
  onSpeedChange,
  onReset
}: { 
  speed: string;
  onSpeedChange: (speed: string) => void;
  onReset: () => void;
}) => {
  return (
    <div className="absolute bottom-4 left-4 flex space-x-2">
      <button 
        className="w-10 h-10 rounded-full space-card flex items-center justify-center hover:bg-white/10 transition"
        onClick={() => onReset()}
      >
        <i className="fas fa-sync-alt"></i>
      </button>
      
      <div className="absolute top-4 left-4 space-card py-1 px-3 rounded-full flex items-center space-x-2">
        <i className="fas fa-clock text-xs"></i>
        <span className="text-xs">Speed:</span>
        <select 
          className="bg-transparent text-xs outline-none" 
          value={speed}
          onChange={(e) => onSpeedChange(e.target.value)}
        >
          <option>1x</option>
          <option>10x</option>
          <option>100x</option>
          <option>1000x</option>
        </select>
      </div>
    </div>
  );
};

// Main SolarSystem component
const SolarSystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [speed, setSpeed] = useState("1x");
  
  const handleSelectPlanet = (id: string) => {
    setSelectedPlanet(id);
  };
  
  const handleReset = () => {
    setSelectedPlanet(null);
  };
  
  return (
    <div className="space-card rounded-2xl p-4 lg:p-6 relative overflow-hidden h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1566345984367-57276a4dd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Space background" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      <div className="relative w-full h-full z-10">
        {/* 2D Solar System */}
        <div className="relative w-full h-full">
          <Sun2D />
          
          {planets.map((planet, index) => (
            <Planet2D
              key={planet.id}
              planet={planet}
              index={index}
              isSelected={selectedPlanet === planet.id}
              onClick={() => handleSelectPlanet(planet.id)}
            />
          ))}
        </div>
        
        <PlanetInfoCard planetId={selectedPlanet} />
        <SolarSystemControls 
          speed={speed} 
          onSpeedChange={setSpeed} 
          onReset={handleReset} 
        />
      </div>
    </div>
  );
};

export default SolarSystem;
