import { CollectionConfig } from 'payload';

import type { Block } from 'payload';

const heroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'heading', type: 'text', localized: true, required: true },
    { name: 'subheading', type: 'textarea', localized: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
};

const featureBlock: Block = {
  slug: 'feature',
  fields: [
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true,localized: true },
        { name: 'description', type: 'textarea',localized: true },
      ],
    },
  ],
};

const testimonialBlock: Block = {
  slug: 'testimonial',
  fields: [{
    name:'testimonialTitle',
    type:'array',
    fields:[
        { name: 'quote', type: 'textarea', localized: true, required: true },
        { name: 'author', type: 'text', localized: true },
        { name: 'avatar', type: 'upload', relationTo: 'media' },

    ]
  }
  ],
};

const ctaBlock: Block = {
  slug: 'cta',
  fields: [
    { name: 'ctaText', type: 'text', localized: true, required: true },
    { name: 'ctaLink', type: 'text' },
  ],
};

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true, // <-- Allow public read access
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'metaTitle', type: 'text', localized: true },
    { name: 'metaDescription', type: 'textarea', localized: true },
    {
      name: 'content',
      type: 'blocks',
      blocks: [heroBlock, featureBlock, testimonialBlock, ctaBlock],
    },
  ],
};