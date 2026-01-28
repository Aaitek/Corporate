'use strict';

/**
 * contact-submission controller
 * Custom controller to properly handle data extraction and validation
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-submission.contact-submission', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Log incoming request for debugging
      console.log('=== CONTACT SUBMISSION CREATE ===');
      console.log('ctx.request.body:', JSON.stringify(ctx.request.body, null, 2));
      
      // Strapi v4 wraps data in ctx.request.body.data
      const bodyData = ctx.request.body.data || ctx.request.body;
      console.log('Extracted bodyData:', JSON.stringify(bodyData, null, 2));
      
      // Extract and validate fields
      const name = bodyData.name?.trim();
      const email = bodyData.email?.trim();
      const message = bodyData.message?.trim();
      const company = bodyData.company?.trim() || null;
      const phone = bodyData.phone?.trim() || null;
      const service = bodyData.service?.trim() || null;
      
      console.log('Extracted values:', { name, email, message, company, phone, service });
      
      // Validate required fields
      if (!name || name.length === 0) {
        console.error('Validation failed: name is missing or empty');
        return ctx.badRequest('Name is required');
      }
      
      if (!email || email.length === 0) {
        console.error('Validation failed: email is missing or empty');
        return ctx.badRequest('Email is required');
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return ctx.badRequest('Please provide a valid email address');
      }
      
      if (!message || message.length === 0) {
        console.error('Validation failed: message is missing or empty');
        return ctx.badRequest('Message is required');
      }
      
      // Prepare data for Strapi entityService
      const submissionData = {
        name,
        email,
        message,
        company: company || null,
        phone: phone || null,
        service: service || null,
        read: false,
      };
      
      console.log('Creating submission with data:', submissionData);
      
      // Create the submission using entityService
      const submission = await strapi.entityService.create('api::contact-submission.contact-submission', {
        data: submissionData,
      });
      
      console.log('Submission created successfully:', submission.id);
      
      return ctx.created({ data: submission });
    } catch (error) {
      console.error('Contact submission error:', error);
      console.error('Error stack:', error.stack);
      return ctx.badRequest('Failed to submit contact form', { error: error.message });
    }
  },
}));
