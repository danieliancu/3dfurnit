
export interface Product {
  id: string;
  name: string;
  category: 'beds' | 'chairs' | 'lamps' | 'cabinets' | 'tables';
  price: number;
  image: string;
  glbModel?: string;
  description: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  dateAdded: string;
}

export interface PlacedProduct {
  instanceId: string;
  product: Product;
  position: { x: number; y: number };
  scale: number;
  rotation: number;
  cameraOrbit?: string; // Stochează rotația 3D (theta, phi, radius)
}

export type AppView = 'home' | 'catalog' | 'editor' | 'privacy' | 'terms';
export type Language = 'ro' | 'en' | 'fr' | 'de' | 'es';

export interface EditorState {
  roomImage: string | null;
  placedProducts: PlacedProduct[];
  activeInstanceId: string | null;
  isProcessing: boolean;
  error: string | null;
}
