'use strict';

/**
 * contact-submission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-submission.contact-submission', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Extract data from Strapi's data wrapper (ctx.request.body.data) or directly (ctx.request.body)
      const bodyData = ctx.request.body.data || ctx.request.body;
      const { name, email, company, phone, service, message } = bodyData;

      // Validate required fields
      if (!name || !email || !message) {
        return ctx.badRequest('Name, email, and message are required');
      }

      // Create the submission
      const submission = await strapi.entityService.create('api::contact-submission.contact-submission', {
        data: {
          name,
          email,
          company: company || null,
          phone: phone || null,
          service: service || null,
          message,
          read: false,
        },
      });

      return ctx.created({ data: submission });
    } catch (error) {
      console.error('Contact submission error:', error);
      return ctx.badRequest('Failed to submit contact form', { error: error.message });
    }
  },
}));
