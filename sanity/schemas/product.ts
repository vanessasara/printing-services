import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // Basic Information Fields
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Business Cards', value: 'business-cards' },
          { title: 'Packaging', value: 'packaging' },
          { title: 'Marketing Materials', value: 'marketing-materials' },
          { title: 'Signage', value: 'signage' },
          { title: 'Labels & Stickers', value: 'labels-stickers' },
          { title: 'Books & Magazines', value: 'books-magazines' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Image Fields
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      description: 'Image for product listings and cards',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      description: 'Large banner image for product detail page',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Description Fields
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for product cards',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Banner Description',
      type: 'string',
      description: 'Description text shown on banner',
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      description: 'Detailed product overview with rich text',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    }),

    // Pricing Structure
    defineField({
      name: 'startingPrice',
      title: 'Starting Price',
      type: 'string',
      description: 'Display price like "Starting at $99"',
    }),
    defineField({
      name: 'pricingTiers',
      title: 'Pricing Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              quantity: 'quantity',
              price: 'price',
            },
            prepare({ quantity, price }) {
              return {
                title: `${quantity} - ${price}`,
              }
            },
          },
        },
      ],
    }),

    // Product Details
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'Key product features as bullet points',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        {
          name: 'sizes',
          title: 'Available Sizes',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'materials',
          title: 'Available Materials',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'finishes',
          title: 'Available Finishes',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      description: 'Additional product images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order for sorting products (lower numbers appear first)',
    }),

    // Relationships
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'cardImage',
      category: 'category',
    },
    prepare({ title, media, category }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
