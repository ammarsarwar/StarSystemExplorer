import { 
  users, type User, type InsertUser,
  celestialObjects, type CelestialObject, type InsertCelestialObject,
  constellations, type Constellation, type InsertConstellation,
  userObservations, type UserObservation, type InsertUserObservation
} from "@shared/schema";
import { planets, zodiacSigns, celestialEvents, visibleObjects, skyInfo } from "../client/src/lib/constants";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Celestial object operations
  getCelestialObjectById(id: number): Promise<CelestialObject | undefined>;
  getAllCelestialObjects(type?: string): Promise<CelestialObject[]>;
  createCelestialObject(object: InsertCelestialObject): Promise<CelestialObject>;
  
  // Constellation operations
  getConstellationById(id: number): Promise<Constellation | undefined>;
  getAllConstellations(): Promise<Constellation[]>;
  getZodiacConstellations(): Promise<Constellation[]>;
  createConstellation(constellation: InsertConstellation): Promise<Constellation>;
  
  // Night sky operations
  getNightSkyData(date?: string, location?: string): Promise<any>;
  getCelestialEvents(): Promise<any[]>;
  
  // User observation operations
  getUserObservations(userId: number): Promise<UserObservation[]>;
  createUserObservation(observation: InsertUserObservation): Promise<UserObservation>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private userStore: Map<number, User>;
  private celestialObjectStore: Map<number, CelestialObject>;
  private constellationStore: Map<number, Constellation>;
  private userObservationStore: Map<number, UserObservation>;
  
  private userIdCounter: number;
  private celestialObjectIdCounter: number;
  private constellationIdCounter: number;
  private observationIdCounter: number;

  constructor() {
    this.userStore = new Map();
    this.celestialObjectStore = new Map();
    this.constellationStore = new Map();
    this.userObservationStore = new Map();
    
    this.userIdCounter = 1;
    this.celestialObjectIdCounter = 1;
    this.constellationIdCounter = 1;
    this.observationIdCounter = 1;
    
    // Initialize with sample data from constants
    this.initializeData();
  }

  private initializeData() {
    // Initialize celestial objects from planets
    planets.forEach(planet => {
      const planetData: InsertCelestialObject = {
        name: planet.name,
        type: "planet",
        description: planet.description,
        imageUrl: planet.imagePath,
        data: {
          id: planet.id,
          orderNumber: planet.orderNumber,
          color: planet.color,
          diameter: planet.diameter,
          dayLength: planet.dayLength,
          orbitalPeriod: planet.orbitalPeriod,
          moons: planet.moons
        }
      };
      this.createCelestialObject(planetData);
    });

    // Initialize constellations from zodiac signs
    zodiacSigns.forEach(sign => {
      const constellationData: InsertConstellation = {
        name: sign.name,
        zodiacSign: true,
        rightAscension: sign.rightAscension,
        declination: sign.declination,
        description: sign.description,
        imageUrl: "",
        stars: sign.stars,
        lines: sign.lines,
        borders: sign.borders
      };
      this.createConstellation(constellationData);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.userStore.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.userStore.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: now
    };
    this.userStore.set(id, user);
    return user;
  }
  
  // Celestial object operations
  async getCelestialObjectById(id: number): Promise<CelestialObject | undefined> {
    return this.celestialObjectStore.get(id);
  }
  
  async getAllCelestialObjects(type?: string): Promise<CelestialObject[]> {
    const objects = Array.from(this.celestialObjectStore.values());
    if (type) {
      return objects.filter(obj => obj.type === type);
    }
    return objects;
  }
  
  async createCelestialObject(insertObject: InsertCelestialObject): Promise<CelestialObject> {
    const id = this.celestialObjectIdCounter++;
    const now = new Date();
    const object: CelestialObject = {
      ...insertObject,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.celestialObjectStore.set(id, object);
    return object;
  }
  
  // Constellation operations
  async getConstellationById(id: number): Promise<Constellation | undefined> {
    return this.constellationStore.get(id);
  }
  
  async getAllConstellations(): Promise<Constellation[]> {
    return Array.from(this.constellationStore.values());
  }
  
  async getZodiacConstellations(): Promise<Constellation[]> {
    return Array.from(this.constellationStore.values())
      .filter(constellation => constellation.zodiacSign);
  }
  
  async createConstellation(insertConstellation: InsertConstellation): Promise<Constellation> {
    const id = this.constellationIdCounter++;
    const now = new Date();
    const constellation: Constellation = {
      ...insertConstellation,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.constellationStore.set(id, constellation);
    return constellation;
  }
  
  // Night sky operations
  async getNightSkyData(date?: string, location?: string): Promise<any> {
    // In a real implementation, this would fetch data based on date and location
    return {
      events: celestialEvents,
      visibleObjects,
      skyInfo,
      date: date || "Current Date",
      location: location || "Default Location"
    };
  }
  
  async getCelestialEvents(): Promise<any[]> {
    return celestialEvents;
  }
  
  // User observation operations
  async getUserObservations(userId: number): Promise<UserObservation[]> {
    return Array.from(this.userObservationStore.values())
      .filter(observation => observation.userId === userId);
  }
  
  async createUserObservation(insertObservation: InsertUserObservation): Promise<UserObservation> {
    const id = this.observationIdCounter++;
    const now = new Date();
    const observation: UserObservation = {
      ...insertObservation,
      id,
      createdAt: now
    };
    this.userObservationStore.set(id, observation);
    return observation;
  }
}

export const storage = new MemStorage();
