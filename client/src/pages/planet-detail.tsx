import { useParams, Link } from "wouter";
import { planets } from "@/lib/constants";
import PlanetViewer from "@/components/celestial/PlanetViewer";
import GlowingCard from "@/components/ui/glowing-card";

const PlanetDetail = () => {
  // Get planet ID from URL
  const params = useParams();
  const planetId = params.id;
  
  // Find the planet data
  const planet = planets.find(p => p.id === planetId);
  
  // If planet not found, show error
  if (!planet) {
    return (
      <div className="p-4 lg:p-8">
        <div className="space-card rounded-2xl p-6">
          <h2 className="font-space text-2xl font-bold mb-4">Planet Not Found</h2>
          <p className="text-gray-300 mb-6">The planet you're looking for doesn't exist in our database.</p>
          <Link href="/solar-system">
            <a className="px-4 py-2 bg-space-purple/20 hover:bg-space-purple/30 transition rounded text-sm font-medium">
              Return to Solar System
            </a>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-4 lg:p-8">
      {/* Planet Header */}
      <div className="mb-6">
        <Link href="/solar-system">
          <a className="text-space-blue hover:underline flex items-center mb-4">
            <i className="fas fa-arrow-left mr-2"></i> Back to Solar System
          </a>
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="font-space text-3xl font-bold">{planet.name}</h1>
          <div className="flex space-x-2">
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-share"></i>
            </button>
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Planet Details */}
      <PlanetViewer planetId={planetId} />
      
      {/* Additional Sections */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlowingCard className="lg:col-span-2">
          <h3 className="font-space text-xl font-medium mb-4">About {planet.name}</h3>
          <p className="text-gray-300 mb-4">
            {planet.description} This planet has been the subject of numerous scientific studies and space missions due to its unique properties and potential insights into the formation of our solar system.
          </p>
          
          <h4 className="font-space text-lg font-medium mt-6 mb-3">Scientific Data</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-card p-3 rounded-lg">
              <p className="text-xs text-gray-400">Mass</p>
              <p className="font-mono">{planet.id === "earth" ? "5.97 × 10^24 kg" : "6.39 × 10^23 kg"}</p>
            </div>
            <div className="space-card p-3 rounded-lg">
              <p className="text-xs text-gray-400">Volume</p>
              <p className="font-mono">{planet.id === "earth" ? "1.08 × 10^12 km³" : "1.63 × 10^11 km³"}</p>
            </div>
            <div className="space-card p-3 rounded-lg">
              <p className="text-xs text-gray-400">Gravity</p>
              <p className="font-mono">{planet.id === "earth" ? "9.81 m/s²" : "3.71 m/s²"}</p>
            </div>
            <div className="space-card p-3 rounded-lg">
              <p className="text-xs text-gray-400">Temperature</p>
              <p className="font-mono">{planet.id === "mars" ? "-63°C avg." : "15°C avg."}</p>
            </div>
          </div>
        </GlowingCard>
        
        <GlowingCard>
          <h3 className="font-space text-xl font-medium mb-4">Exploration History</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-space-blue/20 flex items-center justify-center mt-1 flex-shrink-0">
                <i className="fas fa-satellite text-space-blue"></i>
              </div>
              <div>
                <h4 className="font-medium">Missions to {planet.name}</h4>
                <ul className="text-sm text-gray-300 space-y-2 mt-2">
                  {planet.id === "mars" ? (
                    <>
                      <li className="flex justify-between">
                        <span>Viking 1 & 2</span>
                        <span className="text-gray-400">1975</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pathfinder</span>
                        <span className="text-gray-400">1997</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Spirit & Opportunity</span>
                        <span className="text-gray-400">2003</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Curiosity</span>
                        <span className="text-gray-400">2012</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Perseverance</span>
                        <span className="text-gray-400">2020</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex justify-between">
                        <span>Mission 1</span>
                        <span className="text-gray-400">1975</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Mission 2</span>
                        <span className="text-gray-400">1989</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Mission 3</span>
                        <span className="text-gray-400">2001</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 py-2 bg-space-red/20 hover:bg-space-red/30 transition rounded text-sm flex items-center justify-center">
            <i className="fas fa-rocket mr-2"></i>
            Explore All Missions
          </button>
        </GlowingCard>
      </section>
    </div>
  );
};

export default PlanetDetail;
