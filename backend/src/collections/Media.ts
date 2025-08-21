import type { CollectionConfig } from 'payload'

/**
 * Collection configuration for the 'media' collection.
 *
 * @remarks
 * This collection allows file uploads and includes an 'alt' text field for accessibility.
 *
 * @property {string} slug - The unique identifier for the collection.
 * @property {object} access - Access control settings for the collection.
 * @property {Function} access.read - Function that determines read access; always returns true.
 * @property {Array} fields - Array of field definitions for the collection.
 * @property {string} fields[].name - The name of the field ('alt').
 * @property {string} fields[].type - The type of the field ('text').
 * @property {boolean} fields[].required - Whether the field is required (true).
 * @property {boolean} upload - Enables file upload functionality for the collection.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
