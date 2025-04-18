import { 
  users, type User, type InsertUser,
  profiles, type Profile, type InsertProfile,
  skills, type Skill, type InsertSkill,
  expertise, type Expertise, type InsertExpertise,
  education, type Education, type InsertEducation,
  projects, type Project, type InsertProject,
  interests, type Interest, type InsertInterest,
  messages, type Message, type InsertMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Profile operations
  getProfile(id: number): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  updateProfile(id: number, profile: Partial<InsertProfile>): Promise<Profile | undefined>;
  
  // Skills operations
  getAllSkills(): Promise<Skill[]>;
  getSkill(id: number): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<boolean>;
  
  // Expertise operations
  getAllExpertise(): Promise<Expertise[]>;
  getExpertise(id: number): Promise<Expertise | undefined>;
  createExpertise(expertise: InsertExpertise): Promise<Expertise>;
  updateExpertise(id: number, expertise: Partial<InsertExpertise>): Promise<Expertise | undefined>;
  deleteExpertise(id: number): Promise<boolean>;
  
  // Education operations
  getAllEducation(): Promise<Education[]>;
  getEducation(id: number): Promise<Education | undefined>;
  createEducation(education: InsertEducation): Promise<Education>;
  updateEducation(id: number, education: Partial<InsertEducation>): Promise<Education | undefined>;
  deleteEducation(id: number): Promise<boolean>;
  
  // Project operations
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Interest operations
  getAllInterests(): Promise<Interest[]>;
  getInterest(id: number): Promise<Interest | undefined>;
  createInterest(interest: InsertInterest): Promise<Interest>;
  updateInterest(id: number, interest: Partial<InsertInterest>): Promise<Interest | undefined>;
  deleteInterest(id: number): Promise<boolean>;
  
  // Message operations
  getAllMessages(): Promise<Message[]>;
  getMessage(id: number): Promise<Message | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
  markMessageAsRead(id: number): Promise<Message | undefined>;
  deleteMessage(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Profile operations
  async getProfile(id: number): Promise<Profile | undefined> {
    const [profile] = await db.select().from(profiles).where(eq(profiles.id, id));
    return profile;
  }
  
  async createProfile(profile: InsertProfile): Promise<Profile> {
    const [newProfile] = await db.insert(profiles).values(profile).returning();
    return newProfile;
  }
  
  async updateProfile(id: number, profile: Partial<InsertProfile>): Promise<Profile | undefined> {
    const [updatedProfile] = await db.update(profiles)
      .set(profile)
      .where(eq(profiles.id, id))
      .returning();
    return updatedProfile;
  }
  
  // Skills operations
  async getAllSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }
  
  async getSkill(id: number): Promise<Skill | undefined> {
    const [skill] = await db.select().from(skills).where(eq(skills.id, id));
    return skill;
  }
  
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }
  
  async updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const [updatedSkill] = await db.update(skills)
      .set(skill)
      .where(eq(skills.id, id))
      .returning();
    return updatedSkill;
  }
  
  async deleteSkill(id: number): Promise<boolean> {
    await db.delete(skills).where(eq(skills.id, id));
    return true;
  }
  
  // Expertise operations
  async getAllExpertise(): Promise<Expertise[]> {
    return await db.select().from(expertise);
  }
  
  async getExpertise(id: number): Promise<Expertise | undefined> {
    const [expertiseItem] = await db.select().from(expertise).where(eq(expertise.id, id));
    return expertiseItem;
  }
  
  async createExpertise(expertiseItem: InsertExpertise): Promise<Expertise> {
    const [newExpertise] = await db.insert(expertise).values(expertiseItem).returning();
    return newExpertise;
  }
  
  async updateExpertise(id: number, expertiseItem: Partial<InsertExpertise>): Promise<Expertise | undefined> {
    const [updatedExpertise] = await db.update(expertise)
      .set(expertiseItem)
      .where(eq(expertise.id, id))
      .returning();
    return updatedExpertise;
  }
  
  async deleteExpertise(id: number): Promise<boolean> {
    await db.delete(expertise).where(eq(expertise.id, id));
    return true;
  }
  
  // Education operations
  async getAllEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }
  
  async getEducation(id: number): Promise<Education | undefined> {
    const [educationItem] = await db.select().from(education).where(eq(education.id, id));
    return educationItem;
  }
  
  async createEducation(educationItem: InsertEducation): Promise<Education> {
    const [newEducation] = await db.insert(education).values(educationItem).returning();
    return newEducation;
  }
  
  async updateEducation(id: number, educationItem: Partial<InsertEducation>): Promise<Education | undefined> {
    const [updatedEducation] = await db.update(education)
      .set(educationItem)
      .where(eq(education.id, id))
      .returning();
    return updatedEducation;
  }
  
  async deleteEducation(id: number): Promise<boolean> {
    await db.delete(education).where(eq(education.id, id));
    return true;
  }
  
  // Project operations
  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }
  
  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db.update(projects)
      .set(project)
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    await db.delete(projects).where(eq(projects.id, id));
    return true;
  }
  
  // Interest operations
  async getAllInterests(): Promise<Interest[]> {
    return await db.select().from(interests);
  }
  
  async getInterest(id: number): Promise<Interest | undefined> {
    const [interest] = await db.select().from(interests).where(eq(interests.id, id));
    return interest;
  }
  
  async createInterest(interest: InsertInterest): Promise<Interest> {
    const [newInterest] = await db.insert(interests).values(interest).returning();
    return newInterest;
  }
  
  async updateInterest(id: number, interest: Partial<InsertInterest>): Promise<Interest | undefined> {
    const [updatedInterest] = await db.update(interests)
      .set(interest)
      .where(eq(interests.id, id))
      .returning();
    return updatedInterest;
  }
  
  async deleteInterest(id: number): Promise<boolean> {
    await db.delete(interests).where(eq(interests.id, id));
    return true;
  }
  
  // Message operations
  async getAllMessages(): Promise<Message[]> {
    return await db.select().from(messages);
  }
  
  async getMessage(id: number): Promise<Message | undefined> {
    const [message] = await db.select().from(messages).where(eq(messages.id, id));
    return message;
  }
  
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
  
  async markMessageAsRead(id: number): Promise<Message | undefined> {
    const [updatedMessage] = await db.update(messages)
      .set({ isRead: true })
      .where(eq(messages.id, id))
      .returning();
    return updatedMessage;
  }
  
  async deleteMessage(id: number): Promise<boolean> {
    await db.delete(messages).where(eq(messages.id, id));
    return true;
  }
}

export const storage = new DatabaseStorage();
