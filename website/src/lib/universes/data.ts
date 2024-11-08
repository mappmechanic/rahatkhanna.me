// dataLayer.ts

import fs from 'fs/promises';
import path from 'path';
import { Universe, Subcategory, Tool } from './types';

class DataLayer {
  private dataPath = path.join(process.cwd(), 'src/data');
  private universes: Universe[] | null = null;
  private subcategories: Subcategory[] | null = null;
  private tools: Tool[] | null = null;

  constructor() {
    this.initializeData();
  }

  // Initialize data once on server start
  private async initializeData() {
    this.universes = await this.loadJSON<Universe[]>('universes.json');
    this.subcategories = await this.loadJSON<Subcategory[]>('subcategories.json');
    this.tools = await this.loadJSON<Tool[]>('tools.json');
  }

  private async loadJSON<T>(filename: string): Promise<T> {
    const filePath = path.join(this.dataPath, filename);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data) as T;
  }

  async getUniverses(): Promise<Universe[]> {
    return this.universes || [];
  }

  async getSubcategories(): Promise<Subcategory[]> {
    return this.subcategories || [];
  }

  async getTools(): Promise<Tool[]> {
    return this.tools || [];
  }

  // New method: Get all universes with subcategories and tools
  async getAllUniversesWithDetails(): Promise<(Universe & { subcategories: (Subcategory & { tools: Tool[] })[] })[]> {
    const universes = await this.getUniverses();
    const subcategories = await this.getSubcategories();
    const tools = await this.getTools();

    return universes.map(universe => {
      // Map each universe to its detailed subcategories
      const universeSubcategories = universe.subcategories.map(subId => {
        const subcategory = subcategories.find(s => s.id === subId);
        if (!subcategory) {
          console.warn(`Subcategory with ID ${subId} not found for universe ${universe.id}`);
          return null; // Skip the subcategory
        }

        // Map each subcategory to its detailed tools
        const subcategoryTools = subcategory.tools.map(toolId => {
          const tool = tools.find(t => t.id === toolId);
          if (!tool) {
            console.warn(`Tool with ID ${toolId} not found`);
            return null; // Skip the tool
          }
          return tool;
        }).filter(tool => tool !== null); // Filter out null values

        return { ...subcategory, tools: subcategoryTools };
      }).filter(subcategory => subcategory !== null); // Filter out null subcategories

      return { ...universe, subcategories: universeSubcategories };
    });
  }
}

export default new DataLayer();