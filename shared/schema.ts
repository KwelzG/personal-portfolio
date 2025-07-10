import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Portfolio content tables for backend management
export const timelineItems = pgTable("timeline_items", {
  id: serial("id").primaryKey(),
  age: text("age").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  side: text("side").notNull(), // "left" or "right"
  isActive: boolean("is_active").default(false),
  imageUrl: text("image_url"),
  displayOrder: integer("display_order").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(),
  statusColor: text("status_color").notNull(),
  tags: jsonb("tags").$type<string[]>().notNull(),
  imageUrl: text("image_url"),
  projectUrl: text("project_url"),
  displayOrder: integer("display_order").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const contentSections = pgTable("content_sections", {
  id: serial("id").primaryKey(),
  sectionName: text("section_name").notNull().unique(), // hero, about, footer, etc.
  content: jsonb("content").notNull(), // flexible JSON content
  imageUrl: text("image_url"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const liveFeedItems = pgTable("live_feed_items", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // "insight", "update", "learning"
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  timeAgo: text("time_ago").notNull(),
  displayOrder: integer("display_order").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTimelineItemSchema = createInsertSchema(timelineItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertContentSectionSchema = createInsertSchema(contentSections).omit({
  id: true,
  updatedAt: true,
});

export const insertLiveFeedItemSchema = createInsertSchema(liveFeedItems).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type TimelineItem = typeof timelineItems.$inferSelect;
export type InsertTimelineItem = z.infer<typeof insertTimelineItemSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ContentSection = typeof contentSections.$inferSelect;
export type InsertContentSection = z.infer<typeof insertContentSectionSchema>;
export type LiveFeedItem = typeof liveFeedItems.$inferSelect;
export type InsertLiveFeedItem = z.infer<typeof insertLiveFeedItemSchema>;
