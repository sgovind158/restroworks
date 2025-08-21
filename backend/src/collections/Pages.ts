import { CollectionConfig } from 'payload'

import type { Block } from 'payload'

const heroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'heading', type: 'text', localized: true, required: true },
    { name: 'subheading', type: 'textarea', localized: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}

const featureBlock: Block = {
  slug: 'feature',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Powerful Features for Modern Restaurants',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      defaultValue: 'Restroworks provides everything you need to run your restaurant efficiently.',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', localized: true, required: true },
      ],
    },
  ],
}

const testimonialBlock: Block = {
  slug: 'testimonial',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'What Our Customers Say',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      defaultValue:
        'Discover how Restroworks is transforming restaurant operations for leading brands.',
    },
    {
      name: 'testimonialTitle',
      type: 'array',
      fields: [
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'testimonialText',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'designation',
          type: 'text',
          required: false,
          localized: true,
        },
        {
          name: 'company',
          type: 'text',
          required: false,
          localized: true,
        },
      ],
    },
  ],
}

const ctaBlock: Block = {
  slug: 'cta',
  fields: [
    { name: 'ctaText', type: 'text', localized: true, required: true },
    { name: 'ctaLink', type: 'text', required: true },
  ],
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true, // <-- Allow public read access
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'metaTitle', type: 'text', localized: true, required: true },
    { name: 'metaDescription', type: 'textarea', localized: true, required: true },
    {
      name: 'content',
      type: 'blocks',
      blocks: [heroBlock, featureBlock, testimonialBlock, ctaBlock],
    },
  ],
}
