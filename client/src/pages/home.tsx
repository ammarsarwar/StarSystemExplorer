import { Link } from "wouter";
import GlowingCard from "@/components/ui/glowing-card";
import { planets, zodiacSigns, backgroundImages } from "@/lib/constants";
import SolarSystem from "@/components/celestial/SolarSystem";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("explore");
  
  return (
    <div className="p-4 lg:p-8">
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-space text-3xl font-bold bg-gradient-to-r from-space-purple to-space-blue inline-block text-transparent bg-clip-text">Welcome to CosmoExplorer</h2>
          <div className="flex space-x-2">
            <button className="p-2 space-card rounded-full bg-gradient-to-r from-space-purple/10 to-space-blue/10 hover:from-space-purple/20 hover:to-space-blue/20 transition border border-space-purple/30 shadow-lg shadow-space-purple/10">
              <i className="fas fa-search text-space-blue"></i>
            </button>
            <button className="p-2 space-card rounded-full bg-gradient-to-r from-space-purple/10 to-space-blue/10 hover:from-space-purple/20 hover:to-space-blue/20 transition border border-space-purple/30 shadow-lg shadow-space-purple/10">
              <i className="fas fa-info-circle text-space-purple"></i>
            </button>
          </div>
        </div>

        <GlowingCard 
          className="p-8 mb-8 relative overflow-hidden border border-space-purple/30"
          glowColor="rgba(139, 92, 246, 0.5)"
        >
          {/* Background glow effect */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-space-purple/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-space-blue/10 rounded-full filter blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-space font-bold mb-4 bg-gradient-to-r from-space-purple to-space-blue text-transparent bg-clip-text">
                Explore The Universe
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Discover the wonders of our solar system, constellations, and the night sky with our interactive astronomy tools inspired by No Man's Sky.
              </p>
              <div className="flex flex-wrap gap-4">
                <div 
                  className="px-6 py-3 bg-gradient-to-r from-space-purple/20 to-space-purple/40 hover:from-space-purple/30 hover:to-space-purple/50 transition rounded-lg font-medium flex items-center cursor-pointer border border-space-purple/30 shadow-lg shadow-space-purple/10"
                  onClick={() => window.location.href = "/solar-system"}
                >
                  <i className="fas fa-rocket mr-2"></i> Start Exploring
                </div>
                <div 
                  className="px-6 py-3 bg-gradient-to-r from-space-blue/20 to-space-blue/40 hover:from-space-blue/30 hover:to-space-blue/50 transition rounded-lg font-medium cursor-pointer border border-space-blue/30 shadow-lg shadow-space-blue/10"
                  onClick={() => window.location.href = "/night-sky"}
                >
                  <i className="fas fa-moon mr-2"></i> Tonight's Sky
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Mars" 
                  className="w-full h-full object-cover rounded-full shadow-lg shadow-space-red/30"
                  style={{
                    boxShadow: "0 0 40px rgba(244, 63, 94, 0.4)"
                  }}
                />
                <div className="absolute inset-0 planet-rotation" style={{ animationDuration: "120s" }}>
                  <svg width="100%" height="100%" viewBox="0 0 256 256" className="absolute inset-0">
                    <polygon points="128,32 180,64 180,128 128,160 76,128 76,64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></polygon>
                    <polygon points="128,64 160,85 160,128 128,149 96,128 96,85" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5"></polygon>
                    <line x1="128" y1="32" x2="128" y2="64" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></line>
                    <line x1="180" y1="64" x2="160" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></line>
                    <line x1="180" y1="128" x2="160" y2="128" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></line>
                    <line x1="128" y1="160" x2="128" y2="149" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></line>
                    <line x1="76" y1="128" x2="96" y2="128" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></line>
                    <line x1="76" y1="64" x2="96" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></line>
                  </svg>
                </div>
                
                {/* Data points */}
                <div className="absolute" style={{ left: "20%", top: "30%" }}>
                  <div className="h-2 w-2 rounded-full bg-space-blue animate-ping"></div>
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="absolute" style={{ right: "25%", bottom: "35%" }}>
                  <div className="h-2 w-2 rounded-full bg-space-purple animate-ping"></div>
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>

        {/* Feature navigation tabs */}
        <div className="flex justify-center mb-6 space-x-2 md:space-x-6">
          <div 
            className={`px-4 py-2 rounded-full cursor-pointer font-space font-medium transition-all duration-300 ${
              activeTab === "explore" 
                ? "bg-gradient-to-r from-space-purple/30 to-space-blue/30 text-white shadow-lg shadow-space-purple/10 border border-space-purple/30" 
                : "bg-space-panel hover:bg-space-panel/60"
            }`}
            onClick={() => setActiveTab("explore")}
          >
            <i className="fas fa-compass mr-2"></i> Explore
          </div>
          <div 
            className={`px-4 py-2 rounded-full cursor-pointer font-space font-medium transition-all duration-300 ${
              activeTab === "discover" 
                ? "bg-gradient-to-r from-space-purple/30 to-space-blue/30 text-white shadow-lg shadow-space-purple/10 border border-space-purple/30" 
                : "bg-space-panel hover:bg-space-panel/60"
            }`}
            onClick={() => setActiveTab("discover")}
          >
            <i className="fas fa-star mr-2"></i> Discover
          </div>
          <div 
            className={`px-4 py-2 rounded-full cursor-pointer font-space font-medium transition-all duration-300 ${
              activeTab === "learn" 
                ? "bg-gradient-to-r from-space-purple/30 to-space-blue/30 text-white shadow-lg shadow-space-purple/10 border border-space-purple/30" 
                : "bg-space-panel hover:bg-space-panel/60"
            }`}
            onClick={() => setActiveTab("learn")}
          >
            <i className="fas fa-graduation-cap mr-2"></i> Learn
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="cursor-pointer" onClick={() => window.location.href = "/solar-system"}>
            <GlowingCard 
              className="h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden border border-space-blue/30"
              glowColor="rgba(56, 189, 248, 0.4)"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-space-blue/30 to-space-blue/5 flex items-center justify-center mb-6 border border-space-blue/30 shadow-lg shadow-space-blue/10">
                  <i className="fas fa-globe-americas text-3xl text-space-blue"></i>
                </div>
                <h3 className="font-space font-bold text-xl mb-4 bg-gradient-to-r from-space-blue to-space-purple text-transparent bg-clip-text">Solar System</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Explore our solar system with interactive models of planets and moons.
                </p>
                <div className="flex items-center justify-center mt-2 text-space-blue">
                  <span className="text-sm font-medium">Explore Now</span>
                  <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </div>
              </div>
            </GlowingCard>
          </div>

          <div className="cursor-pointer" onClick={() => window.location.href = "/constellations"}>
            <GlowingCard 
              className="h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden border border-space-purple/30"
              glowColor="rgba(139, 92, 246, 0.4)"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-space-purple/30 to-space-purple/5 flex items-center justify-center mb-6 border border-space-purple/30 shadow-lg shadow-space-purple/10">
                  <i className="fas fa-star text-3xl text-space-purple"></i>
                </div>
                <h3 className="font-space font-bold text-xl mb-4 bg-gradient-to-r from-space-purple to-space-blue text-transparent bg-clip-text">Constellations</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Discover the stories and science behind zodiac constellations.
                </p>
                <div className="flex items-center justify-center mt-2 text-space-purple">
                  <span className="text-sm font-medium">Explore Now</span>
                  <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </div>
              </div>
            </GlowingCard>
          </div>

          <div className="cursor-pointer" onClick={() => window.location.href = "/night-sky"}>
            <GlowingCard 
              className="h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden border border-space-red/30"
              glowColor="rgba(244, 63, 94, 0.4)"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-space-red/30 to-space-red/5 flex items-center justify-center mb-6 border border-space-red/30 shadow-lg shadow-space-red/10">
                  <i className="fas fa-moon text-3xl text-space-red"></i>
                </div>
                <h3 className="font-space font-bold text-xl mb-4 bg-gradient-to-r from-space-red to-space-orange text-transparent bg-clip-text">Night Sky</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  See what's visible in tonight's sky from your location.
                </p>
                <div className="flex items-center justify-center mt-2 text-space-red">
                  <span className="text-sm font-medium">Explore Now</span>
                  <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </div>
              </div>
            </GlowingCard>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="font-space text-2xl font-bold bg-gradient-to-r from-space-yellow to-space-orange text-transparent bg-clip-text">Solar System Explorer</h2>
          <div className="flex space-x-4">
            <div className="px-3 py-1 space-card rounded-full flex items-center text-sm border border-space-yellow/30">
              <i className="fas fa-rocket mr-2 text-space-yellow"></i>
              <span>Interactive View</span>
            </div>
          </div>
        </div>
        
        <SolarSystem />
      </section>
    </div>
  );
};

export default Home;
