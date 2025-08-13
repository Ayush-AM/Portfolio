# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive form submissions from your portfolio contact form directly to your email address (arpitmahajan856@gmail.com).

## Step 1: Setup EmailJS Account and Service

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com) and create an account if you don't have one
2. Create a new Email Service:
   - Click on "Add New Service"
   - Select "Gmail" or your preferred email provider
   - Connect it to your email address (arpitmahajan856@gmail.com)
   - Follow the authentication steps
   - Give your service a name (e.g., "Portfolio Contact")

## Step 2: Create Email Template

1. In the EmailJS dashboard, go to the "Email Templates" section
2. Click "Create New Template"
3. Design your template with the following variables that match your form:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content

4. Example template body:
   ```
   Name: {{from_name}}
   Email: {{reply_to}}
   Subject: {{subject}}
   Message: {{message}}
   ```

5. Important: Set the recipient email address
   - On the right side under "Email To", set it to: arpitmahajan856@gmail.com

## Step 3: Get Your Credentials

From the EmailJS dashboard, collect the following credentials:

1. **Service ID**: Found in the "Email Services" section
2. **Template ID**: Found in the "Email Templates" section
3. **Public Key**: Found in the "Account" section under "API Keys"

## Step 4: Update Environment Variables

1. Open your `.env` file (not .env.example)
2. Add the following variables with your actual values:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_real_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_real_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_real_public_key
   ```

## Step 5: Verify Form Field Names

Ensure your form field names match the EmailJS template variables:

- `from_name` - For the sender's name input
- `reply_to` - For the sender's email input
- `subject` - For the email subject input
- `message` - For the message content textarea

## Step 6: Deploy to Vercel

When deploying to Vercel:

1. Add the same environment variables in your Vercel project settings
2. Go to your Vercel project dashboard
3. Navigate to "Settings" > "Environment Variables"
4. Add each variable from Step 4 with their values

## How It Works

When a user submits the contact form:

1. The form data is sent to EmailJS using their API
2. EmailJS processes the data and sends an email to your specified address
3. The user receives a success message on the website

## Testing

To test if your setup works:

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (arpitmahajan856@gmail.com) for the received message
4. Also check your spam folder if you don't see it in your inbox

## Troubleshooting

### If you see "Something went wrong. Please try again."

This error typically appears when:

1. **You haven't replaced the placeholder values** in your `.env` file with actual EmailJS credentials
2. There's a problem with your EmailJS configuration
3. The EmailJS service is temporarily unavailable

### Steps to fix:

1. Open your browser console (F12 or right-click > Inspect > Console) to see detailed error messages
2. Verify you've replaced all placeholder values in your `.env` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_real_service_id"  # ← Replace with actual Service ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_real_template_id"  # ← Replace with actual Template ID
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_real_public_key"  # ← Replace with actual Public Key
   ```
3. Check that your EmailJS service is properly connected and active
4. Verify that the form field names match the template variables
5. Check if your email service is blocking the emails

## Security Notes

- The EmailJS public key is safe to use in client-side code
- Your email address is protected as it's only stored in the EmailJS template
- Consider adding CAPTCHA for additional spam protection

## Final Checklist

- [ ] EmailJS account created
- [ ] Email service connected to arpitmahajan856@gmail.com
- [ ] Email template created with correct variables
- [ ] Environment variables added to .env file
- [ ] Environment variables added to Vercel (for production)
- [ ] Form field names match template variables
- [ ] Test submission completed successfully