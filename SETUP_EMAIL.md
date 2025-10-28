# Email Setup Instructions - MEFRUP Website

## Resend Email Service Configuration

The contact form uses **Resend** to send professional, branded emails to `ventas@mefrup.com`.

### Features:
- ✅ Professional HTML email with MEFRUP logo
- ✅ Branded design with company colors
- ✅ Client information clearly formatted
- ✅ Direct reply-to client email
- ✅ Automatic "Reply to Client" button
- ✅ Plain text fallback for email clients

## Setup Steps

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Verify your email address

### 2. Add and Verify Your Domain
1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Enter: `mefrup.com`
4. Add the DNS records to your domain (at your domain provider):
   - **SPF Record**: TXT record
   - **DKIM Record**: TXT record
   - **DMARC Record**: TXT record (optional but recommended)
5. Wait for verification (usually 15-30 minutes)

### 3. Get Your API Key
1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it: "MEFRUP Website Production"
4. Copy the API key (it starts with `re_`)

### 4. Add API Key to Vercel
1. Go to your Vercel project: [https://vercel.com](https://vercel.com)
2. Go to **Settings** → **Environment Variables**
3. Add new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environment**: Production, Preview, Development (check all)
4. Click **Save**
5. Redeploy your application

### 5. Test the Form
1. Go to your website
2. Fill out the contact form
3. Check `ventas@mefrup.com` inbox
4. You should receive a professionally formatted email with:
   - MEFRUP logo in header
   - Client information in a formatted box
   - Project details
   - "Reply to Client" button

## Email Template Preview

The email includes:
- **Header**: MEFRUP logo on red gradient background
- **Client Info Box**: Name, Email (clickable), Company
- **Project Details Box**: Full message from client
- **Call-to-Action**: "Reply to [Name]" button
- **Footer**: Company info and certifications

## Troubleshooting

### Email not sending?
1. Check Vercel logs for errors
2. Verify `RESEND_API_KEY` is set in Vercel
3. Ensure domain is verified in Resend
4. Check Resend dashboard for failed emails

### Emails going to spam?
1. Complete SPF, DKIM, and DMARC setup
2. Send a test email to yourself first
3. Mark it as "Not Spam" to train filters
4. Consider adding a "warmup" period (send gradually increasing volumes)

### Domain not verifying?
1. Check DNS records are correct (no typos)
2. Wait up to 48 hours for DNS propagation
3. Use a DNS checker tool to verify records

## Cost
- **Free Tier**: 3,000 emails/month
- **Pro Tier**: $20/month for 50,000 emails
- **Enterprise**: Custom pricing

For a quote form, free tier should be more than enough!

## Support
- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com
- This implementation: Check `/app/api/send-quote/route.ts` and `/lib/email-template.ts`
