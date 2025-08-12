# Matriseba - Home Ultrasound Service

A modern, mobile-friendly healthcare website built with Next.js 15, TypeScript, and Tailwind CSS for **Matriseba** - a maternal care platform offering home ultrasound services in Bangladesh.

## 🏥 About Matriseba

Matriseba provides AI-powered ultrasound services at home using the **BabyChecker** portable device. Users can book appointments through the website, and trained health agents visit their homes to perform ultrasounds with instant AI-generated reports.

## ✨ Features

### 🎨 Modern Design & UX
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop experience
- **Smooth Animations**: Framer Motion animations throughout the site
- **Healthcare Color Palette**: Professional blues, pinks, and whites
- **Bengali Font Support**: Noto Sans Bengali for bilingual content

### 📱 Key Sections
1. **Hero Section**: Compelling headline with CTA and feature highlights
2. **Interactive Progress Bar**: 5-step service process with animations
3. **BabyChecker Technology**: AI-powered device information and features
4. **Smart Booking Form**: Complete booking system with WhatsApp integration
5. **Customer Testimonials**: Social proof with ratings and reviews
6. **FAQ Section**: Interactive accordion with common questions
7. **Contact Section**: Multiple contact methods and social links
8. **WhatsApp Float Button**: Persistent chat support with notifications

### 🚀 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and interactions
- **Lucide React**: Modern icon library
- **Headless UI**: Accessible UI components
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with focus management
- **Performance**: Optimized images and lazy loading

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Fonts**: Inter (primary), Noto Sans Bengali (for Bengali text)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd matriseba-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
└── components/
    ├── Header.tsx           # Navigation header
    ├── Hero.tsx             # Hero section
    ├── ProgressSteps.tsx    # Interactive service steps
    ├── BabyChecker.tsx      # Technology showcase
    ├── BookingSection.tsx   # Appointment booking form
    ├── Testimonials.tsx     # Customer reviews
    ├── FAQ.tsx              # Frequently asked questions
    ├── Contact.tsx          # Contact information
    ├── Footer.tsx           # Site footer
    └── WhatsAppFloat.tsx    # Floating WhatsApp button
```

## 🎯 Key Features Implementation

### Interactive Progress Bar
- 5-step service process visualization
- Auto-animated progression with hover effects
- Mobile-optimized vertical layout

### Smart Booking Form
- Form validation with real-time feedback
- Bangladesh phone number format validation
- WhatsApp message generation and redirect
- Loading states and success animations

### WhatsApp Integration
- Floating action button with pulse animation
- Smart tooltip system
- Pre-formatted booking messages
- Multiple contact points throughout the site

### Responsive Design
- Mobile-first development approach
- Tablet and desktop optimizations
- Touch-friendly interface elements
- Collapsible mobile navigation

## 🌐 Deployment

The application can be deployed to any platform supporting Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Font Loading**: Optimized Google Fonts loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: webpack-bundle-analyzer ready
- **Caching**: Proper cache headers for static assets

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant colors
- **Reduced Motion**: Respects user preferences

## 📞 Support & Contact

- **Website**: [https://matriseba.com](https://matriseba.com)
- **WhatsApp**: +880 1XXX-XXXXXX
- **Email**: info@matriseba.com

## 📄 License

This project is proprietary and confidential. All rights reserved by Matriseba.

---

**Made with ❤️ for expecting mothers in Bangladesh**
