# Project Structure & Routes Documentation

This document provides a comprehensive overview of the printing services website's file structure, routes, and what each file contains.

## Table of Contents
1. [Routes Overview](#routes-overview)
2. [App Directory Structure](#app-directory-structure)
3. [Components Directory](#components-directory)
4. [Data Files](#data-files)
5. [Configuration Files](#configuration-files)

---

## Routes Overview

This Next.js application uses the App Router. All routes are defined in the `app/` directory.

### Public Routes Map

| Route | Purpose | Type |
|-------|---------|------|
| `/` | Homepage | Static |
| `/about` | About us page | Static |
| `/services` | Services listing page | Static |
| `/services/[slug]` | Individual service detail page | Dynamic |
| `/products` | Products listing page | Static |
| `/products/[slug]` | Individual product detail page | Dynamic |
| `/industries` | Industries listing page | Static |
| `/industries/[slug]` | Individual industry detail page | Dynamic |
| `/portfolio` | Portfolio listing page | Static |
| `/portfolio/[slug]` | Individual portfolio item page | Dynamic |
| `/blog` | Blog listing page | Static |
| `/blog/[slug]` | Individual blog post page | Dynamic |
| `/pricing` | Pricing information page | Static |
| `/request-quote` | Quote request form | Static |
| `/request-samples` | Sample request form | Static |
| `/contact` | Contact page | Static |
| `/faq` | Frequently asked questions | Static |
| `/how-itworks` | Process explanation page | Static |
| `/sustainability` | Sustainability information | Static |
| `/privacy` | Privacy policy | Static |
| `/terms` | Terms of service | Static |

---

## App Directory Structure

### Root Files

#### `app/layout.tsx`
**Purpose**: Root layout for the entire application
**Contains**:
- Global HTML structure
- Font configuration (Geist Sans & Geist Mono)
- Metadata (title, description)
- Layout wrapping all pages with:
  - `<Header/>` - Top navigation
  - `{children}` - Page content
  - `<WhatsAppFloat/>` - Floating WhatsApp button
  - `<Footer/>` - Site footer

#### `app/page.tsx`
**Purpose**: Homepage
**Contains**: Composition of multiple section components:
- `<Hero />` - Hero section with main CTA
- `<ServicesGrid />` - Overview of services
- `<WhyChooseUs />` - Benefits/USPs section
- `<StatsCounter />` - Statistics counter animation
- `<FeaturedPortfolio />` - Portfolio showcase
- `<IndustriesWeServe />` - Industries overview
- `<ProcessSection />` - How it works process
- `<Testimonials />` - Customer testimonials
- `<CTASection />` - Final call-to-action

#### `app/globals.css`
**Purpose**: Global styles
**Contains**: Tailwind directives, CSS variables, and global styling

---

### Static Pages

#### `app/about/page.tsx`
**Route**: `/about`
**Contains**: About us page with company information, mission, vision

#### `app/contact/page.tsx`
**Route**: `/contact`
**Contains**: Contact form and contact information

#### `app/faq/page.tsx`
**Route**: `/faq`
**Contains**: Frequently asked questions and answers

#### `app/how-itworks/page.tsx`
**Route**: `/how-itworks`
**Contains**: Step-by-step process explanation

#### `app/pricing/page.tsx`
**Route**: `/pricing`
**Contains**: Pricing information and packages

#### `app/privacy/page.tsx`
**Route**: `/privacy`
**Contains**: Privacy policy content

#### `app/terms/page.tsx`
**Route**: `/terms`
**Contains**: Terms of service content

#### `app/sustainability/page.tsx`
**Route**: `/sustainability`
**Contains**: Sustainability initiatives and eco-friendly practices

#### `app/request-quote/page.tsx`
**Route**: `/request-quote`
**Contains**: Quote request form with fields for project details

#### `app/request-samples/page.tsx`
**Route**: `/request-samples`
**Contains**: Sample request form

---

### Dynamic Route Groups

#### Services Routes

**Listing Page**: `app/services/page.tsx`
- **Route**: `/services`
- **Contains**:
  - Hero section
  - Service categories organized by:
    - Printing Services (Digital, Offset, Screen, Large Format)
    - Packaging Solutions (Custom Boxes, Labels, Bags, Eco-Friendly)
    - Design Services (Brand Identity, Logo, Packaging Design, Marketing Materials)
    - Business Solutions (Business Printing, Promotional Products, Specialty Printing)
  - Additional services section
  - Why choose us section
  - CTA section
- **Data Source**: `components/lib/services.tsx`

**Detail Page**: `app/services/[slug]/page.tsx`
- **Route**: `/services/[slug]` (e.g., `/services/digital-printing`)
- **Contains**: Detailed service information including:
  - Hero with service name and tagline
  - Features list
  - Benefits
  - Process steps
  - Applications
  - Pricing information
  - Related services
- **Dynamic Slugs**:
  - `digital-printing`
  - `offset-printing`
  - `screen-printing`
  - `large-format-printing`
  - `custom-boxes`
  - `labels-stickers`
  - `bags-pouches`
  - `eco-friendly-packaging`
  - `brand-identity`
  - `logo-design`
  - `packaging-design`
  - `marketing-materials`
  - `business-printing`
  - `promotional-products`
  - `specialty-printing`

#### Products Routes

**Listing Page**: `app/products/page.tsx`
- **Route**: `/products`
- **Contains**: Product categories:
  - Business Essentials
  - Marketing Materials
  - Large Format
  - Packaging Products
  - Specialty Items
- **Data Source**: `components/lib/products.ts`

**Detail Page**: `app/products/[slug]/page.tsx`
- **Route**: `/products/[slug]` (e.g., `/products/business-cards`)
- **Contains**: Product details including:
  - Hero image and description
  - Image gallery
  - Features
  - Specifications (sizes, paper stock, finishing options)
  - Pricing tiers
  - Related products
- **Dynamic Slugs**:
  - `business-cards`
  - `brochures`
  - `flyers`
  - `posters`
  - `banners`
  - `custom-boxes`
  - `stickers`
  - `letterheads`

#### Industries Routes

**Listing Page**: `app/industries/page.tsx`
- **Route**: `/industries`
- **Contains**: Industries served grid with:
  - Schools & Education
  - Healthcare & Medical
  - Restaurants & Food
  - Retail & E-commerce
  - Corporate & Business
  - Events & Hospitality
  - Technology & Startups
  - Fashion & Apparel
- **Data Source**: `components/lib/industries.tsx`

**Detail Page**: `app/industries/[slug]/page.tsx`
- **Route**: `/industries/[slug]` (e.g., `/industries/schools-education`)
- **Contains**: Industry-specific information:
  - Industry challenges
  - Our solutions
  - Products for this industry
  - Case studies
  - Client testimonials
  - Statistics
- **Dynamic Slugs**:
  - `schools-education`
  - `healthcare-medical`
  - `restaurants-food`
  - `retail-ecommerce`

#### Portfolio Routes

**Listing Page**: `app/portfolio/page.tsx`
- **Route**: `/portfolio`
- **Contains**: Portfolio grid showcasing completed projects

**Detail Page**: `app/portfolio/[slug]/page.tsx`
- **Route**: `/portfolio/[slug]`
- **Contains**: Individual portfolio case study
- **Data Source**: `components/lib/portfolio.ts`

#### Blog Routes

**Listing Page**: `app/blog/page.tsx`
- **Route**: `/blog`
- **Contains**:
  - Blog posts grid
  - Categories filter
  - Featured posts
- **Data Source**: `components/lib/blog.ts`

**Detail Page**: `app/blog/[slug]/page.tsx`
- **Route**: `/blog/[slug]` (e.g., `/blog/complete-guide-to-custom-packaging`)
- **Contains**: Full blog post with:
  - Featured image
  - Author information
  - Date and read time
  - Category and tags
  - Full content (HTML)
  - Related posts
- **Available Posts**:
  - `complete-guide-to-custom-packaging`
  - `business-card-design-tips`
  - `offset-vs-digital-printing`

---

## Components Directory

### Main Section Components

Located in `components/` root:

#### `components/Header.tsx`
**Purpose**: Main site navigation
**Contains**:
- Logo
- Desktop navigation menu with dropdowns for:
  - Services (with 15+ service links)
  - Products (with 8+ product links)
  - Industries (with 4+ industry links)
- Mobile hamburger menu
- CTA buttons (Request Quote, Contact)
- Uses `components/ui/navigation-menu.tsx` and `components/ui/sheet.tsx`
- Data from `components/lib/data.ts`

#### `components/Footer.tsx`
**Purpose**: Site footer
**Contains**:
- Company information
- Quick links organized by category
- Contact information
- Social media links
- Copyright notice
- Newsletter signup form

#### `components/Hero.tsx`
**Purpose**: Homepage hero section
**Contains**:
- Main headline and tagline
- CTA buttons
- Hero image or background

#### `components/ServicesGrid.tsx`
**Purpose**: Services overview on homepage
**Contains**: Grid of service cards linking to service pages

#### `components/WhyChooseUs.tsx`
**Purpose**: Benefits/USPs section
**Contains**: Key differentiators and value propositions

#### `components/StatsCounter.tsx`
**Purpose**: Statistics counter section
**Contains**: Animated counters for key metrics (projects, clients, etc.)

#### `components/FeaturedPortfolio.tsx`
**Purpose**: Portfolio showcase on homepage
**Contains**: Carousel or grid of featured portfolio items

#### `components/IndustriesWeServe.tsx`
**Purpose**: Industries overview on homepage
**Contains**: Grid of industries served

#### `components/ProcessSection.tsx`
**Purpose**: How it works section
**Contains**: Step-by-step process visualization

#### `components/Testimonials.tsx`
**Purpose**: Customer testimonials
**Contains**: Carousel of client testimonials and reviews

#### `components/CTASection.tsx`
**Purpose**: Call-to-action sections
**Contains**: Reusable CTA components used throughout the site

---

### UI Components

Located in `components/ui/`:

#### `components/ui/button.tsx`
**Purpose**: Button component
**Contains**: Styled button with variants (default, outline, ghost, etc.)
**Uses**: class-variance-authority for variant management

#### `components/ui/card.tsx`
**Purpose**: Card component
**Contains**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
**Used by**: Service cards, product cards, blog cards

#### `components/ui/carousel.tsx`
**Purpose**: Carousel component
**Contains**: Image/content carousel
**Uses**: embla-carousel-react, embla-carousel-autoplay

#### `components/ui/navigation-menu.tsx`
**Purpose**: Navigation menu component
**Contains**: Dropdown navigation menu
**Uses**: @radix-ui/react-navigation-menu
**Used by**: Header component

#### `components/ui/sheet.tsx`
**Purpose**: Sheet (drawer) component
**Contains**: Mobile menu drawer
**Uses**: @radix-ui/react-dialog
**Used by**: Mobile navigation

#### `components/ui/avatar.tsx`
**Purpose**: Avatar component
**Contains**: User avatar display
**Uses**: @radix-ui/react-avatar

#### `components/ui/input.tsx`
**Purpose**: Input field component
**Contains**: Styled form inputs
**Used by**: Contact forms, quote request forms

#### `components/ui/WhatsappFloat.tsx`
**Purpose**: Floating WhatsApp button
**Contains**: Fixed position WhatsApp contact button
**Used in**: Root layout

---

## Data Files

Located in `components/lib/`:

### `components/lib/utils.ts`
**Purpose**: Utility functions
**Contains**:
- `cn()` function for merging Tailwind classes with clsx and tailwind-merge

### `components/lib/data.ts`
**Purpose**: Navigation data
**Contains**: Static data arrays for:
- `services` - Array of service links (17 items)
- `products` - Array of product links (8 items)
- `industries` - Array of industry links (4 items)

**Usage**: Imported by Header for navigation menus

### `components/lib/services.tsx`
**Purpose**: Services data and types
**Contains**:
- `Service` interface with TypeScript types
- `services` array with 15 complete service objects, each containing:
  - id, slug, name, category
  - tagline, description, longDescription
  - heroImage, features, benefits
  - process steps, applications
  - pricing, relatedServices
- Helper functions:
  - `getAllServices()`
  - `getServiceBySlug(slug)`
  - `getServiceById(id)`
  - `getServicesByCategory(category)`
- `serviceCategories` array grouping services by category
- `additionalServices` array for supplementary services

**Service Categories**:
- Printing Services (4 services)
- Packaging Solutions (4 services)
- Design Services (4 services)
- Business Solutions (3 services)

### `components/lib/products.ts`
**Purpose**: Products data and types
**Contains**:
- `Product` interface
- `products` array with 8 detailed product objects including:
  - Specifications (sizes, materials, finishes)
  - Pricing tiers by quantity
  - Image galleries
  - Related products
- `productCategories` array organizing products into 5 categories:
  - Business Essentials
  - Marketing Materials
  - Large Format
  - Packaging Products
  - Specialty Items
- Helper functions:
  - `getAllProducts()`
  - `getProductBySlug(slug)`
  - `getProductById(id)`
  - `getProductsByCategory(category)`

### `components/lib/industries.tsx`
**Purpose**: Industries data and types
**Contains**:
- `Industry` interface
- `industries` array with 4 detailed industry objects including:
  - Challenges and solutions
  - Industry-specific products
  - Case studies
  - Client testimonials
  - Statistics
- `industriesList` array with 8 industries for listing page
- Helper functions:
  - `getAllIndustries()`
  - `getIndustryBySlug(slug)`
  - `getIndustryById(id)`

**Icons**: Uses lucide-react icons for industry categories

### `components/lib/blog.ts`
**Purpose**: Blog posts data and types
**Contains**:
- `BlogPost` interface
- `blogPosts` array with 3 complete blog articles including:
  - Full HTML content
  - Author information with images
  - Categories and tags
  - Related posts
  - Read time estimation
- Helper functions:
  - `getAllBlogPosts()`
  - `getBlogPostBySlug(slug)`
  - `getBlogPostById(id)`
  - `getBlogPostsByCategory(category)`
- `blogCategories` array

**Blog Posts**:
1. "The Complete Guide to Custom Packaging for E-commerce"
2. "10 Business Card Design Tips That Get You Noticed"
3. "Offset vs Digital Printing: Which is Right for You?"

### `components/lib/portfolio.ts`
**Purpose**: Portfolio projects data
**Contains**: Portfolio case studies and project showcase data

---

## Configuration Files

### `package.json`
**Purpose**: Project dependencies and scripts
**Contains**:
- Scripts: `dev`, `build`, `start`, `lint`
- Dependencies: Next.js 16, React 19, Tailwind CSS 4, Radix UI, Lucide icons
- Package manager: pnpm 10.10.0

### `tsconfig.json`
**Purpose**: TypeScript configuration
**Contains**:
- Compiler options
- Path alias: `@/*` maps to root
- JSX mode: react-jsx
- Strict mode enabled

### `next.config.ts`
**Purpose**: Next.js configuration
**Contains**:
- Remote image patterns (images.unsplash.com)
- TypeScript: ignoreBuildErrors = true
- ESLint: ignoreDuringBuilds = true

### `eslint.config.mjs`
**Purpose**: ESLint configuration
**Contains**:
- Next.js recommended rules
- Global ignores (.next, out, build)

### `components.json`
**Purpose**: shadcn/ui configuration
**Contains**:
- Style: new-york
- RSC: true
- Path aliases for components, utils, ui, lib, hooks
- CSS variables for theming
- Icon library: lucide

### `postcss.config.mjs`
**Purpose**: PostCSS configuration for Tailwind CSS 4

### `tailwind.config.js` (implied)
**Purpose**: Tailwind CSS configuration

---

## File Count Summary

- **Total Routes**: 22 public routes
- **Dynamic Routes**: 5 route patterns with multiple slugs each
- **Static Pages**: 11 pages
- **Section Components**: 11 reusable section components
- **UI Components**: 8 shadcn/ui components
- **Data Files**: 6 data/utility files
- **Services**: 15 individual services
- **Products**: 8 detailed products
- **Industries**: 4 detailed + 8 listed industries
- **Blog Posts**: 3 complete articles
- **Configuration Files**: 6 config files

---

## Data Flow

```
User Request
    ↓
Next.js App Router
    ↓
app/[route]/page.tsx
    ↓
Imports Section Components (from components/)
    ↓
Components fetch data from lib files (components/lib/*)
    ↓
Components use UI primitives (components/ui/*)
    ↓
Rendered Page
```

---

## Quick Reference: Where to Find What

| What | Where | File(s) |
|------|-------|---------|
| Add new service | `components/lib/services.tsx` | Add to `services` array |
| Add new product | `components/lib/products.ts` | Add to `products` array |
| Add new blog post | `components/lib/blog.ts` | Add to `blogPosts` array |
| Add new industry | `components/lib/industries.tsx` | Add to `industries` array |
| Modify navigation | `components/Header.tsx` & `components/lib/data.ts` | Update nav arrays |
| Change homepage layout | `app/page.tsx` | Reorder section components |
| Add new page | Create `app/[page-name]/page.tsx` | New directory in app |
| Modify global styles | `app/globals.css` | Edit CSS variables |
| Change site metadata | `app/layout.tsx` | Edit metadata object |
| Add UI component | `components/ui/[component].tsx` | Use shadcn CLI or manual |

---

## Notes for Developers

1. **Dynamic Routes**: All dynamic routes use the `[slug]` pattern and fetch data from corresponding lib files
2. **Type Safety**: All data structures have TypeScript interfaces defined
3. **Images**: All images are from Unsplash and configured in `next.config.ts`
4. **Styling**: Uses Tailwind CSS 4 with the `cn()` utility for class merging
5. **Icons**: Uses Lucide React icon library throughout
6. **Package Manager**: Must use `pnpm` (enforced by packageManager field)
7. **Build**: TypeScript and ESLint errors are ignored during builds
