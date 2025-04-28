import { useQuery } from "@tanstack/react-query";
import { planets } from "@/lib/constants";

export function usePlanetData(planetId?: string) {
  return useQuery({
    queryKey: ["/api/planets", planetId],
    queryFn: async () => {
      // Fallback to local data if API is not available or fails
      if (planetId) {
        const planet = planets.find((p) => p.id === planetId);
        return planet || null;
      }
      return planets;
    },
  });
}

export function useSolarSystemData() {
  return useQuery({
    queryKey: ["/api/solar-system"],
    queryFn: async () => {
      // Return full solar system data
      return {
        planets,
        sun: {
          name: "Sun",
          diameter: "1,391,000 km",
          temperature: "5,500°C (surface)",
          age: "4.6 billion years",
          type: "G-type main-sequence star",
        },
      };
    },
  });
}
