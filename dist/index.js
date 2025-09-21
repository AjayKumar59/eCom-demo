// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  categories;
  products;
  cartItems;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.categories = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.cartItems = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const categories2 = [
      { id: randomUUID(), name: "Fitted Bedsheets", slug: "fitted-bedsheet", description: "Perfect fit for your mattress", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Bedsheets", slug: "hand-block-printed-bedsheets", description: "100% cotton hand-block printed", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Jaipuri Razais", slug: "jaipuri-razai", description: "Lightweight, soft and cozy quilts", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Mulmul Dohars", slug: "dohars", description: "Ultra-soft cotton dohars", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Dining Table Covers", slug: "table-covers", description: "100% cotton hand-block printed", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Round Table Covers", slug: "round-table-covers", description: "Perfect for round dining tables", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Table Mats", slug: "table-mats-napkins", description: "Set of 6 dining mats", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { id: randomUUID(), name: "Table Runner", slug: "table-runner", description: "Decorative table runners", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" }
    ];
    categories2.forEach((cat) => this.categories.set(cat.id, cat));
    const bedsheetsCategoryId = Array.from(this.categories.values()).find((c) => c.slug === "hand-block-printed-bedsheets")?.id;
    const products2 = [
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
    products2.forEach((product) => this.products.set(product.id, product));
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getCategories() {
    return Array.from(this.categories.values());
  }
  async getCategory(id) {
    return this.categories.get(id);
  }
  async getCategoryBySlug(slug) {
    return Array.from(this.categories.values()).find((cat) => cat.slug === slug);
  }
  async createCategory(insertCategory) {
    const id = randomUUID();
    const category = {
      ...insertCategory,
      id,
      description: insertCategory.description || null,
      image: insertCategory.image || null
    };
    this.categories.set(id, category);
    return category;
  }
  async getProducts(categoryId, featured) {
    let products2 = Array.from(this.products.values());
    if (categoryId) {
      products2 = products2.filter((product) => product.categoryId === categoryId);
    }
    if (featured !== void 0) {
      products2 = products2.filter((product) => product.featured === featured);
    }
    return products2;
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async getProductBySlug(slug) {
    return Array.from(this.products.values()).find((product) => product.slug === slug);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = {
      ...insertProduct,
      id,
      rating: "0",
      reviewCount: 0,
      description: insertProduct.description || null,
      originalPrice: insertProduct.originalPrice || null,
      categoryId: insertProduct.categoryId || null,
      images: insertProduct.images || [],
      sizes: insertProduct.sizes || [],
      colors: insertProduct.colors || [],
      inStock: insertProduct.inStock ?? true,
      featured: insertProduct.featured ?? false
    };
    this.products.set(id, product);
    return product;
  }
  async getCartItems(sessionId) {
    return Array.from(this.cartItems.values()).filter((item) => item.sessionId === sessionId);
  }
  async addToCart(insertItem) {
    const id = randomUUID();
    const item = {
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
  async updateCartItem(id, quantity) {
    const item = this.cartItems.get(id);
    if (item) {
      item.quantity = quantity;
      this.cartItems.set(id, item);
      return item;
    }
    return void 0;
  }
  async removeFromCart(id) {
    return this.cartItems.delete(id);
  }
  async clearCart(sessionId) {
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
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique()
});
var categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image")
});
var products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
  categoryId: varchar("category_id").references(() => categories.id),
  images: jsonb("images").$type().default([]),
  sizes: jsonb("sizes").$type().default([]),
  colors: jsonb("colors").$type().default([]),
  inStock: boolean("in_stock").default(true),
  featured: boolean("featured").default(false),
  rating: decimal("rating", { precision: 2, scale: 1 }).default("0"),
  reviewCount: integer("review_count").default(0)
});
var cartItems = pgTable("cart_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  productId: varchar("product_id").references(() => products.id),
  quantity: integer("quantity").notNull().default(1),
  size: text("size"),
  color: text("color")
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true
});
var insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  slug: true,
  description: true,
  image: true
});
var insertProductSchema = createInsertSchema(products).pick({
  name: true,
  slug: true,
  description: true,
  price: true,
  originalPrice: true,
  categoryId: true,
  images: true,
  sizes: true,
  colors: true,
  inStock: true,
  featured: true
});
var insertCartItemSchema = createInsertSchema(cartItems).pick({
  sessionId: true,
  productId: true,
  quantity: true,
  size: true,
  color: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories2 = await storage.getCategories();
      res.json(categories2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });
  app2.get("/api/categories/:slug", async (req, res) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });
  app2.get("/api/products", async (req, res) => {
    try {
      const { categoryId, featured } = req.query;
      const products2 = await storage.getProducts(
        categoryId,
        featured === "true"
      );
      res.json(products2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:slug", async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/cart/:sessionId", async (req, res) => {
    try {
      const items = await storage.getCartItems(req.params.sessionId);
      const itemsWithProducts = await Promise.all(
        items.map(async (item) => {
          const product = await storage.getProduct(item.productId || "");
          return { ...item, product };
        })
      );
      res.json(itemsWithProducts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cart items" });
    }
  });
  app2.post("/api/cart", async (req, res) => {
    try {
      const validatedData = insertCartItemSchema.parse(req.body);
      const existingItems = await storage.getCartItems(validatedData.sessionId);
      const existingItem = existingItems.find(
        (item) => item.productId === validatedData.productId && item.size === validatedData.size && item.color === validatedData.color
      );
      if (existingItem) {
        const updatedItem = await storage.updateCartItem(
          existingItem.id,
          existingItem.quantity + (validatedData.quantity || 1)
        );
        res.json(updatedItem);
      } else {
        const item = await storage.addToCart(validatedData);
        res.json(item);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid cart item data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to add item to cart" });
      }
    }
  });
  app2.put("/api/cart/:id", async (req, res) => {
    try {
      const { quantity } = req.body;
      if (typeof quantity !== "number" || quantity < 0) {
        return res.status(400).json({ message: "Invalid quantity" });
      }
      if (quantity === 0) {
        const removed = await storage.removeFromCart(req.params.id);
        res.json({ removed });
      } else {
        const item = await storage.updateCartItem(req.params.id, quantity);
        if (!item) {
          return res.status(404).json({ message: "Cart item not found" });
        }
        res.json(item);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to update cart item" });
    }
  });
  app2.delete("/api/cart/:id", async (req, res) => {
    try {
      const removed = await storage.removeFromCart(req.params.id);
      if (!removed) {
        return res.status(404).json({ message: "Cart item not found" });
      }
      res.json({ message: "Item removed from cart" });
    } catch (error) {
      res.status(500).json({ message: "Failed to remove item from cart" });
    }
  });
  app2.delete("/api/cart/session/:sessionId", async (req, res) => {
    try {
      await storage.clearCart(req.params.sessionId);
      res.json({ message: "Cart cleared" });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear cart" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
