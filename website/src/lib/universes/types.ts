export interface Tool {
    id: string;
    name: string;
    description: string;
    logo: string;
    url: string;
    founded_year: number;
    location: string;
    funding_round: string;
    category: string;
    universe_id: string;
}

export interface Subcategory {
    id: string;
    universe_id: string;
    name: string;
    description: string;
    tools: Tool[] | string[]; // Array of tool IDs
}

export interface Universe {
    id: string;
    name: string;
    description: string;
    subcategories: Subcategory[] | string[]; // Array of subcategory IDs
}