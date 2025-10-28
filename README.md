# MEFRUP Group LLC - Professional Website

A modern, professional website for MEFRUP Group LLC, a certified manufacturer of precision automotive components.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Chatbot**: AI-powered chatbot for customer inquiries
- **Certifications Showcase**: Highlights IATF 16949:2016 and ISO 9001:2018 certifications
- **Contact Form**: Professional contact form with validation
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📂 Project Structure

```
mefrup-website/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation bar with scroll effects
│   ├── Hero.tsx             # Hero section with stats
│   ├── Services.tsx         # Services and products section
│   ├── Certifications.tsx   # Certifications and timeline
│   ├── About.tsx            # Company information
│   ├── Contact.tsx          # Contact form and information
│   ├── Footer.tsx           # Footer with social links
│   └── Chatbot.tsx          # Interactive chatbot widget
├── lib/
│   └── utils.ts             # Utility functions
└── package.json
```

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3012](http://localhost:3012)

## 📋 Available Scripts

- `npm run dev` - Start development server on port 3012
- `npm run build` - Build for production
- `npm start` - Start production server on port 3012
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#1e40af) - Professional, trustworthy
- **Accent**: Orange (#f97316) - Energy, innovation
- **Secondary**: Slate (#64748b) - Modern, sophisticated

### Animations
- Smooth scroll behavior
- Fade-in on scroll animations
- Blob animations in background
- Hover effects on interactive elements
- Responsive mobile menu with animations

### Sections

1. **Hero Section**
   - Company tagline
   - Key statistics
   - Call-to-action buttons
   - Feature cards

2. **Services**
   - 6 main service categories
   - Interactive cards with hover effects
   - Features list for each service

3. **Certifications**
   - IATF 16949:2016 and ISO 9001:2018
   - Quality management capabilities
   - Company timeline (2003-2028)

4. **About**
   - Company story
   - Core values
   - Industries served
   - Key statistics

5. **Contact**
   - Contact information
   - Quote request form
   - Social media links
   - Certification badge

6. **Chatbot**
   - Floating action button
   - Interactive chat window
   - Pre-programmed responses
   - Quick reply buttons

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🔧 Customization

### Update Content
Edit component files in `/components` directory to update content.

### Change Colors
Modify CSS variables in `app/globals.css`:
```css
:root {
  --primary: #1e40af;
  --accent: #f97316;
  /* ... */
}
```

### Add New Sections
Create new component in `/components` and import in `app/page.tsx`.

## 📞 Contact Information

This website showcases:
- Email: info@mefrup.com
- Social Media: Facebook, Twitter, Instagram, LinkedIn, YouTube
- Certifications: IATF 16949:2016 (valid until July 14, 2028)

## 📄 License

Copyright © 2025 MEFRUP Group LLC. All rights reserved.

---

**Where German Standards Meet Mexican Agility**
