# NovaCare Medical Center Website

A high-converting, premium, and modern medical center website built with React, Vite, and Tailwind CSS.

## Project Purpose

This project is designed to serve as a complete, production-ready landing page and marketing website for a medical center. It focuses heavily on conversion, trust-building, and clarity of services. The architecture is component-based, making it easy to scale, maintain, and update.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **UI Components:** Radix UI Primitives (Accordion, Slot)

## Local Setup

1. **Clone the repository** (or download the source code).
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` (or the port provided by Vite) in your browser.

## How to Edit Content

All core text, images, services, doctors, testimonials, and FAQs are centralized in a single data file for easy editing.

1. Open `src/data/content.ts`.
2. Modify the exported objects and arrays (e.g., `clinicInfo`, `services`, `doctors`).
3. Save the file. The UI will automatically update to reflect the new data.

## Build Command

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the static assets.

## GitHub Pages Deployment

This project is optimized for static hosting like GitHub Pages.

### Manual Deployment

1. Build the project: `npm run build`
2. Push the contents of the `dist` folder to a `gh-pages` branch, or configure your repository settings to serve from the `docs` folder (if you rename `dist` to `docs`).

### Configuring Base Paths

If you are deploying to a subdirectory on GitHub Pages (e.g., `https://username.github.io/repo-name/`), you need to update the `vite.config.ts` file to include the `base` property:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/repo-name/', // Add your repository name here
  // ... other config
});
```

## Project Structure

- `src/components/layout/`: Global layout components (Header, Footer).
- `src/components/sections/`: Individual page sections (Hero, About, Services, etc.).
- `src/components/ui/`: Reusable UI primitives (Button, Card, Input, etc.).
- `src/data/`: Centralized content data.
- `src/lib/`: Utility functions.
