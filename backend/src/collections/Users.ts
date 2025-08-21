import type { CollectionConfig } from 'payload'

/**
 * Payload CMS collection configuration for the "users" collection.
 *
 * @remarks
 * This collection is used to manage user authentication and administration.
 * The `auth` property enables authentication for this collection.
 * The `admin.useAsTitle` property specifies that the user's email will be used as the display title in the admin UI.
 * Additional user fields can be added to the `fields` array as needed.
 *
 * @see {@link CollectionConfig} for more configuration options.
 */
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
