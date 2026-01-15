import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Service Name',
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
          { title: 'Digital Printing', value: 'digital-printing' },
          { title: 'Offset Printing', value: 'offset-printing' },
          { title: 'Large Format', value: 'large-format' },
          { title: 'Design Services', value: 'design-services' },
          { title: 'Finishing', value: 'finishing' },
          { title: 'Packaging', value: 'packaging' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short catchy tagline',
      validation: (Rule) => Rule.max(100),
    }),

    // Visual Content
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      description: 'Image for service listings',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero/Banner Image',
      type: 'image',
      description: 'Large hero image for service detail page',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Content Sections
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for service cards',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Banner Description',
      type: 'string',
      description: 'Description text shown on hero section',
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      description: 'Detailed service overview with rich text',
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

    // Structured Information
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'Service features with titles and descriptions',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      description: 'Key benefits as list items',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      description: 'Step-by-step process',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              stepNumber: 'stepNumber',
              title: 'title',
            },
            prepare({ stepNumber, title }) {
              return {
                title: `Step ${stepNumber}: ${title}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'applications',
      title: 'Applications',
      type: 'array',
      description: 'Use cases and applications',
      of: [{ type: 'string' }],
    }),

    // Relationships
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
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
