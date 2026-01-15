import { client } from './sanity.client'
import { urlFor } from './sanity.image'

// Export image URL builder for use in components
export { urlFor }

// ========================================
// PRODUCT QUERIES
// ========================================

export interface Product {
  _id: string
  name: string
  slug: { current: string }
  category: string
  cardImage: any
  bannerImage: any
  shortDescription: string
  bannerDescription?: string
  overview?: any[]
  startingPrice?: string
  pricingTiers?: Array<{
    quantity: string
    price: string
  }>
  features?: string[]
  specifications?: {
    sizes?: string[]
    materials?: string[]
    finishes?: string[]
  }
  gallery?: any[]
  order?: number
  relatedProducts?: Product[]
}

// Get all products
export async function getAllProducts(category?: string): Promise<Product[]> {
  const query = category
    ? `*[_type == "product" && category == $category] | order(order asc, name asc) {
        _id,
        name,
        slug,
        category,
        cardImage,
        shortDescription,
        startingPrice,
        order
      }`
    : `*[_type == "product"] | order(order asc, name asc) {
        _id,
        name,
        slug,
        category,
        cardImage,
        shortDescription,
        startingPrice,
        order
      }`

  return category
    ? await client.fetch(query, { category })
    : await client.fetch(query)
}

// Get single product by slug with all details
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    category,
    cardImage,
    bannerImage,
    shortDescription,
    bannerDescription,
    overview,
    startingPrice,
    pricingTiers,
    features,
    specifications,
    gallery,
    order,
    "relatedProducts": relatedProducts[]-> {
      _id,
      name,
      slug,
      cardImage,
      shortDescription,
      startingPrice
    }
  }`

  return await client.fetch(query, { slug })
}

// ========================================
// SERVICE QUERIES
// ========================================

export interface Service {
  _id: string
  name: string
  slug: { current: string }
  category: string
  tagline?: string
  cardImage: any
  heroImage: any
  shortDescription: string
  bannerDescription?: string
  overview?: any[]
  features?: Array<{
    title: string
    description: string
  }>
  benefits?: string[]
  process?: Array<{
    stepNumber: number
    title: string
    description: string
  }>
  applications?: string[]
  relatedServices?: Service[]
}

// Get all services
export async function getAllServices(category?: string): Promise<Service[]> {
  const query = category
    ? `*[_type == "service" && category == $category] | order(name asc) {
        _id,
        name,
        slug,
        category,
        tagline,
        cardImage,
        shortDescription
      }`
    : `*[_type == "service"] | order(name asc) {
        _id,
        name,
        slug,
        category,
        tagline,
        cardImage,
        shortDescription
      }`

  return category
    ? await client.fetch(query, { category })
    : await client.fetch(query)
}

// Get single service by slug with all details
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    category,
    tagline,
    cardImage,
    heroImage,
    shortDescription,
    bannerDescription,
    overview,
    features,
    benefits,
    process[] | order(stepNumber asc),
    applications,
    "relatedServices": relatedServices[]-> {
      _id,
      name,
      slug,
      cardImage,
      shortDescription,
      tagline
    }
  }`

  return await client.fetch(query, { slug })
}

// ========================================
// PORTFOLIO QUERIES
// ========================================

export interface Portfolio {
  _id: string
  title: string
  slug: { current: string }
  clientName: string
  category: string
  completionDate?: string
  featured: boolean
  featuredImage: any
  bannerImage: any
  shortDescription: string
  bannerDescription?: string
  overview?: any[]
  challenge?: any[]
  solution?: any[]
  results?: any[]
  gallery?: Array<{
    image: any
    caption?: string
  }>
  servicesUsed?: Service[]
  productsUsed?: Product[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

// Get all portfolio items
export async function getAllPortfolio(
  category?: string,
  featuredOnly?: boolean
): Promise<Portfolio[]> {
  let filter = '_type == "portfolio"'

  if (category) {
    filter += ` && category == $category`
  }

  if (featuredOnly) {
    filter += ` && featured == true`
  }

  const query = `*[${filter}] | order(completionDate desc) {
    _id,
    title,
    slug,
    clientName,
    category,
    completionDate,
    featured,
    featuredImage,
    shortDescription
  }`

  const params = category ? { category } : {}
  return await client.fetch(query, params)
}

// Get single portfolio item by slug with all details
export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  const query = `*[_type == "portfolio" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    category,
    completionDate,
    featured,
    featuredImage,
    bannerImage,
    shortDescription,
    bannerDescription,
    overview,
    challenge,
    solution,
    results,
    gallery,
    "servicesUsed": servicesUsed[]-> {
      _id,
      name,
      slug,
      cardImage,
      shortDescription
    },
    "productsUsed": productsUsed[]-> {
      _id,
      name,
      slug,
      cardImage,
      shortDescription
    },
    testimonial
  }`

  return await client.fetch(query, { slug })
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get all product categories
export async function getProductCategories(): Promise<string[]> {
  const query = `*[_type == "product"] | order(category asc) {
    category
  }`
  const products = await client.fetch(query)
  return [...new Set(products.map((p: any) => p.category))]
}

// Get all service categories
export async function getServiceCategories(): Promise<string[]> {
  const query = `*[_type == "service"] | order(category asc) {
    category
  }`
  const services = await client.fetch(query)
  return [...new Set(services.map((s: any) => s.category))]
}

// Get all portfolio categories
export async function getPortfolioCategories(): Promise<string[]> {
  const query = `*[_type == "portfolio"] | order(category asc) {
    category
  }`
  const portfolios = await client.fetch(query)
  return [...new Set(portfolios.map((p: any) => p.category))]
}
