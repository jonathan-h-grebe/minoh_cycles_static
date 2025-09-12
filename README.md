# Minoh Cycles Static Site

A Vue.js static website for Minoh Cycles bike tour business.

## Features

- Responsive design (desktop and mobile views)
- Built with Vue 3 and Vite
- Mobile-first hamburger menu
- Optimized for static deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Render

1. Connect your GitHub repository to Render
2. The `render.yaml` file will automatically configure the deployment
3. Render will build the site using `npm run build` and serve from the `dist` folder

## Project Structure

- `src/App.vue` - Main app component with responsive logic
- `src/components/DesktopLanding.vue` - Desktop version of the landing page
- `src/components/MobileLanding.vue` - Mobile version with hamburger menu
- `public/assets/` - Static images and assets