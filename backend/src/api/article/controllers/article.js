'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async create(ctx) {
    // Normalize slug from title if provided
    if (ctx.request.body.data?.title && !ctx.request.body.data?.slug) {
      ctx.request.body.data.slug = ctx.request.body.data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    } else if (ctx.request.body.data?.slug) {
      // Normalize existing slug
      ctx.request.body.data.slug = ctx.request.body.data.slug
        .toLowerCase()
        .replace(/[^a-z0-9-_.~]+/g, '-')
        .replace(/(^-|-$)/g, '')
        .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
    }
    
    return await super.create(ctx);
  },

  async update(ctx) {
    // Normalize slug if provided
    if (ctx.request.body.data?.title && !ctx.request.body.data?.slug) {
      ctx.request.body.data.slug = ctx.request.body.data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    } else if (ctx.request.body.data?.slug) {
      // Normalize existing slug
      ctx.request.body.data.slug = ctx.request.body.data.slug
        .toLowerCase()
        .replace(/[^a-z0-9-_.~]+/g, '-')
        .replace(/(^-|-$)/g, '')
        .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
    }
    
    return await super.update(ctx);
  },
}));

