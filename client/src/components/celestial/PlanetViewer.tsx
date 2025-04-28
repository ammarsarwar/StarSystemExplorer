import React from "react";
import { useState } from "react";
import { planets, marsData, marsConditions } from "@/lib/constants";
import GlowingCard from "@/components/ui/glowing-card";
import { Link } from "wouter";
import Planet3DView from "./Planet3DView";

interface PlanetViewerProps {
  planetId?: string;
}

const PlanetViewer: React.FC<PlanetViewerProps> = ({ planetId = "mars" }) => {
  const planet = planets.find((p) => p.id === planetId) || planets[3]; // Default to Mars if not found

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Planet 3D View */}
      <div className="space-card rounded-2xl p-6 col-span-1 lg:col-span-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-space font-medium">3D View</h3>
          <button className="text-xs px-3 py-1 rounded-full space-card hover:bg-white/10 transition">
            <i className="fas fa-vr-cardboard mr-1"></i> VR Mode
          </button>
        </div>
        
        <Planet3DView planetId={planetId} />
        
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Rotate & Zoom</span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full space-card flex items-center justify-center hover:bg-white/10 transition">
                <i className="fas fa-arrows-alt"></i>
              </button>
              <button className="w-8 h-8 rounded-full space-card flex items-center justify-center hover:bg-white/10 transition">
                <i className="fas fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Planet Data */}
      <div className="space-card rounded-2xl p-6 col-span-1 lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-space text-2xl font-bold text-space-red">{planet.name}</h3>
            <p className="text-gray-300">The {planet.orderNumber}th Planet Of The Solar System</p>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-400 mr-2">Ls = 1.192°</span>
            <span className="px-3 py-1 bg-space-orange/20 text-space-orange rounded-full text-xs">
              137.4° E long
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {marsData.map((dataPoint, index) => (
            <div key={index} className="space-card p-3 rounded-xl bg-opacity-40">
              <p className="text-xs text-gray-400">{dataPoint.name}</p>
              <p className={`font-mono text-lg ${dataPoint.color}`}>{dataPoint.value}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-space font-medium mb-2">Surface Conditions</h4>
            <div className="flex space-x-4">
              {marsConditions.map((condition, index) => (
                <div key={index} className="flex-1 space-card p-3 rounded-xl bg-opacity-40 flex items-center">
                  <div className={`w-12 h-12 rounded-full ${condition.bgColor} flex items-center justify-center mr-3`}>
                    <i className={`${condition.icon} ${condition.color}`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{condition.name}</p>
                    <div className="flex items-end">
                      <span className="font-mono text-lg">{condition.value}</span>
                      <span className="text-xs ml-1 mb-0.5">%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-space font-medium mb-2">Surface Activity</h4>
            <div className="space-card rounded-xl bg-opacity-40 p-3 h-20 flex items-end">
              {/* Simplified graph */}
              <div className="w-full h-full flex items-end justify-between">
                <div className="h-[30%] w-2 bg-white rounded-t"></div>
                <div className="h-[60%] w-2 bg-white rounded-t"></div>
                <div className="h-[40%] w-2 bg-white rounded-t"></div>
                <div className="h-[80%] w-2 bg-white rounded-t"></div>
                <div className="h-[20%] w-2 bg-white rounded-t"></div>
                <div className="h-[50%] w-2 bg-white rounded-t"></div>
                <div className="h-[70%] w-2 bg-white rounded-t"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-space-purple/20 hover:bg-space-purple/30 transition rounded text-sm flex items-center">
              <i className="fas fa-project-diagram mr-2"></i>
              Colonization Data
            </button>
            <button className="px-4 py-2 bg-space-red/20 hover:bg-space-red/30 transition rounded text-sm flex items-center">
              <i className="fas fa-history mr-2"></i>
              Historical Missions
            </button>
            <button className="px-4 py-2 bg-space-blue/20 hover:bg-space-blue/30 transition rounded text-sm flex items-center">
              <i className="fas fa-satellite mr-2"></i>
              Orbital Satellites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetViewer;
