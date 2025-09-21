import { type User, type InsertUser, type Category, type InsertCategory, type Product, type InsertProduct, type CartItem, type InsertCartItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  // Products
  getProducts(categoryId?: string, featured?: boolean): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Cart
  getCartItems(sessionId: string): Promise<CartItem[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: string, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: string): Promise<boolean>;
  clearCart(sessionId: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private categories: Map<string, Category>;
  private products: Map<string, Product>;
  private cartItems: Map<string, CartItem>;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.products = new Map();
    this.cartItems = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories
    const categories = [
      { id: randomUUID(), name: "Fitted Bedsheets", slug: "fitted-bedsheet", description: "Perfect fit for your mattress", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Bedsheets", slug: "hand-block-printed-bedsheets", description: "100% cotton hand-block printed", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Jaipuri Razais", slug: "jaipuri-razai", description: "Lightweight, soft and cozy quilts", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Mulmul Dohars", slug: "dohars", description: "Ultra-soft cotton dohars", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Dining Table Covers", slug: "table-covers", description: "100% cotton hand-block printed", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Round Table Covers", slug: "round-table-covers", description: "Perfect for round dining tables", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Table Mats", slug: "table-mats-napkins", description: "Set of 6 dining mats", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Table Runner", slug: "table-runner", description: "Decorative table runners", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" }
    ];

    categories.forEach(cat => this.categories.set(cat.id, cat));

    // Initialize bestselling products
    const bedsheetsCategoryId = Array.from(this.categories.values()).find(c => c.slug === "hand-block-printed-bedsheets")?.id;
    
    const products = [
      {
        id: randomUUID(),
        name: "Turquoise and blue 2 colour matching motif bedsheet set",
        slug: "turquoise-and-blue-2-colour-matching-motif-bedsheet-set",
        description: "Our bedsheets are 100% cotton and hand-block printed. We have 3 sizes available.",
        price: "2900.00",
        originalPrice: "3250.00",
        categoryId: bedsheetsCategoryId || "",
        images: [
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
        ],
        sizes: ["Single", "Double", "King"],
        colors: ["Turquoise", "Blue"],
        inStock: true,
        featured: true,
        rating: "4.5",
        reviewCount: 2
      },
      {
        id: randomUUID(),
        name: "Maroon and magenta forest abstract bedsheet set",
        slug: "maroon-and-magenta-forest-abstract-bedsheet-set",
        description: "Beautiful forest abstract pattern in maroon and magenta colors.",
        price: "2900.00",
        originalPrice: "3250.00",
        categoryId: bedsheetsCategoryId || "",
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
        ],
        sizes: ["Single", "Double", "King"],
        colors: ["Maroon", "Magenta"],
        inStock: true,
        featured: true,
        rating: "4.8",
        reviewCount: 4
      },
      {
        id: randomUUID(),
        name: "Blues and parrot kamal phool bedsheet set (floral jaal)",
        slug: "blues-and-parrot-kamal-phool-bedsheet-set-floral-jaal",
        description: "Beautiful floral jaal pattern with kamal phool design.",
        price: "2900.00",
        originalPrice: "3250.00",
        categoryId: bedsheetsCategoryId || "",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
        ],
        sizes: ["Single", "Double", "King"],
        colors: ["Blue", "Parrot Green"],
        inStock: true,
        featured: true,
        rating: "5.0",
        reviewCount: 4
      },
      {
        id: randomUUID(),
        name: "Lilac and maroon scattered ethnic bedsheet set",
        slug: "lilac-and-maroon-scattered-ethnic-bedsheet-set",
        description: "Elegant scattered ethnic pattern in lilac and maroon.",
        price: "2900.00",
        originalPrice: "3250.00",
        categoryId: bedsheetsCategoryId || "",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
        ],
        sizes: ["Single", "Double", "King"],
        colors: ["Lilac", "Maroon"],
        inStock: true,
        featured: true,
        rating: "0",
        reviewCount: 0
      }
    ];

    products.forEach(product => this.products.set(product.id, product));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { 
      ...insertCategory, 
      id,
      description: insertCategory.description || null,
      image: insertCategory.image || null
    };
    this.categories.set(id, category);
    return category;
  }

  async getProducts(categoryId?: string, featured?: boolean): Promise<Product[]> {
    let products = Array.from(this.products.values());
    
    if (categoryId) {
      products = products.filter(product => product.categoryId === categoryId);
    }
    
    if (featured !== undefined) {
      products = products.filter(product => product.featured === featured);
    }
    
    return products;
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(product => product.slug === slug);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id, 
      rating: "0", 
      reviewCount: 0,
      description: insertProduct.description || null,
      originalPrice: insertProduct.originalPrice || null,
      categoryId: insertProduct.categoryId || null,
      images: (insertProduct.images as string[]) || [],
      sizes: (insertProduct.sizes as string[]) || [],
      colors: (insertProduct.colors as string[]) || [],
      inStock: insertProduct.inStock ?? true,
      featured: insertProduct.featured ?? false
    };
    this.products.set(id, product);
    return product;
  }

  async getCartItems(sessionId: string): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(item => item.sessionId === sessionId);
  }

  async addToCart(insertItem: InsertCartItem): Promise<CartItem> {
    const id = randomUUID();
    const item: CartItem = { 
      ...insertItem, 
      id,
      productId: insertItem.productId || null,
      size: insertItem.size || null,
      color: insertItem.color || null,
      quantity: insertItem.quantity || 1
    };
    this.cartItems.set(id, item);
    return item;
  }

  async updateCartItem(id: string, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (item) {
      item.quantity = quantity;
      this.cartItems.set(id, item);
      return item;
    }
    return undefined;
  }

  async removeFromCart(id: string): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(sessionId: string): Promise<boolean> {
    const items = Array.from(this.cartItems.entries());
    let removed = false;
    
    items.forEach(([id, item]) => {
      if (item.sessionId === sessionId) {
        this.cartItems.delete(id);
        removed = true;
      }
    });
    
    return removed;
  }
}

export const storage = new MemStorage();
