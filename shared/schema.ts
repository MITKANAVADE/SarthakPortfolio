import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Base users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Profile information
export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  title: text("title").notNull(),
  bio: text("bio"),
  email: text("email"),
  phone: text("phone"),
  location: text("location"),
  avatarUrl: text("avatar_url"),
  resumeUrl: text("resume_url"),
  linkedinUrl: text("linkedin_url"),
  githubUrl: text("github_url"),
});

export const insertProfileSchema = createInsertSchema(profiles).pick({
  fullName: true,
  title: true,
  bio: true,
  email: true,
  phone: true,
  location: true,
  avatarUrl: true,
  resumeUrl: true,
  linkedinUrl: true,
  githubUrl: true,
});

// Skills section
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: integer("percentage").notNull(),
  category: text("category"),
});

export const insertSkillSchema = createInsertSchema(skills).pick({
  name: true,
  percentage: true,
  category: true,
});

// Expertise areas
export const expertise = pgTable("expertise", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
});

export const insertExpertiseSchema = createInsertSchema(expertise).pick({
  name: true,
  icon: true,
  description: true,
});

// Education history
export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
  period: text("period").notNull(),
  description: text("description"),
  isCompleted: boolean("is_completed").default(false),
  icon: text("icon"),
});

export const insertEducationSchema = createInsertSchema(education).pick({
  degree: true,
  institution: true,
  period: true,
  description: true,
  isCompleted: true,
  icon: true,
});

// Projects 
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  tags: text("tags").array().notNull(),
  url: text("url"),
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  icon: true,
  tags: true,
  url: true,
});

// Interests/Hobbies
export const interests = pgTable("interests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
});

export const insertInterestSchema = createInsertSchema(interests).pick({
  name: true,
  icon: true,
  description: true,
});

// Contact messages from visitors
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  isRead: boolean("is_read").default(false),
});

export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

// Define all types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type Profile = typeof profiles.$inferSelect;

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

export type InsertExpertise = z.infer<typeof insertExpertiseSchema>;
export type Expertise = typeof expertise.$inferSelect;

export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof education.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertInterest = z.infer<typeof insertInterestSchema>;
export type Interest = typeof interests.$inferSelect;

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
