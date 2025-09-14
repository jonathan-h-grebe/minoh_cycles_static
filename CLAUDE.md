# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (opens on http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Architecture Overview

This is a Vue.js 3 static website for Minoh Cycles bike tour business, built with Vite. The application uses a responsive design pattern with separate components for desktop and mobile views.

### Key Architecture Patterns

- **Responsive Component Architecture**: The main `App.vue` component dynamically switches between `DesktopLanding` and `MobileLanding` components based on screen width (768px breakpoint)
- **Mobile-First Design**: Uses a hamburger menu pattern for mobile navigation
- **Static Site Generation**: Built for deployment as a static site using Vite's build system

### Project Structure

```
src/
├── main.js                           # Vue app entry point
├── App.vue                          # Main component with responsive logic
└── components/
    ├── DesktopLanding.vue           # Desktop version of landing page
    └── MobileLanding.vue            # Mobile version with hamburger menu
```

### Key Components

- `src/App.vue:22-26` - Contains the responsive breakpoint logic that determines mobile vs desktop view
- The app uses Vue 3 Composition API throughout
- No state management library - uses local component state

## Deployment

The project is configured for deployment on Render using the `render.yaml` configuration:
- Build command: `npm install && npm run build`
- Static files served from `./dist`
- SPA routing configured with catch-all rewrite to `/index.html`

## Tech Stack

- Vue 3 (Composition API)
- Vite (build tool and dev server)
- No CSS framework (custom CSS)
- No testing framework currently configured