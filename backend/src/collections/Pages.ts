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

/**
 * Represents a "testimonial" block configuration for a CMS.
 *
 * @property {string} slug - The unique identifier for the block.
 * @property {Array} fields - The fields that define the structure of the testimonial block.
 * 
 * Fields:
 * - `heading`: Localized text field for the testimonial section heading. Required.
 * - `description`: Localized textarea for the testimonial section description. Required.
 * - `testimonialTitle`: Array of testimonial entries, each containing:
 *    - `companyLogo`: Upload field for the company logo. Required.
 *    - `testimonialText`: Localized textarea for the testimonial content. Required.
 *    - `author`: Localized text field for the testimonial author. Required.
 *    - `designation`: Localized text field for the author's designation. Optional.
 *    - `company`: Localized text field for the company name. Optional.
 *
 * Used to display customer testimonials, including company logos, testimonial text, author details, and optional designation and company name.
 */
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

/**
 * Payload CMS collection configuration for "pages".
 *
 * This collection defines the structure and access rules for page documents,
 * including fields for title, slug, meta information, and content blocks.
 *
 * @remarks
 * - Public read access is enabled.
 * - Supports localization for title, metaTitle, and metaDescription.
 * - Content is composed of modular blocks: heroBlock, featureBlock, testimonialBlock, and ctaBlock.
 *
 * @see CollectionConfig
 */
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
