# DevX Alpha

**A modern digital agency website built with Next.js 15 and React 19**

DevX Alpha is a comprehensive digital agency platform that showcases services, pricing, and capabilities for businesses looking to maximize their efficiency through professional web development, app development, design, and AI solutions.

## 🚀 Features

### Core Services
- **Web Development**: Custom responsive websites with CMS integration, SEO optimization, and hosting support
- **App Development**: Native iOS/Android and hybrid mobile applications with full backend integration
- **UI/UX Design**: User-centered interface design with research, prototyping, and usability testing
- **Graphic Design**: Brand identity, marketing materials, and visual content creation
- **AI Solutions**: Chatbot development, machine learning integration, and automation tools
- **CMS Development**: WordPress, Shopify, and Webflow customization and development

### Website Features
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Components**: Hover effects, carousels, and smooth animations
- **Service Showcase**: Detailed service pages with comprehensive feature descriptions
- **Pricing Transparency**: Clear pricing tiers with feature comparisons
- **Customer Testimonials**: Social proof and client feedback sections
- **Contact Forms**: Lead generation and customer inquiry handling
- **SEO Optimized**: Built with Next.js for optimal search engine performance

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.3.5 (App Router)
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4.0 with custom design system
- **Typography**: Google Fonts (Lato, Montserrat, Afacad, DM Sans, Manrope, Plus Jakarta Sans)
- **Icons**: React Icons 5.5.0
- **Carousel**: Swiper.js 11.2.10
- **Image Optimization**: Next.js Image component with Sharp 0.34.3

### Development Tools
- **Language**: TypeScript 5.0
- **Linting**: ESLint 9.32.0 with Next.js configuration
- **Code Formatting**: Prettier 3.6.2 with Tailwind CSS plugin
- **Build Tool**: Next.js with Turbopack support
- **Package Manager**: Bun (with npm/yarn compatibility)

### Styling & Design
- **CSS Framework**: Tailwind CSS 4.0 with PostCSS
- **Design System**: Custom color palette with primary red theme (#cb1919)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Custom Components**: Reusable UI components with consistent styling

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **Package Manager**: 
  - Bun (recommended) - [Install Bun](https://bun.sh/)
  - Or npm/yarn as alternatives
- **Git**: For version control

## 🚀 Installation Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devx-alpha
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 💻 Usage Guide

### Development Mode
```bash
bun run dev          # Start development server with hot reload
```
- Runs on `http://localhost:3000`
- Includes hot module replacement
- Uses Turbopack for faster builds
- Automatic TypeScript compilation

### Production Mode
```bash
bun run build       # Build the application for production
bun run start       # Start the production server
```
- Optimized build with static generation
- Image optimization and compression
- CSS minification and tree-shaking

### Code Quality
```bash
bun run lint        # Run ESLint for code quality checks
bun run format     # Format code with Prettier
```

## 📁 Project Structure

```
devx-alpha/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Service pages
│   │   │   ├── web-development/
│   │   │   ├── app-development/
│   │   │   ├── uiux-design/
│   │   │   ├── graphic-design/
│   │   │   ├── ai-solutions/
│   │   │   └── cms-development/
│   │   ├── pricing/           # Pricing page
│   │   ├── features/          # Features page
│   │   ├── support/           # Support page
│   │   ├── sign-in/           # Sign in page
│   │   ├── sign-up/           # Sign up page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable React components
│       ├── Home/              # Home page components
│       ├── Services/          # Service page components
│       ├── Pricing/           # Pricing components
│       ├── Contact/           # Contact form components
│       ├── Navbar.tsx         # Navigation component
│       ├── Footer.tsx         # Footer component
│       └── index.tsx          # Component exports
├── public/                    # Static assets
│   ├── services/              # Service icons and images
│   ├── customers/             # Customer testimonial images
│   ├── features/              # Feature page images
│   └── ...                    # Other static assets
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
└── README.md                  # Project documentation
```

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `bun run dev` | Start development server with hot reload and Turbopack |
| **Build** | `bun run build` | Create optimized production build |
| **Start** | `bun run start` | Start production server (requires build first) |
| **Lint** | `bun run lint` | Run ESLint to check code quality and standards |
| **Format** | `bun run format` | Format code using Prettier with Tailwind CSS plugin |

### Package Management
```bash
bun add [package_name]          # Add new dependency
bun add -d [package_name]       # Add development dependency
bun remove [package_name]       # Remove dependency
bun update                      # Update all dependencies
```

## ⚙️ Configuration

### Environment Variables
Currently, no environment variables are required for basic functionality. For production deployment, you may need to configure:

- `NEXT_PUBLIC_SITE_URL`: Your site's public URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID (if implemented)

### Tailwind CSS Configuration
The project uses Tailwind CSS 4.0 with a custom design system defined in `src/app/globals.css`:

```css
:root {
  --primary: #cb1919;           /* Primary red color */
  --faded-text: #9ca3af;        /* Muted text color */
}
```

### Font Configuration
Custom Google Fonts are configured in `src/app/layout.tsx`:
- **Lato**: Primary headings and UI text (400, 900 weights)
- **Montserrat**: Body text and descriptions (400 weight)
- **Afacad**: Special headings (700 weight)
- **DM Sans**: Alternative body text (400 weight)
- **Manrope**: UI elements (400 weight)
- **Plus Jakarta Sans**: Additional typography (400 weight)

## 🤝 Contributing Guidelines

### Code Style
- Follow the existing TypeScript and React patterns
- Use functional components with hooks
- Maintain consistent naming conventions (camelCase for variables, PascalCase for components)
- Write descriptive commit messages

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes following the established patterns
3. Run `bun run lint` and `bun run format` before committing
4. Test your changes thoroughly
5. Submit a pull request with a clear description

### Component Guidelines
- Keep components focused and reusable
- Use TypeScript interfaces for props
- Follow the existing file structure in `src/components/`
- Include proper error handling and loading states

## 📄 License

This project is private and proprietary. All rights reserved.

---

**DevX Alpha** - Maximizing efficiency through innovative digital solutions.

For questions or support, please contact the development team.
