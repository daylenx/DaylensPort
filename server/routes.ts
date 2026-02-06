import type { Express } from "express";
import { type Server } from "http";
import { contactMessageSchema, contactMessages } from "@shared/schema";
import { db } from "./db";
import nodemailer from "nodemailer";

async function sendEmailNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) {
    console.log("GMAIL_APP_PASSWORD not set — skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daylen25147@gmail.com",
      pass: appPassword,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <daylen25147@gmail.com>`,
    to: "daylen25147@gmail.com",
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
    html: `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr />
      <p>${data.message.replace(/\n/g, "<br />")}</p>
    `,
  });

  console.log("Email notification sent successfully.");
}

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
          details: result.error.flatten(),
        });
      }

      const { name, email, subject, message } = result.data;

      await db.insert(contactMessages).values({ name, email, subject, message });
      console.log(`Contact message saved from ${name} (${email})`);

      try {
        await sendEmailNotification({ name, email, subject, message });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }

      return res.status(200).json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  return httpServer;
}
