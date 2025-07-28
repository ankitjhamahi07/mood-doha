import { type Doha } from "@shared/schema";
import { dohasData } from "../client/src/data/dohas";

export interface IStorage {
  getDohasByMood(mood: string): Promise<Doha[]>;
  getAllMoods(): Promise<string[]>;
  getRandomDohaByMood(mood: string): Promise<Doha | undefined>;
}

export class MemStorage implements IStorage {
  private dohas: Doha[];

  constructor() {
    this.dohas = dohasData;
  }

  async getDohasByMood(mood: string): Promise<Doha[]> {
    return this.dohas.filter(doha => 
      doha.moods.some(m => m.toLowerCase() === mood.toLowerCase())
    );
  }

  async getAllMoods(): Promise<string[]> {
    const moodSet = new Set<string>();
    this.dohas.forEach(doha => {
      doha.moods.forEach(mood => moodSet.add(mood));
    });
    return Array.from(moodSet).sort();
  }

  async getRandomDohaByMood(mood: string): Promise<Doha | undefined> {
    const dohas = await this.getDohasByMood(mood);
    if (dohas.length === 0) return undefined;
    return dohas[Math.floor(Math.random() * dohas.length)];
  }
}

export const storage = new MemStorage();
