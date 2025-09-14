# EmailJS Setup Guide for Contact Form

To enable direct email sending from the contact form, follow these steps:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

## 2. Set Up Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your provider

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: Contact Form: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the contact form on Dr. Sachchida Nand Chaurasia's website.
Reply to: {{reply_to}}
```

## 4. Get Your Credentials
- Note down your:
  - Service ID (from Email Services)
  - Template ID (from Email Templates) 
  - Public Key (from Account settings)

## 5. Update Configuration
- Open `src/config/email.ts`
- Replace the placeholder values with your actual credentials:
  - `SERVICE_ID`: Your EmailJS service ID
  - `TEMPLATE_ID`: Your EmailJS template ID
  - `PUBLIC_KEY`: Your EmailJS public key

## 6. Test the Contact Form
- Run your application
- Fill out the contact form
- Click "Send Message"
- The email should be sent directly to snchaurasia@bhu.ac.in

## Fallback Mechanism
If EmailJS is not configured or fails, the form will automatically fall back to opening the user's email client with a pre-filled message.

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- For higher volume, consider upgrading to a paid plan

## Security Note
The public key is safe to expose in frontend code as it's designed for client-side use.
