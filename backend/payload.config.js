import { buildConfig } from 'payload';
import path from 'path';

const heroBlock = {
  slug: 'hero',
  fields: [
    { name: 'heading', type: 'text', localized: true, required: true },
    { name: 'subheading', type: 'textarea', localized: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
};

const featureBlock = {
  slug: 'feature',
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'icon', type: 'upload', relationTo: 'media' },
  ],
};

const testimonialBlock = {
  slug: 'testimonial',
  fields: [
    { name: 'quote', type: 'textarea', localized: true, required: true },
    { name: 'author', type: 'text', localized: true },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
  ],
};

const ctaBlock = {
  slug: 'cta',
  fields: [
    { name: 'ctaText', type: 'text', localized: true, required: true },
    { name: 'ctaLink', type: 'text' },
  ],
};

export default buildConfig({
     secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'pages',
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
    },
    {
      slug: 'contact',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'message', type: 'textarea', required: true },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(__dirname, 'media'),
        mimeTypes: ['image/*'],
      },
      fields: [],
    },
  ],
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'French' }, // Change 'fr' to your second language
    ],
    defaultLocale: 'en',
  },
  cors: [
    'http://localhost:3000', // Next.js dev server
    'http://localhost:3001', // Add more as needed
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  uploads: {
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
