import { useQuery } from "@tanstack/react-query";
import { celestialEvents, visibleObjects, skyInfo } from "@/lib/constants";

interface NightSkyParams {
  date?: string;
  location?: string;
}

export function useNightSkyData({ date, location }: NightSkyParams = {}) {
  return useQuery({
    queryKey: ["/api/night-sky", date, location],
    queryFn: async () => {
      // Fallback to local data if API is not available or fails
      return {
        events: celestialEvents,
        visibleObjects,
        skyInfo,
        location: location || "Boston, MA",
        date: date || "July 14, 2023",
      };
    },
  });
}

export function useCelestialEvents() {
  return useQuery({
    queryKey: ["/api/celestial-events"],
    queryFn: async () => {
      // Return celestial events data
      return celestialEvents;
    },
  });
}

export function useVisibleObjects(location?: string) {
  return useQuery({
    queryKey: ["/api/visible-objects", location],
    queryFn: async () => {
      // Return visible objects data
      return visibleObjects;
    },
  });
}
