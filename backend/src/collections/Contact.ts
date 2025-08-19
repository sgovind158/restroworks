import { CollectionConfig } from 'payload';

export const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    read: () => true, // Allow public read (for testing only)
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
  ],
};