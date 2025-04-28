import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Sidebar from "@/components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";
import Home from "@/pages/home";
import SolarSystem from "@/pages/solar-system";
import Constellations from "@/pages/constellations";
import NightSky from "@/pages/night-sky";
import PlanetDetail from "@/pages/planet-detail";
import { useState } from "react";
import useMobile from "@/hooks/use-mobile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solar-system" component={SolarSystem} />
      <Route path="/constellations" component={Constellations} />
      <Route path="/night-sky" component={NightSky} />
      <Route path="/planet/:id" component={PlanetDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="flex flex-col lg:flex-row min-h-screen relative">
        {/* Mobile Header */}
        {isMobile && (
          <header className="lg:hidden fixed top-0 w-full z-50 space-card px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fas fa-star text-space-purple mr-2"></i>
              <h1 className="font-space font-bold text-xl tracking-wider text-glow">CosmoExplorer</h1>
            </div>
            <button 
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </header>
        )}
        
        {/* Sidebar Navigation (Desktop) */}
        <Sidebar mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        
        {/* Main Content */}
        <main className="flex-1 pt-16 lg:pt-0">
          <Router />
        </main>
        
        {/* Mobile Navigation */}
        {isMobile && <MobileNavbar />}
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
