import ConstellationViewer from "@/components/celestial/ConstellationViewer";

const ConstellationsPage = () => {
  return (
    <div className="p-4 lg:p-8">
      {/* Zodiac Constellations Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-space text-2xl font-bold">Zodiac Constellations</h2>
          <div className="flex space-x-2">
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-search"></i>
            </button>
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>

        <ConstellationViewer />
      </section>

      {/* Additional Sections */}
      <section className="mb-8">
        <h2 className="font-space text-2xl font-bold mb-6">Astronomy Facts</h2>
        
        <div className="space-card rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <h3 className="font-space text-xl font-medium mb-4">The Origin of Constellations</h3>
              <p className="text-gray-300 mb-4">
                Zodiac constellations — 12 constellations located along the ecliptic, the visible annual path of the Sun among the stars. The name is due to the fact that most of the zodiac constellations have been named after animals since ancient times.
              </p>
              
              <p className="text-gray-300 mb-4">
                The history of the zodiac is fascinating, stretching back to ancient Mesopotamia. The earliest known depictions of constellations appeared around 4000 BCE, including some that are still recognized today such as Taurus and Scorpius.
              </p>
              
              <div className="flex items-center mt-6">
                <div className="h-1 flex-1 bg-gray-700"></div>
                <span className="px-4 text-sm text-gray-400">Learn More</span>
                <div className="h-1 flex-1 bg-gray-700"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="p-3 space-card hover:bg-white/10 transition rounded text-sm flex items-center justify-center">
                  <i className="fas fa-book mr-2"></i>
                  Mythology
                </button>
                <button className="p-3 space-card hover:bg-white/10 transition rounded text-sm flex items-center justify-center">
                  <i className="fas fa-globe mr-2"></i>
                  Cultural Significance
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="w-full h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542652219720-f7e73b46e7e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Star map" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 space-card px-3 py-2 rounded-lg bg-opacity-70 text-sm">
                  Ancient star map, circa 1700s
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstellationsPage;
