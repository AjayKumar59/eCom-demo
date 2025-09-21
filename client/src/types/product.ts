export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: string;
  originalPrice?: string;
  categoryId?: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  rating: string;
  reviewCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface CartItem {
  id: string;
  sessionId: string;
  productId?: string;
  quantity: number;
  size?: string;
  color?: string;
  product?: Product;
}
