# Webmerce Analytics Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS for Webmerce Analytics - an Emotion Intelligence Engine for digital commerce.

## 🎨 Brand Colors

- **Primary (Teal)**: `#00D1B2`
- **Secondary (Purple)**: `#7B61FF`
- **Tertiary (Navy)**: `#0A192F`
- **Accent (Light Gray)**: `#E5E7EB`

## 🚀 Features

- ⚡ Built with Next.js 14 App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ♿ SEO optimized
- 🎭 Smooth animations and transitions
- 🌈 Gradient brand styling

## 📦 Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
webmerce/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── WhatWeDo.tsx
│       ├── BrandValues.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Benefits.tsx
│       └── Footer.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎯 Components

- **Header**: Navigation with mobile menu
- **Hero**: Main hero section with CTA
- **WhatWeDo**: Brand positioning statement
- **BrandValues**: Core values (Intelligent, Empathetic, Visionary)
- **Features**: Key product features
- **HowItWorks**: 4-step process explanation
- **Benefits**: Social proof and results
- **Footer**: Links and social media

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Deploy to Vercel with one click or:

```bash
vercel
```

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00D1B2",
  secondary: "#7B61FF",
  tertiary: "#0A192F",
  accent: "#E5E7EB",
}
```

### Content

Components are in `src/components/` - edit content directly in each component file.

## 📄 License

© 2026 Webmerce Analytics. All rights reserved.

## 👥 Brand

**Webmerce Analytics** is a leading Emotion Intelligence Engine for digital commerce, helping DTC and eCommerce brands turn customer emotions, reviews, and feedback into data-driven insights.
