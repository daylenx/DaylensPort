import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: result.error.flatten() 
        });
      }

      const { name, email, message } = result.data;
      
      console.log("Contact form submission received:");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      
      return res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  return httpServer;
}
