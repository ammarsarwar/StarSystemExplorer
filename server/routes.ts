import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for celestial objects
  app.get("/api/planets", async (req, res) => {
    try {
      const planets = await storage.getAllCelestialObjects("planet");
      res.json(planets);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch planets" });
    }
  });

  app.get("/api/planets/:id", async (req, res) => {
    try {
      const planet = await storage.getCelestialObjectById(parseInt(req.params.id));
      if (!planet) {
        return res.status(404).json({ error: "Planet not found" });
      }
      res.json(planet);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch planet" });
    }
  });

  // API endpoints for constellations
  app.get("/api/constellations", async (req, res) => {
    try {
      const constellations = await storage.getAllConstellations();
      res.json(constellations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch constellations" });
    }
  });

  app.get("/api/constellations/:id", async (req, res) => {
    try {
      const constellation = await storage.getConstellationById(parseInt(req.params.id));
      if (!constellation) {
        return res.status(404).json({ error: "Constellation not found" });
      }
      res.json(constellation);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch constellation" });
    }
  });

  app.get("/api/zodiac", async (req, res) => {
    try {
      const zodiacSigns = await storage.getZodiacConstellations();
      res.json(zodiacSigns);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch zodiac signs" });
    }
  });

  // API endpoints for night sky data
  app.get("/api/night-sky", async (req, res) => {
    try {
      const { date, location } = req.query;
      const nightSkyData = await storage.getNightSkyData(
        date as string, 
        location as string
      );
      res.json(nightSkyData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch night sky data" });
    }
  });

  app.get("/api/celestial-events", async (req, res) => {
    try {
      const events = await storage.getCelestialEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch celestial events" });
    }
  });

  // User observations and favorites
  app.post("/api/observations", async (req, res) => {
    try {
      const observation = await storage.createUserObservation(req.body);
      res.status(201).json(observation);
    } catch (error) {
      res.status(500).json({ error: "Failed to create observation" });
    }
  });

  app.get("/api/observations/user/:userId", async (req, res) => {
    try {
      const observations = await storage.getUserObservations(parseInt(req.params.userId));
      res.json(observations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user observations" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
