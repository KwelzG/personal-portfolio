import { 
  users, 
  type User, 
  type InsertUser, 
  type TimelineItem, 
  type InsertTimelineItem, 
  type Project, 
  type InsertProject, 
  type ContentSection, 
  type LiveFeedItem, 
  type InsertLiveFeedItem 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolio content management
  getTimelineItems(): Promise<TimelineItem[]>;
  createTimelineItem(item: InsertTimelineItem): Promise<TimelineItem>;
  updateTimelineItem(id: number, updates: Partial<InsertTimelineItem>): Promise<TimelineItem>;
  deleteTimelineItem(id: number): Promise<void>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, updates: Partial<InsertProject>): Promise<Project>;
  deleteProject(id: number): Promise<void>;
  
  getContentSection(sectionName: string): Promise<ContentSection | undefined>;
  updateContentSection(sectionName: string, content: any, imageUrl?: string): Promise<ContentSection>;
  
  getLiveFeedItems(): Promise<LiveFeedItem[]>;
  createLiveFeedItem(item: InsertLiveFeedItem): Promise<LiveFeedItem>;
  updateLiveFeedItem(id: number, updates: Partial<InsertLiveFeedItem>): Promise<LiveFeedItem>;
  deleteLiveFeedItem(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private timelineItems: Map<number, TimelineItem>;
  private projects: Map<number, Project>;
  private contentSections: Map<string, ContentSection>;
  private liveFeedItems: Map<number, LiveFeedItem>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.timelineItems = new Map();
    this.projects = new Map();
    this.contentSections = new Map();
    this.liveFeedItems = new Map();
    this.currentId = 1;
    
    // Initialize with default data
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Default timeline items
    const defaultTimeline: TimelineItem[] = [
      {
        id: 1, age: "13", title: "Early entrepreneurial mindset", 
        description: "Developed strategic thinking and began exploring technology's potential to solve real-world problems.",
        side: "left", isActive: false, imageUrl: null, displayOrder: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 2, age: "16", title: "Blockchain introduction",
        description: "First exposure to blockchain technology and cryptocurrency. Recognized the transformative potential of decentralized systems.",
        side: "right", isActive: false, imageUrl: null, displayOrder: 2,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 3, age: "18", title: "Skill diversification",
        description: "Expanded skill set beyond technology, learning traditional trades while building digital expertise.",
        side: "left", isActive: false, imageUrl: null, displayOrder: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 4, age: "19", title: "Founded Prop3 & LexAI",
        description: "Launched two technology companies focused on AI and blockchain solutions for African markets.",
        side: "right", isActive: true, imageUrl: null, displayOrder: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 5, age: "Future", title: "Scaling impact across Africa",
        description: "Building sustainable technology infrastructure that creates lasting economic opportunities across the continent.",
        side: "left", isActive: false, imageUrl: null, displayOrder: 5,
        createdAt: new Date(), updatedAt: new Date()
      }
    ];

    defaultTimeline.forEach(item => this.timelineItems.set(item.id, item));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Timeline methods
  async getTimelineItems(): Promise<TimelineItem[]> {
    return Array.from(this.timelineItems.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async createTimelineItem(item: InsertTimelineItem): Promise<TimelineItem> {
    const id = this.currentId++;
    const timelineItem: TimelineItem = {
      ...item,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.timelineItems.set(id, timelineItem);
    return timelineItem;
  }

  async updateTimelineItem(id: number, updates: Partial<InsertTimelineItem>): Promise<TimelineItem> {
    const existing = this.timelineItems.get(id);
    if (!existing) throw new Error("Timeline item not found");
    
    const updated: TimelineItem = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.timelineItems.set(id, updated);
    return updated;
  }

  async deleteTimelineItem(id: number): Promise<void> {
    this.timelineItems.delete(id);
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentId++;
    const newProject: Project = {
      ...project,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async updateProject(id: number, updates: Partial<InsertProject>): Promise<Project> {
    const existing = this.projects.get(id);
    if (!existing) throw new Error("Project not found");
    
    const updated: Project = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: number): Promise<void> {
    this.projects.delete(id);
  }

  // Content section methods
  async getContentSection(sectionName: string): Promise<ContentSection | undefined> {
    return this.contentSections.get(sectionName);
  }

  async updateContentSection(sectionName: string, content: any, imageUrl?: string): Promise<ContentSection> {
    const existing = this.contentSections.get(sectionName);
    const section: ContentSection = {
      id: existing?.id || this.currentId++,
      sectionName,
      content,
      imageUrl: imageUrl || existing?.imageUrl || null,
      updatedAt: new Date(),
    };
    this.contentSections.set(sectionName, section);
    return section;
  }

  // Live feed methods
  async getLiveFeedItems(): Promise<LiveFeedItem[]> {
    return Array.from(this.liveFeedItems.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async createLiveFeedItem(item: InsertLiveFeedItem): Promise<LiveFeedItem> {
    const id = this.currentId++;
    const feedItem: LiveFeedItem = {
      ...item,
      id,
      createdAt: new Date(),
    };
    this.liveFeedItems.set(id, feedItem);
    return feedItem;
  }

  async updateLiveFeedItem(id: number, updates: Partial<InsertLiveFeedItem>): Promise<LiveFeedItem> {
    const existing = this.liveFeedItems.get(id);
    if (!existing) throw new Error("Live feed item not found");
    
    const updated: LiveFeedItem = {
      ...existing,
      ...updates,
    };
    this.liveFeedItems.set(id, updated);
    return updated;
  }

  async deleteLiveFeedItem(id: number): Promise<void> {
    this.liveFeedItems.delete(id);
  }
}

export const storage = new MemStorage();
