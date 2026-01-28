# Contact Form Setup Guide

## Where to View Contact Form Submissions

### Option 1: Strapi Admin Panel (Recommended)
1. Go to: `https://aaitech-production.up.railway.app/admin`
2. Login with your admin credentials
3. Navigate to: **Content Manager** → **Contact Submission**
4. All form submissions will be listed here with:
   - Name, Email, Company, Phone
   - Service Interest
   - Message
   - Read status (unread/new submissions)

### Option 2: Database
- Submissions are stored in the `contact_submissions` table in PostgreSQL
- Access via Railway dashboard or database client

## Email Notifications Setup

### Current Status
- ✅ Submissions are saved to Strapi database
- ⚠️ Email notifications need to be configured

### How to Enable Email Notifications

#### Option 1: Using Resend (Recommended)

1. **Get Resend API Key:**
   - Sign up at https://resend.com
   - Create an API key
   - Verify your domain (or use their test domain)

2. **Set Environment Variables in Railway:**
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_NOTIFICATION_EMAIL=jitendra.soni@aaitek.com.au
   ```
   
   **Note:** If `CONTACT_NOTIFICATION_EMAIL` is not set, emails will default to `jitendra.soni@aaitek.com.au`

3. **Deploy:**
   - The backend will automatically send emails when forms are submitted
   - Emails will be sent to the address in `CONTACT_NOTIFICATION_EMAIL`

#### Option 2: Using Other Email Services

You can modify the `sendEmailNotification` function in:
`backend/src/api/contact-submission/controllers/contact-submission.js`

To use:
- SendGrid
- Mailgun
- AWS SES
- Or any other email service

### Email Notification Details

**When:** Sent immediately after a form submission is saved
**To:** Email address set in `CONTACT_NOTIFICATION_EMAIL` (default: jitendra.soni@aaitek.com.au)
**From:** `Aaitek Contact Form <noreply@aaitek.com>`
**Subject:** `New Contact Form Submission from [Name]`
**Content:** Includes all form fields (name, email, company, phone, service, message)

## Testing

1. Fill out the contact form at: `https://aaitek.com/contact`
2. Check Strapi admin panel for the submission
3. If email is configured, check the notification email inbox

## Troubleshooting

### No emails received?
- Check `RESEND_API_KEY` is set correctly
- Check `CONTACT_NOTIFICATION_EMAIL` is set correctly
- Check Railway logs for email errors
- Verify Resend domain/email is verified

### Can't access Strapi admin?
- Check Railway deployment is running
- Verify admin credentials
- Check environment variables are set

## Current Configuration

- **Notification Email:** Set via `CONTACT_NOTIFICATION_EMAIL` env var (default: info@aaitek.com)
- **Email Service:** Resend (requires `RESEND_API_KEY`)
- **Fallback:** If no API key, submissions are logged to console and saved to database
