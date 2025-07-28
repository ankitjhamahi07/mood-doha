import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all available moods
  app.get("/api/moods", async (req, res) => {
    try {
      const moods = await storage.getAllMoods();
      res.json(moods);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch moods" });
    }
  });

  // Get dohas by mood
  app.get("/api/dohas/:mood", async (req, res) => {
    try {
      const { mood } = req.params;
      const dohas = await storage.getDohasByMood(mood);
      
      if (dohas.length === 0) {
        return res.status(404).json({ message: `No dohas found for mood: ${mood}` });
      }
      
      res.json(dohas);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dohas" });
    }
  });

  // Get random doha by mood
  app.get("/api/dohas/:mood/random", async (req, res) => {
    try {
      const { mood } = req.params;
      const doha = await storage.getRandomDohaByMood(mood);
      
      if (!doha) {
        return res.status(404).json({ message: `No dohas found for mood: ${mood}` });
      }
      
      res.json(doha);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch doha" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
