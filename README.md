# Samarth's Engineering Portfolio

A premium, production-ready software engineering portfolio built with Next.js 14 and React Server Components. Designed with a strict Content-Decoupled architecture, ensuring extreme maintainability and a frictionless recruiter experience.

## Architecture & Principles

This is not a template; it is a meticulously engineered application.
- **Content-Decoupled UI**: All data (projects, skills, workflows, etc.) is isolated in strictly-typed TypeScript modules (`content/`). UI components act purely as dumb rendering layers.
- **Server Components by Default**: Zero client-side JavaScript is shipped unless interactivity explicitly requires it, resulting in blazing fast load times.
- **Single Source of Truth**: Data points (like the GitHub URL or a skill name) are defined exactly once and propagated throughout the application.
- **SEO & Telemetry**: Full Open Graph support, dynamic `sitemap.xml`, `robots.txt`, and JSON-LD structured data out of the box.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Ready for [Vercel](https://vercel.com)

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Run Development Server**
   ```bash
   npm run dev
   ```
3. **Open Browser**
   Navigate to `http://localhost:3000`.

## Production Build

1. **Verify Types & Linting**
   ```bash
   npm run type-check
   npm run lint
   ```
2. **Build for Production**
   ```bash
   npm run build
   ```
3. **Start Production Server**
   ```bash
   npm run start
   ```

## Directory Structure
- `app/` - Next.js App Router endpoints and layouts.
- `components/` - React components categorized by domain (e.g., `layout`, `engineering`, `recruiter`).
- `content/` - The database layer; static TypeScript modules containing all text and data.
- `styles/` - Global CSS and Tailwind directives.
- `lib/` - Shared utilities like metadata generation.
