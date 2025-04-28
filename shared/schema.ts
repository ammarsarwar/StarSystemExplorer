import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Celestial objects
export const celestialObjects = pgTable("celestial_objects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // planet, star, moon, etc.
  description: text("description"),
  imageUrl: text("image_url"),
  data: jsonb("data"), // For storing flexible astronomical data
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertCelestialObjectSchema = createInsertSchema(celestialObjects).pick({
  name: true,
  type: true,
  description: true,
  imageUrl: true,
  data: true,
});

// Constellations
export const constellations = pgTable("constellations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  zodiacSign: boolean("zodiac_sign").default(false),
  rightAscension: text("right_ascension"),
  declination: text("declination"),
  description: text("description"),
  imageUrl: text("image_url"),
  stars: jsonb("stars"), // Store star positions and details
  lines: jsonb("lines"), // Store constellation line connections
  borders: jsonb("borders"), // Store bordering constellations
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertConstellationSchema = createInsertSchema(constellations).pick({
  name: true,
  zodiacSign: true,
  rightAscension: true,
  declination: true,
  description: true,
  imageUrl: true,
  stars: true,
  lines: true,
  borders: true,
});

// User observations and favorites
export const userObservations = pgTable("user_observations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  objectType: text("object_type").notNull(), // planet, constellation, etc.
  objectId: integer("object_id").notNull(),
  notes: text("notes"),
  favorited: boolean("favorited").default(false),
  observationDate: timestamp("observation_date").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserObservationSchema = createInsertSchema(userObservations).pick({
  userId: true,
  objectType: true,
  objectId: true,
  notes: true,
  favorited: true,
  observationDate: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCelestialObject = z.infer<typeof insertCelestialObjectSchema>;
export type CelestialObject = typeof celestialObjects.$inferSelect;

export type InsertConstellation = z.infer<typeof insertConstellationSchema>;
export type Constellation = typeof constellations.$inferSelect;

export type InsertUserObservation = z.infer<typeof insertUserObservationSchema>;
export type UserObservation = typeof userObservations.$inferSelect;
