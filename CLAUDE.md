# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 marketing website for a printing services company built with React 19, TypeScript, and Tailwind CSS 4. The site showcases various printing services, products, and industry solutions with a focus on custom packaging, business cards, and commercial printing.

## Development Commands

```bash
# Start development server (default port 3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Tech Stack

- **Framework**: Next.js 16.0.10 with App Router
- **React**: 19.2.1
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4 with PostCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Package Manager**: pnpm 10.10.0
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## Project Structure

### App Router Architecture

The project uses Next.js App Router with the following structure:

```
app/
├── layout.tsx           # Root layout with Header, Footer, WhatsAppFloat
├── page.tsx            # Home page with modular sections
├── about/              # Static about page
├── blog/               # Blog listing + dynamic [slug] routes
├── contact/            # Contact form page
├── faq/                # FAQ page
├── how-itworks/        # Process explanation page
├── industries/         # Industry listing + dynamic [slug] routes
├── portfolio/          # Portfolio listing + dynamic [slug] routes
├── pricing/            # Pricing information page
├── privacy/            # Privacy policy page
├── products/           # Products listing + dynamic [slug] routes
├── request-quote/      # Quote request form
├── request-samples/    # Sample request form
├── services/           # Services listing + dynamic [slug] routes
├── sustainability/     # Sustainability information page
└── terms/              # Terms of service page
```

### Components Organization

```
components/
├── Header.tsx              # Main navigation with desktop/mobile menus
├── Footer.tsx              # Site footer with links and info
├── Hero.tsx                # Home hero section
├── ServicesGrid.tsx        # Services showcase grid
├── WhyChooseUs.tsx         # Benefits section
├── StatsCounter.tsx        # Statistics counter section
├── FeaturedPortfolio.tsx   # Portfolio showcase
├── IndustriesWeServe.tsx   # Industries overview
├── ProcessSection.tsx      # How it works process
├── Testimonials.tsx        # Customer testimonials
├── CTASection.tsx          # Call-to-action sections
├── lib/
│   ├── utils.ts           # cn() utility for class merging
│   ├── data.ts            # Navigation data (services, products, industries)
│   └── blog.ts            # Blog posts data and helper functions
└── ui/                    # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── navigation-menu.tsx
    ├── sheet.tsx
    ├── avatar.tsx
    ├── input.tsx
    └── WhatsappFloat.tsx  # Floating WhatsApp button
```

## Key Architectural Patterns

### Page Composition

Pages are composed of modular sections imported from `components/`. The home page (`app/page.tsx`) demonstrates this pattern:

```tsx
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsCounter />
      {/* ... more sections */}
    </>
  );
}
```

### Layout System

The root layout (`app/layout.tsx`) wraps all pages with:
1. Header (navigation)
2. Page content (children)
3. WhatsAppFloat (floating contact button)
4. Footer

### Data Management

Static content is centralized in `components/lib/`:
- `data.ts`: Navigation links for services, products, industries
- `blog.ts`: Blog post content with TypeScript interfaces and helper functions

### Dynamic Routes

Dynamic segments use the `[slug]` pattern for:
- Blog posts: `/blog/[slug]`
- Services: `/services/[slug]`
- Products: `/products/[slug]`
- Industries: `/industries/[slug]`
- Portfolio: `/portfolio/[slug]`

### Styling Convention

This project uses the `cn()` utility from `components/lib/utils.ts` to merge Tailwind classes with class-variance-authority. Always use this pattern for conditional classes:

```tsx
<div className={cn("base-classes", condition && "conditional-classes")} />
```

### shadcn/ui Integration

UI components follow shadcn/ui conventions:
- Config in `components.json`
- Components in `components/ui/`
- New York style variant
- RSC-ready components
- Uses `@/` path aliases

## Configuration Notes

### TypeScript

- Path alias `@/*` maps to project root
- Build errors are ignored (`ignoreBuildErrors: true`)
- JSX mode: `react-jsx` (imports React automatically)

### ESLint

- Uses Next.js recommended config
- Build errors are ignored (`ignoreDuringBuilds: true`)
- Ignores `.next/`, `out/`, `build/`, `next-env.d.ts`

### Next.js

- Remote images allowed from `images.unsplash.com`
- Both TypeScript and ESLint errors are ignored during builds (development mode)

## Adding New Features

### Adding a New Page

1. Create folder in `app/` with `page.tsx`
2. Import and compose section components from `components/`
3. Add route to navigation in `components/Header.tsx` if needed

### Adding a New Component

1. Create component in `components/` for sections
2. Create in `components/ui/` for reusable UI elements
3. Use TypeScript interfaces for props
4. Use `cn()` for className composition

### Adding shadcn/ui Components

Use the shadcn CLI or manually add to `components/ui/`. Components are configured for:
- New York style
- CSS variables for theming
- Lucide icons
- Path aliases (`@/components`, `@/lib`)

### Managing Content

Blog posts, services, products, and industry data are in `components/lib/`. To add content:
1. Add to appropriate array in `data.ts` or `blog.ts`
2. Ensure slug matches dynamic route folder name
3. Update TypeScript interfaces if adding new fields

## Important Considerations

- Images use Next.js `<Image>` component with Unsplash remote patterns
- Global styles in `app/globals.css` with Tailwind directives
- Geist fonts are loaded via `next/font/google` in root layout
- All UI uses Tailwind CSS 4 (latest version with PostCSS)
