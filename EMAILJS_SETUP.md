# EmailJS Setup Guide

## Overview
This project uses EmailJS to handle reservation form submissions. Follow these steps to configure EmailJS for your environment.

## Setup Steps

### 1. Create EmailJS Account
- Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- Sign up for a free account (allows 200 emails/month)

### 2. Create Email Service
1. Navigate to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
1. Navigate to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables:

```
Subject: New Reservation Request - {{user_name}}

Hello Restaurant Team,

You have received a new reservation request:

Guest Details:
- Name: {{user_name}}
- Email: {{user_email}}
- Phone: {{user_phone}}

Reservation Details:
- Date: {{reservation_date}}
- Time: {{reservation_time}}
- Number of Guests: {{guests}}
- Special Requests: {{special_requests}}

Pre-Order Items:
{{pre_order_items}}

---
This email was sent from the La Crème Reservation System
```

4. Save the template and copy your **Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Public Key
1. Navigate to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your credentials:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

### 6. Restart Development Server
```bash
npm run dev
```

## Testing
1. Open the application in your browser
2. Navigate to the Reservation section
3. Fill out the form and submit
4. Check your email for the reservation confirmation

## Troubleshooting

### Error: "EmailJS credentials are missing"
- Ensure `.env.local` file exists in the project root
- Verify all three variables are set correctly
- Restart the development server after updating `.env.local`

### Error: "Failed to send reservation"
- Check your EmailJS dashboard for error logs
- Verify your email service is properly connected
- Ensure you haven't exceeded the monthly email limit (200 for free tier)

### Template variables not working
- Ensure template variable names match exactly (case-sensitive):
  - `{{user_name}}`
  - `{{user_email}}`
  - `{{user_phone}}`
  - `{{reservation_date}}`
  - `{{reservation_time}}`
  - `{{guests}}`
  - `{{special_requests}}`
  - `{{pre_order_items}}`

## Security Notes
- **Never commit `.env.local` to version control** (it's in `.gitignore`)
- Keep your Public Key, Service ID, and Template ID secure
- For production, use environment variables from your hosting provider

## Additional Resources
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [React Integration Guide](https://www.emailjs.com/docs/sdk/installation/)
