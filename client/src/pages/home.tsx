import { Link } from "wouter";
import GlowingCard from "@/components/ui/glowing-card";
import { planets, zodiacSigns, backgroundImages } from "@/lib/constants";
import SolarSystem from "@/components/celestial/SolarSystem";

const Home = () => {
  return (
    <div className="p-4 lg:p-8">
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-space text-2xl font-bold">Welcome to CosmoExplorer</h2>
          <div className="flex space-x-2">
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-search"></i>
            </button>
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>

        <GlowingCard className="p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-space font-bold mb-4 text-glow">
                Explore The Universe
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Discover the wonders of our solar system, constellations, and the night sky with our interactive astronomy tools.
              </p>
              <div className="flex gap-4">
                <Link href="/solar-system">
                  <a className="px-6 py-3 bg-space-purple/20 hover:bg-space-purple/30 transition rounded-lg font-medium flex items-center">
                    <i className="fas fa-rocket mr-2"></i> Start Exploring
                  </a>
                </Link>
                <Link href="/night-sky">
                  <a className="px-6 py-3 bg-space-blue/20 hover:bg-space-blue/30 transition rounded-lg font-medium">
                    Tonight's Sky
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Mars" 
                  className="w-full h-full object-cover rounded-full planet-glow planet-rotation"
                />
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 256 256" className="absolute inset-0 opacity-30">
                    <polygon points="128,32 180,64 180,128 128,160 76,128 76,64" fill="none" stroke="white" strokeWidth="0.5"></polygon>
                    <polygon points="128,64 160,85 160,128 128,149 96,128 96,85" fill="none" stroke="white" strokeWidth="0.5"></polygon>
                    <line x1="128" y1="32" x2="128" y2="64" stroke="white" strokeWidth="0.5"></line>
                    <line x1="180" y1="64" x2="160" y2="85" stroke="white" strokeWidth="0.5"></line>
                    <line x1="180" y1="128" x2="160" y2="128" stroke="white" strokeWidth="0.5"></line>
                    <line x1="128" y1="160" x2="128" y2="149" stroke="white" strokeWidth="0.5"></line>
                    <line x1="76" y1="128" x2="96" y2="128" stroke="white" strokeWidth="0.5"></line>
                    <line x1="76" y1="64" x2="96" y2="85" stroke="white" strokeWidth="0.5"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/solar-system">
            <a className="block">
              <GlowingCard className="h-full transition-transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-space-blue/20 flex items-center justify-center mb-4">
                    <i className="fas fa-globe-americas text-2xl text-space-blue"></i>
                  </div>
                  <h3 className="font-space font-bold text-xl mb-2">Solar System</h3>
                  <p className="text-gray-300 text-sm">
                    Explore our solar system with interactive 3D models of planets and moons.
                  </p>
                </div>
              </GlowingCard>
            </a>
          </Link>

          <Link href="/constellations">
            <a className="block">
              <GlowingCard className="h-full transition-transform hover:-translate-y-1" glowColor="rgba(56, 189, 248, 0.4)">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                    <i className="fas fa-star text-2xl text-space-purple"></i>
                  </div>
                  <h3 className="font-space font-bold text-xl mb-2">Constellations</h3>
                  <p className="text-gray-300 text-sm">
                    Discover the stories and science behind zodiac constellations.
                  </p>
                </div>
              </GlowingCard>
            </a>
          </Link>

          <Link href="/night-sky">
            <a className="block">
              <GlowingCard className="h-full transition-transform hover:-translate-y-1" glowColor="rgba(244, 63, 94, 0.4)">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-space-red/20 flex items-center justify-center mb-4">
                    <i className="fas fa-moon text-2xl text-space-red"></i>
                  </div>
                  <h3 className="font-space font-bold text-xl mb-2">Night Sky</h3>
                  <p className="text-gray-300 text-sm">
                    See what's visible in tonight's sky from your location.
                  </p>
                </div>
              </GlowingCard>
            </a>
          </Link>
        </div>

        <h2 className="font-space text-2xl font-bold mb-6">Solar System Explorer</h2>
        <SolarSystem />
      </section>
    </div>
  );
};

export default Home;
