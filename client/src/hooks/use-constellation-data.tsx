import { useQuery } from "@tanstack/react-query";
import { zodiacSigns } from "@/lib/constants";

export function useConstellationData(constellationId?: string) {
  return useQuery({
    queryKey: ["/api/constellations", constellationId],
    queryFn: async () => {
      // Fallback to local data if API is not available or fails
      if (constellationId) {
        const constellation = zodiacSigns.find((c) => c.id === constellationId);
        return constellation || null;
      }
      return zodiacSigns;
    },
  });
}

export function useZodiacData() {
  return useQuery({
    queryKey: ["/api/zodiac"],
    queryFn: async () => {
      // Return full zodiac data
      return {
        signs: zodiacSigns,
        info: {
          origin: "Babylonian astronomy",
          age: "Over 3,000 years old",
          type: "Celestial coordinate system",
        },
      };
    },
  });
}
