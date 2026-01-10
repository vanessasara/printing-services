# Route Design Patterns Documentation

This document explains the design patterns, structure, and implementation of each route file in the printing services application.

---

## Table of Contents

1. [Common Design Patterns](#common-design-patterns)
2. [Static Page Designs](#static-page-designs)
3. [Dynamic Page Designs](#dynamic-page-designs)
4. [Listing Page Designs](#listing-page-designs)

---

## Common Design Patterns

### Pattern 1: Section-Based Layout
All pages follow a consistent section-based layout:
```
- Hero Section (banner/introduction)
- Main Content Sections (alternating backgrounds)
- Related Content/Cross-selling
- CTA Section (call-to-action)
```

### Pattern 2: Metadata Export
Every page exports metadata for SEO:
```typescript
export const metadata = {
  title: "Page Title",
  description: "Page description",
  keywords: "relevant, keywords",
};
```

### Pattern 3: Responsive Design
- Mobile-first approach using Tailwind's responsive prefixes
- Breakpoints: `sm:`, `md:`, `lg:`
- Container pattern: `container mx-auto px-4`
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-3`

### Pattern 4: Gradient Backgrounds
Alternating sections use:
- Primary gradient: `bg-gradient-to-br from-primary/10 to-background`
- Muted background: `bg-muted/30`
- CTA gradient: `bg-gradient-to-br from-primary to-primary/80`

### Pattern 5: Interactive Elements
- Hover states on cards: `hover:shadow-lg transition-all`
- Group hover effects: `group-hover:scale-105`
- Icon animations: `group-hover:gap-2 transition-all`

---

## Static Page Designs

### 1. About Page (`app/about/page.tsx`)

**Design Structure:**
```
1. Hero Section - Company tagline and key stats
2. Our Story - Text + Image Grid
3. Core Values - Icon Grid (8 value cards)
4. What We Do - Service Categories (3 columns)
5. Why Choose Us - Stats Grid (4 stat cards)
6. CTA Section - Final conversion
```

**Key Design Features:**

**Hero Section:**
- Centered layout with gradient background
- Large heading (4xl → 6xl responsive)
- Inline stat badges with CheckCircle icons
- Pattern: `text-4xl md:text-5xl lg:text-6xl`

**Story Section:**
- 2-column grid: `grid md:grid-cols-2 gap-12`
- Left: Text content with multiple paragraphs
- Right: Large image (400px → 500px height)
- Uses Next.js Image component with `fill` and `object-cover`

**Values Grid:**
- Responsive: `grid md:grid-cols-2 lg:grid-cols-4 gap-6`
- Each card contains:
  - Icon in colored background circle
  - Title and description
  - Hover border effect: `hover:border-primary/50`
- Uses array mapping for DRY principle

**What We Do:**
- 3-column grid with image cards
- Each service has:
  - Hero image (h-48)
  - Title and feature list with checkmarks
  - Consistent card height

**Stats Section:**
- 2-column grid of achievement cards
- Large numbers (4xl → 5xl) in primary color
- Supporting text below

**Components Used:**
- `Card`, `CardContent` from shadcn/ui
- Lucide icons: `CheckCircle2`, `Award`, `Users`, `Target`, `Heart`, `Zap`, `Shield`, `Leaf`
- `Button`, `Link` for CTAs

---

### 2. Contact Page (`app/contact/page.tsx`)

**Design Structure:**
```
1. Hero Section - Simple centered heading
2. Contact Form + Info Grid (2 columns)
3. Google Maps Embed
4. Quick Contact CTA
```

**Special Features:**

**Client Component:**
- Uses `"use client"` directive (only contact page needs it)
- Implements React state for form management
- Form validation and submission handling

**Form State Management:**
```typescript
const [formData, setFormData] = useState({
  name: "", email: "", phone: "",
  company: "", service: "", message: ""
});
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Layout Pattern:**
- 3-column grid: `grid lg:grid-cols-3 gap-8`
- Left sidebar (1 column): 4 info cards stacked
- Right main area (2 columns): Large contact form

**Info Cards:**
Each card has:
- Icon + title in header
- Contact details in content
- Clickable links (tel:, mailto:, maps)
- Icons: `MapPin`, `Phone`, `Mail`, `Clock`

**Form Design:**
- Two-column input grid for compact layout
- Textarea for message (6 rows, resize-none)
- Custom select dropdown (styled to match inputs)
- Disabled state handling on submit button
- Loading state: "Sending..." text

**Map Integration:**
- Embedded Google Maps iframe
- Full-width card wrapper
- 400px height
- Lazy loading for performance

**Form Fields:**
```typescript
- Name (required)
- Email (required, type="email")
- Phone (required, type="tel")
- Company (optional)
- Service (required, dropdown)
- Message (required, textarea)
```

**Components Used:**
- `Input`, `Button`, `Card` from shadcn/ui
- All Lucide icons for visual elements
- Native `select` and `textarea` elements (custom styled)

---

### 3. Products Listing Page (`app/products/page.tsx`)

**Design Structure:**
```
1. Hero Section - Product count and description
2. Filter Bar - Category filter (sticky)
3. Product Category Sections (5 categories)
4. CTA Section - Custom solutions
```

**Key Features:**

**Dynamic Product Count:**
```typescript
const totalProducts = productCategories.reduce(
  (acc, cat) => acc + cat.products.length, 0
);
```
- Calculates total dynamically
- Displays in hero: "Browse our extensive range of {totalProducts}+ customizable..."

**Filter Section:**
- Sticky bar: `py-8 bg-muted/30 border-b`
- Shows product count
- Filter button (placeholder for future functionality)
- Pattern: Future enhancement hook

**Category Loop:**
```typescript
{productCategories.map((category, idx) => (
  <section className={idx % 2 === 1 ? "bg-muted/30" : ""}>
    // Content
  </section>
))}
```
- Alternating backgrounds based on index
- Each category is a separate section

**Product Card Design:**
- 4-column responsive grid: `grid sm:grid-cols-2 lg:grid-cols-4 gap-6`
- Card structure:
  - Image (h-56) with hover scale
  - Price badge (absolute positioned)
  - Title and description
  - "View Details" link with arrow
- Hover effects:
  - Image scale: `group-hover:scale-110`
  - Text color: `group-hover:text-primary`
  - Arrow gap: `group-hover:gap-2`

**Price Badge:**
- Positioned: `absolute top-3 right-3`
- Styling: `bg-background px-3 py-1 rounded-full text-xs`
- Shows: "From {product.startingPrice}"

**Data Source:**
- Imports from `@/components/lib/products`
- Uses `productCategories` array
- Each category contains name and products array

**Components Used:**
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`
- `Button`, `Link`, `Image`
- Lucide: `ArrowRight`, `Filter`

---

## Dynamic Page Designs

### 4. Product Detail Page (`app/products/[slug]/page.tsx`)

**Design Structure:**
```
1. Hero - Image Gallery + Product Info
2. Specifications - Options Grid
3. Pricing Table
4. Related Products
5. CTA Section
```

**Dynamic Route Handling:**

**Params Interface:**
```typescript
interface ProductPageProps {
  params: { slug: string };
}
```

**Metadata Generation:**
```typescript
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  // Returns dynamic metadata
}
```

**404 Handling:**
```typescript
if (!product) {
  notFound(); // Next.js 404 page
}
```

**Static Generation:**
```typescript
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
```

**Hero Section Design:**

**Two-Column Layout:**
- Left: Image gallery
  - Main image: 400px → 500px height
  - Thumbnail grid: 3 columns, h-32 each
  - Cursor pointer on thumbnails (future: image switcher)

- Right: Product details
  - Category breadcrumb
  - Product name (4xl → 5xl heading)
  - Tagline (xl text)
  - 5-star rating display (hardcoded)
  - Full description
  - Pricing info box
  - Dual CTAs (Quote + Samples)
  - Features list with checkmarks

**Info Box Design:**
```tsx
<div className="bg-muted/30 rounded-lg p-6 mb-8">
  - Package icon + starting price
  - Disclaimer text
  - Turnaround time
</div>
```

**Specifications Section:**
- 2-column grid of specification cards
- Each spec has:
  - Icon (Ruler, Package, Palette)
  - Title (Size, Material, Finish, etc.)
  - Options list with checkmarks
- Icons are conditional based on index

**Pricing Table:**
- Responsive table in Card
- Columns: Quantity | Price Range | Per Unit
- Per unit calculated: `Math.round(price / quantity)`
- Disclaimer below table

**Related Products:**
- Simple 3-column grid
- Minimal cards (just title + link)
- Click navigates to related product page

**Components Used:**
- All shadcn/ui Card components
- `Star` icon for ratings
- `CheckCircle2`, `Package`, `Ruler`, `Palette` icons
- `Button`, `Link`, `Image`

---

### 5. Blog Post Page (`app/blog/[slug]/page.tsx`)

**Design Structure:**
```
1. Header - Post metadata and author
2. Featured Image - Large hero image
3. Article Content - Prose-styled HTML
4. Tags Section
5. Author Bio Card
6. Related Posts
7. CTA Section
```

**Content Architecture:**

**Header Section:**
- Back button link to /blog
- Category badge
- Post title (4xl → 5xl)
- Excerpt (xl text)
- Author card:
  - Circular profile image (w-12 h-12)
  - Name and role
  - Separator line
  - Date and read time with icons

**Share Button:**
- Outline variant with Share2 icon
- Placeholder for future social sharing

**Featured Image:**
- Full-width container (max-w-5xl)
- Large responsive height: 400px → 500px
- Rounded corners

**Article Content:**
- **Prose Styling System:**
```tsx
className="prose prose-lg max-w-none
  prose-headings:font-bold prose-headings:text-foreground
  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
  prose-p:text-muted-foreground prose-p:leading-relaxed
  prose-ul:text-muted-foreground
  prose-li:mb-2
  prose-strong:text-foreground"
```
- Uses Tailwind Typography plugin
- Custom styling for all HTML elements
- Renders HTML directly: `dangerouslySetInnerHTML`
- Content from: `post.content` (HTML string)

**Tags Section:**
- Muted background section
- Tag icon header
- Tags as pills: `px-3 py-1 bg-background border rounded-full`
- Hover effect: `hover:border-primary`
- Clickable (future: filter by tag)

**Author Bio:**
- Full-width card
- Horizontal layout: image + bio
- Larger profile image (w-20 h-20)
- Generic bio text (could be dynamic)
- Link to author's other articles

**Related Posts:**
- 3-column grid
- Minimal cards (title + link)
- Same pattern as product related items

**Data Flow:**
```
getBlogPostBySlug(slug)
  → Returns BlogPost object
  → Contains: title, content, author, tags, relatedPosts
```

**Special Features:**
- Full HTML content rendering
- Rich typography styling
- Author information display
- Social sharing (placeholder)

---

### 6. Service Detail Page (`app/services/[slug]/page.tsx`)

**Design Structure:**
```
1. Hero - Full-width image background with overlay
2. Overview - Description + Info Cards
3. Benefits - 3-column grid
4. Process - Step-by-step numbered list
5. Applications - Tag cloud
6. Related Services
7. CTA Section
```

**Hero Section Design:**

**Full-Width Image Background:**
```tsx
<div className="absolute inset-0 z-0">
  <Image fill className="brightness-50" />
</div>
<div className="relative z-10 text-white">
  // Content
</div>
```
- Absolute positioned background
- Darkened with brightness-50
- White text overlay
- Content: category, title, tagline, CTAs

**Dual CTA Buttons:**
- Primary: "Get Free Quote"
- Outline (white): "Request Samples"
- Both large size
- Arrow icon on primary

**Overview Section:**

**Info Cards Row:**
Three cards showing:
1. Turnaround Time (Clock icon)
2. Rush Orders availability (Zap icon)
3. Quality Guarantee (Award icon)

Pattern:
```tsx
<Card>
  <CardContent className="pt-6 text-center">
    <div className="icon-circle">{icon}</div>
    <div className="font-semibold">{title}</div>
    <div className="text-sm text-muted-foreground">{value}</div>
  </CardContent>
</Card>
```

**Features Grid:**
- 2-column grid
- Checkmark bullets
- Muted text
- Data from: `service.features[]`

**Benefits Section:**
- Muted background
- 3-column grid
- Each benefit card:
  - Title (xl font)
  - Description paragraph
- Data from: `service.benefits[]`

**Process Section:**

**Step-by-Step Design:**
```tsx
{service.process.map((step) => (
  <div className="flex gap-6">
    <div className="number-circle">{step.step}</div>
    <div className="content">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </div>
))}
```
- Vertical layout
- Numbered circles (primary bg)
- Title and description for each step
- Clean, scannable format

**Applications Section:**
- Tag cloud layout
- Pills with border: `rounded-full border-2 border-primary/20`
- Flex wrap for responsive stacking
- Shows use cases: "Perfect For..."

**Related Services:**
- 3-column grid
- Simple cards with title + link
- Navigates to other service pages
- Cross-selling opportunity

**Data Structure:**
Service object contains:
- `id`, `slug`, `name`, `category`
- `tagline`, `description`, `longDescription`
- `heroImage`, `features[]`, `benefits[]`
- `process[]`, `applications[]`
- `pricing{turnaround, rushAvailable}`
- `relatedServices[]`

---

## Listing Page Designs

### 7. Blog Listing Page (`app/blog/page.tsx`)

**Design Structure:**
```
1. Hero - Search bar
2. Featured Post - Large horizontal card
3. Category Filter - Sticky bar
4. Blog Grid - 3-column grid
5. Newsletter CTA
```

**Search Implementation:**
- Decorative search bar (no functionality yet)
- Icon positioned with absolute: `left-3 top-1/2 -translate-y-1/2`
- Input padding: `pl-10` to accommodate icon
- Large height: `h-12`

**Featured Post:**

**Large Card Design:**
```tsx
<Card>
  <div className="grid lg:grid-cols-2">
    <div className="image-side h-80" />
    <CardContent className="text-side p-12">
      // Content
    </CardContent>
  </div>
</Card>
```
- Split layout: image | content
- Full metadata display:
  - Category badge
  - Large title (3xl → 4xl)
  - Excerpt
  - Author, date, read time with icons
  - "Read Full Article" link

**Category Filter Bar:**

**Sticky Navigation:**
```tsx
className="py-8 bg-muted/30 border-y sticky top-16 z-10
  backdrop-blur supports-[backdrop-filter]:bg-background/60"
```
- Sticks to top when scrolling
- Backdrop blur effect
- Button group for categories
- Active state: "All" is default variant
- Others: outline variant

**Blog Grid:**
- 3-column responsive: `grid md:grid-cols-2 lg:grid-cols-3`
- Each card:
  - Image (h-56) with category badge
  - Title (line-clamp-2)
  - Excerpt (line-clamp-2)
  - Metadata row (author • date • time)
  - "Read More" link

**Category Badge on Image:**
```tsx
<div className="absolute top-4 left-4">
  <span className="badge">{category}</span>
</div>
```

**Load More Pattern:**
- Button centered below grid
- Placeholder for pagination
- Future: infinite scroll or page navigation

**Newsletter Section:**
- Centered layout (max-w-2xl)
- Email input + submit button
- Flexbox form: `flex gap-4`
- Input takes remaining space: `flex-1`

**Data:**
- Hardcoded in file (should be from lib/blog.ts)
- featuredPost object
- blogPosts array
- categories array

---

### 8. Services Listing Page (`app/services/page.tsx`)

**Design Structure:**
```
1. Hero - Introduction
2. Service Categories (3 sections)
   - Printing Services
   - Packaging Solutions
   - Design Services
3. Additional Services - 3 small cards
4. Why Choose Us - Benefits grid
5. CTA Section
```

**Category Loop Pattern:**

**Organized by Category:**
```typescript
{serviceCategories.map((category, idx) => (
  <section className={alternatingBg}>
    <div className="category-header">
      <category.icon />
      <h2>{category.category}</h2>
      <p>{category.description}</p>
    </div>
    <div className="services-grid">
      {category.services.map(service => Card)}
    </div>
  </section>
))}
```

**Category Header:**
- Icon in colored circle
- Title and description
- Icons: `Printer`, `Package`, `Palette`
- Data from: `serviceCategories[]`

**Service Grid:**
- 4-column responsive: `grid md:grid-cols-2 lg:grid-cols-4`
- Each service card:
  - Image (h-48)
  - Title and description
  - "Learn More" link
  - Hover: shadow + scale image

**Additional Services:**
- Smaller 3-column grid (max-w-5xl)
- Icon-based cards
- Feature lists with checkmarks
- Pattern: Supplementary offerings

**Why Choose Section:**
- 2-column grid
- 6 benefit cards
- Icon circles
- Title and description
- Hardcoded data (could be from CMS)

**Data Source:**
```typescript
import {
  getAllServices,
  getServicesByCategory,
  serviceCategories,
  additionalServices
} from '@/components/lib/services'
```

**Navigation Flow:**
- Listing page → Click service → Detail page
- Category organization helps users browse
- Additional services for cross-selling

---

## Common Technical Patterns

### Image Handling
All pages use Next.js Image component:
```tsx
<Image
  src={url}
  alt={description}
  fill  // or width={} height={}
  className="object-cover"
/>
```
- Automatic optimization
- Lazy loading
- Responsive images
- Remote patterns configured in next.config.ts

### Link Patterns
Using Next.js Link for navigation:
```tsx
<Link href="/path">
  <Card className="hover:shadow-lg">
    // Content
  </Card>
</Link>
```
- Client-side navigation
- Prefetching
- Active state (could add)

### Button Variants
```tsx
<Button asChild size="lg" variant="default|outline|secondary">
  <Link href="/path">Text</Link>
</Button>
```
- asChild pattern for Link wrapping
- Size variants: sm | default | lg
- Style variants: default | outline | secondary | ghost | link

### Card Composition
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    // Main content
  </CardContent>
</Card>
```
- Consistent structure across site
- Optional header and footer
- Flexible content area

### Responsive Typography
```tsx
className="text-4xl md:text-5xl lg:text-6xl"
```
- Mobile first: base size smallest
- Breakpoints scale up
- Headings use 3-step scaling

### Spacing System
```tsx
- Sections: py-16 md:py-24
- Containers: container mx-auto px-4
- Grids: gap-6 or gap-8
- Cards: p-6 or pt-6 (when no header)
```

### Color System
```tsx
- Primary: text-primary, bg-primary
- Muted: text-muted-foreground, bg-muted
- Backgrounds: bg-background
- Borders: border, border-primary
```

---

## Performance Optimizations

### Static Generation
Dynamic routes use `generateStaticParams()`:
```typescript
export async function generateStaticParams() {
  const items = getAllItems();
  return items.map(item => ({ slug: item.slug }));
}
```
- Pre-renders all pages at build time
- Fast page loads
- Good for SEO

### Image Optimization
- Next.js automatic optimization
- Lazy loading by default
- Blur placeholder (could add)
- Remote pattern whitelist

### Code Splitting
- Each route is separate chunk
- Components imported dynamically
- Automatic by Next.js

---

## Design System Summary

**Typography Scale:**
- Headings: 2xl, 3xl, 4xl, 5xl, 6xl
- Body: base, lg, xl
- Small: sm, xs

**Spacing Scale:**
- Sections: 16 (4rem) on mobile, 20-24 (5-6rem) on desktop
- Elements: 4, 6, 8, 12 (1, 1.5, 2, 3 rem)

**Color Roles:**
- Primary: CTAs, links, accents
- Muted: Less important text, backgrounds
- Foreground: Main text
- Background: Page background

**Component Library:**
- shadcn/ui components
- Radix UI primitives
- Lucide icons
- Tailwind CSS utilities

This design system ensures consistency across all routes while allowing flexibility for unique page requirements.
