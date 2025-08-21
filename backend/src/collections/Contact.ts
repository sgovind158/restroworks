import { CollectionConfig } from 'payload';

/**
 * Collection configuration for the "contact" form.
 *
 * @remarks
 * This collection allows public read and create access (intended for testing only).
 * It defines the following required fields:
 * - `name`: The name of the contact (text).
 * - `email`: The email address of the contact (email).
 * - `message`: The message from the contact (textarea).
 *
 * @example
 * // Example usage:
 * // Submitting a contact form with name, email, and message.
 */
export const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    read: () => true, // Allow public read (for testing only)
    create: () => true
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
  ],
};