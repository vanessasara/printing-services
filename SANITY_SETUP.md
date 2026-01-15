# Sanity CMS Setup Guide

## Phase 1 & 2: Complete ✅

All Sanity CMS foundation and schemas have been successfully configured.

## What's Been Completed

### Phase 1: Foundation & Sanity Setup
- ✅ All Sanity dependencies installed
- ✅ Directory structure created (`/sanity`, `/sanity/schemas`, `/lib`)
- ✅ Environment variables configured in `.env.local`
- ✅ Sanity client configuration (`lib/sanity.client.ts`)
- ✅ Image URL builder utility (`lib/sanity.image.ts`)
- ✅ Sanity Studio configuration (`sanity.config.ts`)

### Phase 2: Schema Development
- ✅ **Product Schema** (`sanity/schemas/product.ts`)
  - Basic Information: name, slug, category
  - Images: cardImage, bannerImage (with hotspot)
  - Descriptions: shortDescription, bannerDescription, overview (rich text)
  - Pricing: startingPrice, pricingTiers array
  - Product Details: features, specifications (sizes, materials, finishes), gallery
  - Display order field
  - Related products references

- ✅ **Service Schema** (`sanity/schemas/service.ts`)
  - Basic Information: name, slug, category, tagline
  - Visual Content: cardImage, heroImage
  - Content Sections: shortDescription, bannerDescription, overview
  - Structured Information: features (with title & description), benefits, process steps, applications
  - Related services references

- ✅ **Portfolio Schema** (`sanity/schemas/portfolio.ts`)
  - Project Information: title, slug, clientName, category, completionDate, featured flag
  - Visual Assets: featuredImage, bannerImage, gallery (with captions)
  - Content Sections: shortDescription, bannerDescription, overview, challenge, solution, results
  - References: servicesUsed, productsUsed
  - Client testimonial object (quote, author, position)

- ✅ All schemas registered in `sanity/schemas/index.ts`

## Starting Sanity Studio

To access Sanity Studio and start populating data:

```bash
# Start Sanity Studio (runs on port 3333 by default)
pnpm sanity

# Or if you want to run both Next.js and Sanity Studio simultaneously:
# Terminal 1:
pnpm dev

# Terminal 2:
pnpm sanity
```

Then open your browser to:
- **Sanity Studio**: http://localhost:3333
- **Next.js App**: http://localhost:3000

## Populating Sample Data

### Step 1: Access Sanity Studio
1. Run `pnpm sanity`
2. Navigate to http://localhost:3333
3. Sign in with your Sanity account (the one associated with project ID: ienxkkoa)

### Step 2: Create Sample Products

Create at least 3-5 sample products covering different categories:

**Example Product 1: Business Cards**
- Name: "Premium Business Cards"
- Slug: "premium-business-cards"
- Category: "business-cards"
- Card Image: Upload a business card image
- Banner Image: Upload a larger banner image
- Short Description: "Professional business cards that make a lasting impression"
- Starting Price: "Starting at $29.99"
- Features: Add items like "High-quality cardstock", "Multiple finish options", "Fast turnaround"
- Specifications:
  - Sizes: "3.5\" x 2\"", "3.5\" x 2.5\""
  - Materials: "14pt Cardstock", "16pt Cardstock", "Plastic"
  - Finishes: "Matte", "Glossy", "Spot UV"
- Pricing Tiers: Add quantity/price pairs (e.g., "100 cards - $29.99", "500 cards - $99.99")

**Example Product 2: Custom Packaging**
- Name: "Custom Product Boxes"
- Category: "packaging"
- Fill in similar fields...

### Step 3: Create Sample Services

Create at least 3-5 sample services:

**Example Service 1: Digital Printing**
- Name: "Digital Printing Services"
- Slug: "digital-printing"
- Category: "digital-printing"
- Tagline: "Fast, high-quality digital printing"
- Upload card and hero images
- Features: Add objects with title and description
  - Title: "Fast Turnaround", Description: "Most orders completed within 24-48 hours"
  - Title: "High Quality", Description: "Professional-grade printing equipment"
- Process Steps:
  - Step 1: "Upload Your Design"
  - Step 2: "Select Options"
  - Step 3: "Review & Approve"
  - Step 4: "Print & Deliver"
- Benefits: Add items like "No minimum orders", "Full color printing", "Various sizes available"

### Step 4: Create Sample Portfolio Items

Create at least 2-3 portfolio projects:

**Example Portfolio 1:**
- Title: "ABC Corporation Rebranding"
- Client Name: "ABC Corporation"
- Category: "branding"
- Featured: true (check the box)
- Upload featured and banner images
- Challenge: Write about the client's challenge
- Solution: Describe how you solved it
- Results: Share the outcomes
- Services Used: Link to relevant services
- Products Used: Link to relevant products
- Testimonial:
  - Quote: "Outstanding work! They exceeded our expectations."
  - Author: "John Smith"
  - Position: "CEO, ABC Corporation"

### Step 5: Link Related Content

After creating the base content:
- Go back to products and add related products
- Link services to related services
- Ensure portfolio items reference the services and products used

## Configuration Files

### Environment Variables (`.env.local`)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ienxkkoa
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your-token>
```

### Sanity Client (`lib/sanity.client.ts`)
- Configured to use environment variables
- CDN enabled for production
- API version: 2024-01-01

### Image URL Builder (`lib/sanity.image.ts`)
- Use `urlFor(image)` to generate optimized image URLs
- Example: `urlFor(product.cardImage).width(400).height(300).url()`

## Next Steps (Phase 3)

Once sample data is populated, Phase 3 will:
- Create query functions for fetching data
- Implement data fetching in Next.js pages
- Build listing and detail page templates
- Integrate image optimization
- Render rich text content with Portable Text

## Deploying Sanity Studio

When ready to deploy Sanity Studio:

```bash
pnpm sanity:deploy
```

This will deploy your studio to a Sanity-hosted URL.

## Troubleshooting

### Can't access Studio
- Ensure `pnpm sanity` is running
- Check that port 3333 is not in use
- Verify environment variables are set correctly

### Authentication Issues
- Make sure you're logged in with the correct Sanity account
- Run `npx sanity login` if needed
- Check that your API token has the correct permissions

### Schema Not Appearing
- Check `sanity/schemas/index.ts` exports all schemas
- Verify `sanity.config.ts` imports schemaTypes correctly
- Restart the studio with `pnpm sanity`

## Useful Commands

```bash
# Start Sanity Studio
pnpm sanity

# Deploy Sanity Studio
pnpm sanity:deploy

# Manage Sanity datasets
npx sanity dataset list
npx sanity dataset create <name>

# Manage CORS origins
npx sanity cors add http://localhost:3000 --credentials

# View Sanity project info
npx sanity projects list
```
