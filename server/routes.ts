import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTimelineItemSchema, insertProjectSchema, insertLiveFeedItemSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Timeline API routes
  app.get("/api/timeline", async (req, res) => {
    try {
      const items = await storage.getTimelineItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline items" });
    }
  });

  app.post("/api/timeline", async (req, res) => {
    try {
      const validatedData = insertTimelineItemSchema.parse(req.body);
      const item = await storage.createTimelineItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: "Invalid timeline item data" });
    }
  });

  app.put("/api/timeline/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const item = await storage.updateTimelineItem(id, updates);
      res.json(item);
    } catch (error) {
      res.status(400).json({ error: "Failed to update timeline item" });
    }
  });

  app.delete("/api/timeline/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteTimelineItem(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: "Failed to delete timeline item" });
    }
  });

  // Projects API routes
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  app.put("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const project = await storage.updateProject(id, updates);
      res.json(project);
    } catch (error) {
      res.status(400).json({ error: "Failed to update project" });
    }
  });

  // Content sections API
  app.get("/api/content/:section", async (req, res) => {
    try {
      const section = await storage.getContentSection(req.params.section);
      if (!section) {
        res.status(404).json({ error: "Section not found" });
        return;
      }
      res.json(section);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch content section" });
    }
  });

  app.put("/api/content/:section", async (req, res) => {
    try {
      const { content, imageUrl } = req.body;
      const section = await storage.updateContentSection(req.params.section, content, imageUrl);
      res.json(section);
    } catch (error) {
      res.status(400).json({ error: "Failed to update content section" });
    }
  });

  // Live feed API routes
  app.get("/api/livefeed", async (req, res) => {
    try {
      const items = await storage.getLiveFeedItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch live feed items" });
    }
  });

  app.post("/api/livefeed", async (req, res) => {
    try {
      const validatedData = insertLiveFeedItemSchema.parse(req.body);
      const item = await storage.createLiveFeedItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: "Invalid live feed item data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
