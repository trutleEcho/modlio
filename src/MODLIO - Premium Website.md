# MODLIO - Premium Website

A modern, minimal, and highly polished website built with Next.js 15, shadcn/ui, and Framer Motion, representing flagship-level UI design.

## 🚀 Features

### Design & User Experience
- **Modern Minimal Design**: Clean, professional aesthetic with generous white space
- **Premium Brand Colors**: Primary #7F87FF (bright blue) with complementary purple accents
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Dark/Light Theme**: Smooth theme switching with system preference detection
- **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation support

### Technical Excellence
- **Next.js 15**: Latest version with App Router and Turbopack for optimal performance
- **shadcn/ui**: Custom-styled components with consistent design system
- **Framer Motion**: Smooth animations and micro-interactions throughout
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS v4**: Modern utility-first CSS with OKLCH color format

### Interactive Elements
- **Smooth Scrolling Navigation**: Active section tracking and seamless transitions
- **Animated Background**: Subtle particles and geometric shapes
- **Hover Effects**: Polished interactions on all interactive elements
- **Loading States**: Professional loading animations and skeleton loaders
- **Form Validation**: Real-time validation with user-friendly feedback

## 📁 Project Structure

```
modlio-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and design system
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── accessibility.tsx    # Accessibility utilities
│   │   ├── animated-background.tsx
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── loading.tsx
│   │   ├── navigation.tsx
│   │   ├── page-transition.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── components.json              # shadcn/ui configuration
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd modlio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
    npm run dev          # Start development server with Turbopack
    npm run build        # Build for production
    npm run start        # Start production server
    npm run lint         # Run ESLint
```

## 🎨 Design System

### Colors
- **Primary**: `#7F87FF` (oklch(0.65 0.25 264))
- **Secondary**: Complementary purple tones
- **Accent**: Light purple accent colors
- **Neutral**: Carefully crafted neutral palette for text and backgrounds

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Scale**: Responsive typography with clamp() functions
- **Hierarchy**: Clear heading structure with proper line heights

### Spacing
- **Container**: Responsive padding with `container-padding` utility
- **Sections**: Consistent `section-padding` for vertical rhythm
- **Components**: 8px grid system for consistent spacing

## 🌟 Key Components

### Navigation
- Fixed header with backdrop blur effect
- Smooth scrolling to sections
- Active section highlighting
- Mobile hamburger menu with slide-out drawer

### Hero Section
- Animated gradient text
- Feature cards with hover effects
- Floating background elements
- Call-to-action buttons

### About Section
- Statistics with animated counters
- Service cards with detailed features
- Scroll-triggered animations

### Contact Section
- Functional contact form with validation
- Contact information cards
- Success state animations

### Theme System
- Light/dark/system theme options
- Smooth transitions between themes
- Persistent theme storage
- System preference detection

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility with focus indicators
- **Screen Readers**: ARIA labels and announcements
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Skip Links**: Skip to main content functionality
- **Focus Management**: Proper focus trapping in modals

## 🚀 Performance Optimizations

- **Next.js 15**: Latest optimizations and Turbopack bundler
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Tailwind CSS purging and optimization
- **Animation Performance**: Hardware-accelerated animations with Framer Motion

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/navigation.tsx`

### Modifying Colors
Update the CSS custom properties in `src/app/globals.css`:
```css
:root {
  --brand-primary: oklch(0.65 0.25 264);
  --brand-secondary: oklch(0.75 0.15 320);
  /* ... */
}
```

### Adding Components
Use shadcn/ui CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

## 📦 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The project is compatible with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🧪 Testing

### Manual Testing Checklist
- [ ] All navigation links work correctly
- [ ] Theme toggle functions properly
- [ ] Contact form validation works
- [ ] Responsive design on all screen sizes
- [ ] Accessibility with keyboard navigation
- [ ] Performance on slow connections

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

This is a custom project for MODLIO. For modifications or enhancements, please follow the established code style and component patterns.

## 📞 Support

For technical support or questions about this implementation, please contact the development team.

---

**Built with ❤️ using Next.js 15, shadcn/ui, and Framer Motion**
