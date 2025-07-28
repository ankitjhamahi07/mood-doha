# Kabir Doha Spiritual Web App

## Overview

This is a full-stack web application that provides users with a calming, spiritual experience through Kabir's dohas (couplets). Users select their current mood from a cloud of mood options and receive a matching Kabir doha presented in Hindi (Devanagari), transliteration, and English translation. The app emphasizes mindful transitions and a minimal, text-focused design with enhanced spiritual aesthetics including Tiro Devanagari Hindi font, Playfair Display for English, soft pastel mood buttons, and proper randomization.

## Recent Changes

**January 27, 2025:**
- Expanded doha collection from 30 to 50 dohas with diverse moods
- Implemented proper randomization using Fisher-Yates shuffle algorithm
- Enhanced spiritual UI with Tiro Devanagari Hindi and Playfair Display fonts
- Added soft background gradients and improved color palette
- Implemented rotating pastel mood button styles (sage, saffron, sky blue)
- Added "Kabir says..." subtitle for enhanced spiritual presentation
- Improved animations with slower, more mindful transitions
- Enhanced responsive design and breathing space around content

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between client and server components:

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: TailwindCSS with custom spiritual color palette (cream, charcoal, sage)
- **Animations**: Framer Motion for smooth, mindful transitions
- **Typography**: Google Fonts (Noto Sans Devanagari for Hindi, Noto Serif/Inter for English)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with three main endpoints
- **Data Storage**: In-memory storage using a simple class-based approach
- **Development**: Vite integration for hot module replacement

## Key Components

### Frontend Components
1. **MoodCloud**: Interactive grid of mood buttons with hover effects
2. **DohaDisplay**: Renders dohas with proper typography and language support
3. **UI Components**: Comprehensive shadcn/ui component library
4. **Pages**: Home (mood selection) and Doha (doha display) pages

### Backend Components
1. **Express Server**: Main application server with logging middleware
2. **Storage Layer**: MemStorage class implementing IStorage interface
3. **Route Handlers**: Three main API endpoints for mood and doha management
4. **Vite Integration**: Development server setup with HMR support

### Shared Components
1. **Schema**: Zod schemas for type-safe data validation
2. **Types**: TypeScript interfaces for Doha and Mood entities

## Data Flow

1. **Initial Load**: User accesses homepage showing mood cloud
2. **Mood Selection**: User clicks mood → triggers navigation to `/doha/:mood`
3. **API Request**: Frontend queries `/api/dohas/:mood/random` endpoint
4. **Data Retrieval**: Server searches in-memory doha collection by mood
5. **Response**: Server returns random doha matching the selected mood
6. **Display**: DohaDisplay component renders Hindi, transliteration, and translation
7. **Navigation**: "Next Doha" button fetches another random doha for same mood
8. **Transitions**: All state changes use smooth Framer Motion animations

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, ReactDOM, React Query)
- Express.js server framework
- TypeScript for type safety
- Vite for build tooling and development server

### UI and Styling Dependencies
- TailwindCSS for utility-first styling
- Radix UI primitives for accessible components
- Framer Motion for animations
- Lucide React for icons
- Google Fonts for typography

### Development Dependencies
- Drizzle ORM with PostgreSQL support (configured but not actively used)
- ESBuild for production builds
- Various TypeScript and development tools

### Database Configuration
- Drizzle ORM is configured for PostgreSQL with migration support
- Database schema defined in `shared/schema.ts`
- Currently using in-memory storage, but database integration is prepared

## Deployment Strategy

### Development Mode
- Uses Vite development server with HMR
- Express server runs on Node.js with tsx for TypeScript execution
- Automatic reloading for both client and server code

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Serving**: Production server serves built frontend assets
4. **Environment**: NODE_ENV controls development vs production behavior

### Build Scripts
- `dev`: Start development server with hot reloading
- `build`: Create production builds for both frontend and backend
- `start`: Run production server
- `db:push`: Database schema migration (when database is used)

### Architecture Decisions

**Problem**: Need for smooth, mindful user experience
**Solution**: Framer Motion animations with 300-500ms easing transitions
**Rationale**: Creates calming, spiritual atmosphere matching content theme

**Problem**: Multi-language content display (Hindi, transliteration, English)
**Solution**: Custom typography system with Google Fonts and proper language styling
**Rationale**: Authentic presentation of Kabir's dohas in original and accessible formats

**Problem**: Simple content management without database complexity
**Solution**: In-memory storage with JSON data structure
**Rationale**: Suitable for static content with fast access, easy deployment

**Problem**: Type safety across full stack
**Solution**: Shared TypeScript schemas with Zod validation
**Rationale**: Prevents runtime errors and ensures data consistency between client/server