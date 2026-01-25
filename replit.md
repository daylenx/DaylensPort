# Daylen Hall Portfolio Website

## Overview

A personal portfolio website for Daylen Hall, a computer science graduate and software developer. The site showcases projects, skills, resume, and freelance web development services. Built as a single-page application with a React frontend and Express backend, featuring a contact form for client inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions and effects
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared code)

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Server**: HTTP server running on configurable port (defaults to 5000)
- **API Design**: RESTful endpoints under `/api/` prefix
- **Development**: Vite dev server middleware for HMR
- **Production**: Static file serving from `dist/public`

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Validation**: Zod schemas with drizzle-zod integration
- **Current Storage**: In-memory storage class (MemStorage) for development
- **Database Migrations**: Drizzle Kit with migrations output to `./migrations`

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage abstraction
  vite.ts         # Vite dev server setup
  static.ts       # Production static serving
shared/           # Code shared between frontend/backend
  schema.ts       # Database schemas and Zod types
```

### Build System
- **Development**: `tsx` for running TypeScript directly
- **Production Build**: Custom build script using esbuild for server, Vite for client
- **Output**: Server bundle to `dist/index.cjs`, client to `dist/public`

## External Dependencies

### Database
- **PostgreSQL**: Required for production (DATABASE_URL environment variable)
- **Drizzle ORM**: Database queries and migrations
- **connect-pg-simple**: Session storage (available but not currently used)

### UI Framework
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, forms, etc.)
- **shadcn/ui**: Pre-built component library using Radix + Tailwind
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build and dev server
- **TypeScript**: Full type safety across the stack
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)

### Fonts
- **Google Fonts**: Inter (body text) and Fira Code (monospace)