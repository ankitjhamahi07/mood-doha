import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { serveStatic } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
await registerRoutes(app);

// Serve frontend (only on production)
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

// Export as Vercel handler
export default app;
