# Overview

This is a modern e-commerce application for Namya Living, a home textiles company specializing in handcrafted bedsheets, quilts, and home decor items. The application features a React-based frontend with a Node.js/Express backend, built for selling traditional Indian home textiles with hand-block printed designs.

The system provides a complete shopping experience with product browsing, cart management, and category-based navigation. It's designed as a full-stack web application with modern UI components and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom color scheme and typography
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for products, categories, and cart operations
- **Session Management**: Session-based cart storage for guest users
- **Development Setup**: Custom Vite integration for SSR-like development experience

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (via Neon serverless) configured but currently using in-memory storage
- **Schema**: Well-defined schema for users, categories, products, and cart items
- **Migration**: Drizzle Kit for database migrations and schema management

## Cart and Session Management
- **Guest Cart**: Browser localStorage-based session IDs for anonymous users
- **Cart Context**: React Context API for cart state management across components
- **Real-time Updates**: Optimistic updates with React Query mutations

## UI/UX Design Patterns
- **Component Library**: Comprehensive shadcn/ui components (buttons, dialogs, forms, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Inter for body text, Playfair Display for headings
- **Color Scheme**: Warm, earthy tones reflecting traditional Indian textiles
- **Loading States**: Skeleton components and loading indicators throughout

## Development and Build Process
- **Development**: Hot module replacement with Vite
- **Type Checking**: Strict TypeScript configuration with path mapping
- **Code Organization**: Modular structure with shared types and utilities
- **Asset Handling**: Vite-based asset processing and optimization

# External Dependencies

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling for components
- **lucide-react**: Modern icon library

## State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Forms and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

## Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **nanoid**: Unique ID generation