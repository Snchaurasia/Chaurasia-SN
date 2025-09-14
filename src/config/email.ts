// EmailJS Configuration
// To set up EmailJS for direct email sending:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template
// 4. Get your credentials and replace the values below

export const EMAIL_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_your_service_id',
  TEMPLATE_ID: 'template_your_template_id', 
  PUBLIC_KEY: 'your_public_key',
  
  // Email template should include these variables:
  // {{from_name}} - Sender's name
  // {{from_email}} - Sender's email  
  // {{to_email}} - Recipient email (snchaurasia@bhu.ac.in)
  // {{subject}} - Email subject
  // {{message}} - Email message
  // {{reply_to}} - Reply to email
};

// Example Email Template for EmailJS:
/*
Subject: Contact Form: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the contact form on Dr. Sachchida Nand Chaurasia's website.
Reply to: {{reply_to}}
*/
