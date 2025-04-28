import SolarSystem from "@/components/celestial/SolarSystem";
import PlanetViewer from "@/components/celestial/PlanetViewer";

const SolarSystemPage = () => {
  return (
    <div className="p-4 lg:p-8">
      {/* Featured Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-space text-2xl font-bold">Solar System Explorer</h2>
          <div className="flex space-x-2">
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-search"></i>
            </button>
            <button className="p-2 space-card rounded-full hover:bg-space-purple/20 transition">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>

        {/* Interactive Solar System */}
        <SolarSystem />
      </section>

      {/* Planetary Details Section */}
      <section className="mb-8">
        <h2 className="font-space text-2xl font-bold mb-6">Featured Planet: Mars</h2>
        <PlanetViewer planetId="mars" />
      </section>
    </div>
  );
};

export default SolarSystemPage;
