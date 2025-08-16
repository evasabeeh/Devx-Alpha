# DevX Alpha

<div align="center">

![DevX Alpha Logo](./public/logo.svg)

**A comprehensive digital agency platform built with Next.js 15 and React 19**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

</div>

## 📸 Screenshots

<div align="center">

### Homepage
![Homepage](./screenshots/1.png)

### About Us Page
![About Us](./screenshots/2.png)

### Pricing Page
![Pricing](./screenshots/3.png)

### Authentication
![Authentication](./screenshots/4.png)

### Features
![Features](./screenshots/5.png)

</div>

## 🌟 Overview

DevX Alpha is a full-stack digital agency platform that combines modern web technologies with comprehensive business management features. It serves as both a client-facing website showcasing digital services and a complete business management system with admin capabilities, job management, team administration, and user authentication.

## ✨ Key Features

### 🎯 Core Business Services
- **Web Development**: Custom responsive websites with CMS integration and SEO optimization
- **Mobile App Development**: Native iOS/Android and cross-platform applications (Flutter, React Native)
- **UI/UX Design**: User-centered design with research, prototyping, and usability testing
- **Graphic Design**: Brand identity, marketing materials, and visual content creation
- **AI Solutions**: Chatbot development, machine learning integration, and automation tools
- **CMS Development**: WordPress, Shopify, and Webflow customization
- **PCB Design**: Professional circuit board design and development
- **Professional Accounting**: Financial services and business accounting solutions

### 🔐 Authentication & User Management
- **Multi-Provider Authentication**: Google, GitHub, and email/password login
- **Role-Based Access Control**: User and admin roles with different permissions
- **Email Verification**: Secure account verification system
- **Password Reset**: Forgot password functionality with secure token-based reset
- **Profile Management**: Complete user profile system with company information

### 👥 Admin Panel Features
- **Dashboard Analytics**: Comprehensive statistics and metrics overview
- **Team Management**: Add, edit, and manage team members with profiles
- **Job Management**: Create, edit, and manage job postings
- **Application Tracking**: Review and manage job applications with status updates
- **User Administration**: Manage user accounts and permissions
- **Content Management**: Blog post creation and management system
- **Contact Management**: Handle customer inquiries and contact submissions

### 💼 Career Portal
- **Job Listings**: Dynamic job postings with detailed descriptions
- **Application System**: Complete job application workflow with resume upload
- **Application Tracking**: Real-time status updates for applicants
- **Team Showcase**: Meet the team section with member profiles
- **Company Culture**: Values and culture presentation

### 📱 Client-Facing Features
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations, hover effects, and carousels
- **Service Showcase**: Detailed service pages with comprehensive descriptions
- **Pricing Transparency**: Clear pricing tiers with feature comparisons
- **Customer Testimonials**: Social proof and client feedback sections
- **Contact Forms**: Lead generation and customer inquiry handling
- **Support Center**: FAQ system and customer support resources
- **Free Resources**: eBook downloads and educational content

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.4.6 with App Router
- **UI Library**: React 19.1.1 with TypeScript
- **Styling**: Tailwind CSS 4.0 with custom design system
- **State Management**: Redux Toolkit for complex state management
- **Authentication**: NextAuth.js 5.0 with multiple providers
- **Icons**: React Icons 5.5.0
- **Carousel**: Swiper.js 11.2.10
- **Image Optimization**: Next.js Image with Sharp 0.34.3
- **Markdown**: React Markdown with syntax highlighting

### Backend & Database
- **Database**: PostgreSQL with Prisma ORM 6.13.0
- **Authentication**: NextAuth.js with Prisma adapter
- **File Upload**: Cloudinary integration for image/file management
- **Email**: Nodemailer for transactional emails
- **Password Hashing**: bcryptjs for secure password storage
- **Validation**: Zod for runtime type checking and validation

### Development Tools
- **Language**: TypeScript 5.0
- **Package Manager**: Bun (with npm/yarn compatibility)
- **Linting**: ESLint 9.32.0 with Next.js configuration
- **Code Formatting**: Prettier 3.6.2 with Tailwind CSS plugin
- **Build Tool**: Next.js with Turbopack support

### Typography & Design
- **Fonts**: Google Fonts (Lato, Montserrat, Afacad, DM Sans, Manrope, Plus Jakarta Sans)
- **Color Scheme**: Custom red theme (#cb1919) with comprehensive palette
- **Design System**: Consistent component library with reusable patterns
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **Package Manager**: Bun (recommended) - [Install Bun](https://bun.sh/)
- **Database**: PostgreSQL (local or cloud instance)
- **Git**: For version control

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd devx-alpha-official
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/devx_alpha"
DIRECT_URL="postgresql://username:password@localhost:5432/devx_alpha"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Cloudinary (for file uploads)
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Email Configuration
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@devxalpha.com"
```

### 4. Database Setup
```bash
# Generate Prisma client
bun run prisma generate

# Run database migrations
bun run prisma migrate dev

# (Optional) Seed the database
bun run prisma db seed
```

### 5. Start Development Server
```bash
bun run dev
```

The application will be available at `http://localhost:3000`

### 6. Create Admin User (Optional)
```bash
node scripts/make-admin.js
```

## 🔧 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `bun run dev` | Start development server with Turbopack |
| **Build** | `bun run build` | Create optimized production build |
| **Build (Full)** | `bun run build:full` | Generate Prisma client and build |
| **Start** | `bun run start` | Start production server |
| **Lint** | `bun run lint` | Run ESLint for code quality |
| **Format** | `bun run format` | Format code with Prettier |

### Database Commands
```bash
bun run prisma studio          # Open Prisma Studio (database GUI)
bun run prisma migrate dev     # Run database migrations
bun run prisma generate        # Generate Prisma client
bun run prisma db push         # Push schema changes to database
```

## 📁 Project Structure

```
devx-alpha-official/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin panel pages
│   │   │   ├── applications/  # Job application management
│   │   │   ├── jobs/          # Job posting management
│   │   │   ├── team/          # Team member management
│   │   │   └── page.tsx       # Admin dashboard
│   │   ├── api/               # API routes
│   │   │   ├── admin/         # Admin API endpoints
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── jobs/          # Job-related endpoints
│   │   │   └── profile/       # User profile endpoints
│   │   ├── auth/              # Authentication pages
│   │   │   ├── sign-in/       # Login page
│   │   │   ├── sign-up/       # Registration page
│   │   │   ├── forgot-password/ # Password reset
│   │   │   └── verify-email/  # Email verification
│   │   ├── career/            # Career portal
│   │   ├── services/          # Service pages
│   │   │   ├── web-development/
│   │   │   ├── app-development/
│   │   │   ├── uiux-design/
│   │   │   ├── ai-solutions/
│   │   │   └── ...
│   │   ├── profile/           # User profile pages
│   │   ├── jobs/              # Job listing and details
│   │   ├── support/           # Support center
│   │   ├── delivery/          # Order tracking
│   │   ├── free-book/         # Free resources
│   │   └── ...
│   ├── components/            # Reusable components
│   │   ├── admin/             # Admin-specific components
│   │   ├── auth/              # Authentication components
│   │   ├── Home/              # Homepage components
│   │   ├── ui/                # Basic UI components
│   │   └── ...
│   ├── lib/                   # Utility functions
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── prisma.ts          # Prisma client
│   │   ├── cloudinary.ts      # File upload utilities
│   │   └── ...
│   ├── types/                 # TypeScript definitions
│   └── middleware.ts          # Route protection middleware
├── prisma/                    # Database schema and migrations
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/                    # Static assets
│   ├── screenshots/           # Application screenshots
│   ├── services/              # Service-related images
│   ├── blog/                  # Blog images
│   └── ...
├── scripts/                   # Utility scripts
└── dumps/                     # Development notes and dumps
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

## 🔑 Key Features Breakdown

### 🏠 Homepage Features
- **Hero Section**: Compelling introduction with call-to-action
- **Services Overview**: Interactive service cards with hover effects
- **Testimonials**: Customer feedback carousel
- **Pricing Plans**: Transparent pricing with feature comparison
- **Trusted By Section**: Client logos and social proof

### 🔐 Authentication System
- **Multi-Provider Login**: Google, GitHub, and email/password
- **Secure Registration**: Email verification required
- **Password Management**: Forgot/reset password functionality
- **Role-Based Access**: User and admin role separation
- **Profile Management**: Complete user profile system

### 👨‍💼 Admin Dashboard
- **Analytics Overview**: Key metrics and statistics
- **Team Management**: CRUD operations for team members
- **Job Management**: Create and manage job postings
- **Application Review**: Track and manage job applications
- **User Administration**: Manage user accounts and roles
- **Content Management**: Blog and content administration

### 💼 Career Portal
- **Dynamic Job Listings**: Real-time job postings
- **Application System**: Complete application workflow
- **Resume Upload**: File upload with Cloudinary integration
- **Application Tracking**: Status updates and notifications
- **Team Showcase**: Meet the team section

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Mobile-optimized interactions
- **Fast Loading**: Optimized images and lazy loading
- **SEO Optimized**: Meta tags and structured data

## 🚀 Deployment

### Production Build
```bash
# Build the application
bun run build

# Start production server
bun run start
```

### Environment Variables for Production
```env
# Production Database
DATABASE_URL="your-production-database-url"
DIRECT_URL="your-production-direct-url"

# Production Auth
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"

# Production Services
CLOUDINARY_CLOUD_NAME="your-production-cloudinary"
EMAIL_SERVER_HOST="your-production-smtp"
```

### Deployment Platforms
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative deployment option
- **Railway**: For full-stack applications with database
- **Docker**: Containerized deployment option

## 🛡️ Security Features

- **Authentication**: Secure JWT-based authentication
- **Password Hashing**: bcryptjs for password security
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Input Validation**: Zod schema validation
- **File Upload Security**: Cloudinary secure upload
- **Route Protection**: Middleware-based route protection

## 🧪 Testing

```bash
# Run tests (when implemented)
bun run test

# Run tests in watch mode
bun run test:watch

# Generate coverage report
bun run test:coverage
```

## 📊 Performance

- **Lighthouse Score**: Optimized for performance
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered pages where possible
- **Caching**: Optimized caching strategies

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Conventional Commits**: Standardized commit messages

### Pull Request Guidelines
- Provide clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed

## 📞 Support

For support and questions:
- **Email**: support@devxalpha.com
- **Documentation**: Check this README and code comments
- **Issues**: Create GitHub issues for bugs and feature requests

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

<div align="center">

**DevX Alpha** - Innovative Tech Solutions for Modern Businesses

Built with ❤️ using Next.js, React, and TypeScript

</div>
