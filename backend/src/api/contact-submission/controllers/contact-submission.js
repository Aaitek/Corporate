'use strict';

/**
 * contact-submission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-submission.contact-submission', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Log the incoming request for debugging
      console.log('=== CONTACT SUBMISSION REQUEST ===');
      console.log('Full ctx.request.body:', JSON.stringify(ctx.request.body, null, 2));
      console.log('ctx.request.body.data:', JSON.stringify(ctx.request.body.data, null, 2));
      console.log('ctx.request.body keys:', Object.keys(ctx.request.body || {}));
      
      // Try multiple ways to extract data (Strapi can structure it differently)
      let bodyData = null;
      
      if (ctx.request.body && ctx.request.body.data) {
        bodyData = ctx.request.body.data;
        console.log('Using ctx.request.body.data');
      } else if (ctx.request.body && Object.keys(ctx.request.body).length > 0) {
        bodyData = ctx.request.body;
        console.log('Using ctx.request.body directly');
      } else {
        console.error('No data found in request body!');
        return ctx.badRequest('No data provided in request');
      }
      
      console.log('Extracted bodyData:', JSON.stringify(bodyData, null, 2));
      console.log('bodyData type:', typeof bodyData);
      console.log('bodyData keys:', bodyData ? Object.keys(bodyData) : 'null/undefined');
      
      // Extract and trim fields - handle both string and object cases
      const name = bodyData.name ? String(bodyData.name).trim() : '';
      const email = bodyData.email ? String(bodyData.email).trim() : '';
      const company = bodyData.company ? String(bodyData.company).trim() : null;
      const phone = bodyData.phone ? String(bodyData.phone).trim() : null;
      const service = bodyData.service ? String(bodyData.service).trim() : null;
      const message = bodyData.message ? String(bodyData.message).trim() : '';
      
      console.log('Extracted values:', { name, email, company, phone, service, message });
      console.log('Value checks:', { 
        nameLength: name.length, 
        emailLength: email.length, 
        messageLength: message.length 
      });

      // Validate required fields with detailed logging
      if (!name || name.length === 0 || !email || email.length === 0 || !message || message.length === 0) {
        console.error('Validation failed:', { 
          hasName: !!name && name.length > 0, 
          hasEmail: !!email && email.length > 0, 
          hasMessage: !!message && message.length > 0,
          nameValue: name,
          emailValue: email,
          messageValue: message,
          bodyData: bodyData
        });
        return ctx.badRequest('Name, email, and message are required');
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return ctx.badRequest('Please provide a valid email address');
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

      // Send email notification (non-blocking)
      try {
        await sendEmailNotification({ name, email, company, phone, service, message });
      } catch (emailError) {
        // Log email error but don't fail the submission
        console.error('Failed to send email notification:', emailError);
      }

      return ctx.created({ data: submission });
    } catch (error) {
      console.error('Contact submission error:', error);
      return ctx.badRequest('Failed to submit contact form', { error: error.message });
    }
  },
}));

// Email notification function
async function sendEmailNotification({ name, email, company, phone, service, message }) {
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'info@aaitek.com';
  const resendApiKey = process.env.RESEND_API_KEY;
  
  // If Resend API key is configured, use Resend
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Aaitek Contact Form <noreply@aaitek.com>',
          to: [notificationEmail],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>This email was sent from the Aaitek website contact form.</small></p>
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Resend API error: ${response.status} - ${errorData}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Resend email error:', error);
      throw error;
    }
  } else {
    // Fallback: Log to console (for development)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company || 'N/A');
    console.log('Phone:', phone || 'N/A');
    console.log('Service:', service || 'N/A');
    console.log('Message:', message);
    console.log('===================================');
    console.log(`\nTo receive email notifications, set RESEND_API_KEY and CONTACT_NOTIFICATION_EMAIL environment variables.`);
    console.log(`Submissions are saved in Strapi admin: https://aaitech-production.up.railway.app/admin/content-manager/collection-types/api::contact-submission.contact-submission`);
  }
}
