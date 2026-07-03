export interface SystemRequirements {
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}

export interface Game {
  id: string;
  title: string;
  categories: string[];
  description: string;
  releaseYear: number;
  rating: number; // e.g., 9.2 or 4.8
  size: string; // e.g., "110 GB"
  steamUrl: string;
  imageUrl: string;
  popularity: number; // sorting index, higher means more popular
  developer: string;
  publisher: string;
  requirements?: SystemRequirements;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface SafetyTip {
  title: string;
  description: string;
  type: 'warning' | 'info' | 'success' | 'danger';
}
