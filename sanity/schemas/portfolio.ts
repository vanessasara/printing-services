import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    // Project Information
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Branding', value: 'branding' },
          { title: 'Packaging', value: 'packaging' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Publishing', value: 'publishing' },
          { title: 'Signage', value: 'signage' },
          { title: 'Events', value: 'events' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark as featured to highlight on homepage',
      initialValue: false,
    }),

    // Visual Assets
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for portfolio cards',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      description: 'Large banner image for portfolio detail page',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      description: 'Project images with captions',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'caption',
            },
          },
        },
      ],
    }),

    // Content Sections
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for portfolio cards',
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
      title: 'Project Overview',
      type: 'array',
      description: 'Detailed project overview',
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
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'array',
      description: 'The challenge or problem to solve',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      description: 'How the challenge was addressed',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      description: 'Outcomes and achievements',
      of: [
        {
          type: 'block',
        },
      ],
    }),

    // References & Testimonials
    defineField({
      name: 'servicesUsed',
      title: 'Services Used',
      type: 'array',
      description: 'Services that were utilized for this project',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    }),
    defineField({
      name: 'productsUsed',
      title: 'Products Used',
      type: 'array',
      description: 'Products that were created for this project',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 4,
        },
        {
          name: 'author',
          title: 'Author Name',
          type: 'string',
        },
        {
          name: 'position',
          title: 'Position/Title',
          type: 'string',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'featuredImage',
      featured: 'featured',
    },
    prepare({ title, client, media, featured }) {
      return {
        title: `${title}${featured ? ' ⭐' : ''}`,
        subtitle: client,
        media,
      }
    },
  },
})
