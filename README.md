# Samarth Portfolio

> A production-quality personal portfolio website built with Next.js 15, React 19, and TypeScript.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

---

## Overview

This portfolio is built as a production-grade software project — not a template. Every architectural decision prioritises maintainability, accessibility, performance, and long-term scalability.

It is designed to score **≥ 95** on all Lighthouse categories (Performance, Accessibility, Best Practices, SEO).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org) (strict mode) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) *(Sprint 2)* |
| Icons | [Lucide React](https://lucide.dev) |
| Linting | [ESLint](https://eslint.org) + `eslint-config-next` |
| Formatting | [Prettier](https://prettier.io) + `prettier-plugin-tailwindcss` |
| Deployment | [Vercel](https://vercel.com) |

---

## Features (Planned)

- **Hero section** — animated introduction with CTA buttons
- **About section** — bio, values, and a timeline
- **Projects section** — filterable card grid with live/GitHub links
- **Skills section** — categorised tech stack with proficiency indicators
- **Contact section** — direct email link and social profiles
- **Dark mode** — system-preference-aware with manual toggle
- **Responsive** — mobile-first layout across all breakpoints
- **Accessible** — WCAG 2.1 AA compliant
- **Performant** — static generation, image optimisation, font subsetting

---

## Getting Started

### Prerequisites

- Node.js **≥ 20**
- npm **≥ 10**

### Installation

```bash
# Clone the repository
git clone https://github.com/Samarth11x/portfolio-v1.git
cd portfolio-v1

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run type-check` | Run TypeScript type checking |

---

## Project Structure

```
.
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx          # Root layout (fonts, global metadata)
│   └── page.tsx            # Homepage
│
├── components/
│   ├── ui/                 # Primitive components (Button, Badge, Card…)
│   ├── layout/             # Structural components (Header, Footer, Section…)
│   └── sections/           # Page sections (Hero, About, Projects…)
│
├── data/                   # Static content — single source of truth
│   ├── site.ts             # Personal info, nav links, social links
│   └── projects.ts         # Portfolio project entries
│
├── constants/              # App-level constants (no magic values)
│   ├── site.ts             # Site name, URL, animation timings
│   └── routes.ts           # Type-safe route definitions
│
├── hooks/                  # Custom React hooks
│   ├── useMediaQuery.ts    # SSR-safe media query listener
│   └── useScrollPosition.ts# rAF-throttled scroll tracker
│
├── lib/                    # Shared library code
│   └── metadata.ts         # Next.js Metadata factory
│
├── types/                  # TypeScript interfaces and types
│   ├── index.ts            # Barrel export
│   ├── site.ts             # SiteConfig, NavItem
│   ├── project.ts          # Project, ProjectStatus, ProjectTag
│   ├── tech.ts             # TechStack, TechCategory
│   └── social.ts           # SocialLink, SocialPlatform
│
├── utils/                  # Pure utility functions
│   ├── cn.ts               # clsx + tailwind-merge class merger
│   ├── date.ts             # Intl-based date formatters
│   └── slugify.ts          # URL slug generator
│
├── styles/
│   └── globals.css         # Design tokens, Tailwind base, global resets
│
├── public/
│   ├── images/             # Static images (profile photo, logos…)
│   ├── screenshots/        # Project screenshots
│   └── resume/             # Resume PDF
│
├── .editorconfig           # Editor consistency rules
├── .eslintrc / eslint.config.mjs
├── .gitignore
├── .prettierrc             # Prettier formatting config
├── .prettierignore
├── next.config.ts          # Next.js configuration
├── package.json
├── postcss.config.mjs
└── tsconfig.json           # TypeScript strict config
```

---

## Roadmap

| Sprint | Goal |
|---|---|
| **Sprint 0** ✅ | Project foundation — architecture, config, types |
| **Sprint 1** | Core UI — hero, about, projects, skills, contact |
| **Sprint 2** | Animations — Framer Motion entrance effects |
| **Sprint 3** | Dark mode — system toggle with persistence |
| **Sprint 4** | Performance — image optimisation, bundle analysis |
| **Sprint 5** | Accessibility audit — WCAG 2.1 AA compliance |

---

## Deployment

This project is deployed on **Vercel** with automatic preview deployments on every pull request.

```bash
# Production deployment is triggered automatically on push to main
git push origin main
```

Environment variables required in the Vercel dashboard:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://samarth.dev`) |

---

## License

MIT © Samarth
