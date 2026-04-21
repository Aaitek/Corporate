'use strict';

/**
 * contact-submission lifecycle hooks
 */

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

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    
    // Send email notification (non-blocking)
    try {
      await sendEmailNotification({
        name: result.name,
        email: result.email,
        company: result.company,
        phone: result.phone,
        service: result.service,
        message: result.message,
      });
    } catch (emailError) {
      // Log email error but don't fail the submission
      console.error('Failed to send email notification:', emailError);
    }
  },
};
