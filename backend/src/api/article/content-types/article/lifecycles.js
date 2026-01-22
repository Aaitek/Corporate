'use strict';

/**
 * article lifecycles
 */

// Helper function to generate a valid slug from a string
function generateSlug(str) {
  if (!str) return '';
  
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-_.~]+/g, '-') // Replace non-alphanumeric chars (except -_.~) with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
}

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Auto-generate slug from title if not provided
    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    } else if (data.slug) {
      // Normalize existing slug
      data.slug = generateSlug(data.slug);
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    
    // Auto-generate slug from title if title changed and slug not provided
    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    } else if (data.slug) {
      // Normalize existing slug
      data.slug = generateSlug(data.slug);
    }
  },
};
