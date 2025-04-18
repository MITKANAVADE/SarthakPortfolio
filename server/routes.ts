import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertProfileSchema,
  insertSkillSchema,
  insertExpertiseSchema,
  insertEducationSchema,
  insertProjectSchema, 
  insertInterestSchema,
  insertMessageSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes for Portfolio data
  
  // Profile Routes
  app.get('/api/profile/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const profile = await storage.getProfile(id);
      
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      
      return res.json(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      return res.status(500).json({ error: 'Failed to fetch profile' });
    }
  });
  
  app.post('/api/profile', async (req: Request, res: Response) => {
    try {
      const profileData = insertProfileSchema.parse(req.body);
      const newProfile = await storage.createProfile(profileData);
      return res.status(201).json(newProfile);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating profile:', error);
      return res.status(500).json({ error: 'Failed to create profile' });
    }
  });
  
  app.patch('/api/profile/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      // Partial validation for update
      const profileData = insertProfileSchema.partial().parse(req.body);
      const updatedProfile = await storage.updateProfile(id, profileData);
      
      if (!updatedProfile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      
      return res.json(updatedProfile);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error updating profile:', error);
      return res.status(500).json({ error: 'Failed to update profile' });
    }
  });
  
  // Skills Routes
  app.get('/api/skills', async (_req: Request, res: Response) => {
    try {
      const skills = await storage.getAllSkills();
      return res.json(skills);
    } catch (error) {
      console.error('Error fetching skills:', error);
      return res.status(500).json({ error: 'Failed to fetch skills' });
    }
  });
  
  app.post('/api/skills', async (req: Request, res: Response) => {
    try {
      const skillData = insertSkillSchema.parse(req.body);
      const newSkill = await storage.createSkill(skillData);
      return res.status(201).json(newSkill);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating skill:', error);
      return res.status(500).json({ error: 'Failed to create skill' });
    }
  });
  
  app.patch('/api/skills/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const skillData = insertSkillSchema.partial().parse(req.body);
      const updatedSkill = await storage.updateSkill(id, skillData);
      
      if (!updatedSkill) {
        return res.status(404).json({ error: 'Skill not found' });
      }
      
      return res.json(updatedSkill);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error updating skill:', error);
      return res.status(500).json({ error: 'Failed to update skill' });
    }
  });
  
  app.delete('/api/skills/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteSkill(id);
      
      if (!deleted) {
        return res.status(404).json({ error: 'Skill not found' });
      }
      
      return res.status(204).end();
    } catch (error) {
      console.error('Error deleting skill:', error);
      return res.status(500).json({ error: 'Failed to delete skill' });
    }
  });
  
  // Expertise Routes
  app.get('/api/expertise', async (_req: Request, res: Response) => {
    try {
      const expertiseList = await storage.getAllExpertise();
      return res.json(expertiseList);
    } catch (error) {
      console.error('Error fetching expertise:', error);
      return res.status(500).json({ error: 'Failed to fetch expertise' });
    }
  });
  
  app.post('/api/expertise', async (req: Request, res: Response) => {
    try {
      const expertiseData = insertExpertiseSchema.parse(req.body);
      const newExpertise = await storage.createExpertise(expertiseData);
      return res.status(201).json(newExpertise);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating expertise:', error);
      return res.status(500).json({ error: 'Failed to create expertise' });
    }
  });
  
  // Education Routes
  app.get('/api/education', async (_req: Request, res: Response) => {
    try {
      const educationList = await storage.getAllEducation();
      return res.json(educationList);
    } catch (error) {
      console.error('Error fetching education:', error);
      return res.status(500).json({ error: 'Failed to fetch education' });
    }
  });
  
  app.post('/api/education', async (req: Request, res: Response) => {
    try {
      const educationData = insertEducationSchema.parse(req.body);
      const newEducation = await storage.createEducation(educationData);
      return res.status(201).json(newEducation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating education:', error);
      return res.status(500).json({ error: 'Failed to create education' });
    }
  });
  
  // Projects Routes
  app.get('/api/projects', async (_req: Request, res: Response) => {
    try {
      const projectsList = await storage.getAllProjects();
      return res.json(projectsList);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });
  
  app.post('/api/projects', async (req: Request, res: Response) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const newProject = await storage.createProject(projectData);
      return res.status(201).json(newProject);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating project:', error);
      return res.status(500).json({ error: 'Failed to create project' });
    }
  });
  
  // Interests Routes
  app.get('/api/interests', async (_req: Request, res: Response) => {
    try {
      const interestsList = await storage.getAllInterests();
      return res.json(interestsList);
    } catch (error) {
      console.error('Error fetching interests:', error);
      return res.status(500).json({ error: 'Failed to fetch interests' });
    }
  });
  
  app.post('/api/interests', async (req: Request, res: Response) => {
    try {
      const interestData = insertInterestSchema.parse(req.body);
      const newInterest = await storage.createInterest(interestData);
      return res.status(201).json(newInterest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating interest:', error);
      return res.status(500).json({ error: 'Failed to create interest' });
    }
  });
  
  // Messages Routes
  app.post('/api/messages', async (req: Request, res: Response) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const newMessage = await storage.createMessage(messageData);
      return res.status(201).json(newMessage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('Error creating message:', error);
      return res.status(500).json({ error: 'Failed to create message' });
    }
  });
  
  app.get('/api/messages', async (_req: Request, res: Response) => {
    try {
      const messagesList = await storage.getAllMessages();
      return res.json(messagesList);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });
  
  app.patch('/api/messages/:id/read', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const updatedMessage = await storage.markMessageAsRead(id);
      
      if (!updatedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      
      return res.json(updatedMessage);
    } catch (error) {
      console.error('Error marking message as read:', error);
      return res.status(500).json({ error: 'Failed to update message' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
