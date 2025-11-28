# Dreaduri Vesele Website

A modern, responsive website for Dreaduri Vesele - a professional dreadlocks and cornrows styling service in Bucharest, Romania. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Beautiful UI**: Tailwind CSS 4 with custom reggae-inspired color palette
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Latest Next.js optimizations and best practices
- **Accessible**: Built with Radix UI components for accessibility
- **Smooth Animations**: Framer Motion for fluid animations
- **Theme Support**: Dark mode support with next-themes
- **Analytics**: Vercel Analytics integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **pnpm** 8.0.0 or higher

### Installing pnpm

If you don't have pnpm installed, you can install it globally using npm:

```bash
npm install -g pnpm
```

Or using the standalone installer:

```bash
npm install -g @pnpm/exe
```

## 🛠️ Local Development

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:

```bash
pnpm install
```

3. **Start the development server**:

```bash
pnpm run dev
```

4. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run type-check` - Run TypeScript type checking

## 📦 Project Structure

```
dreaduri-vesele-website/
├── app/                    # Next.js App Router pages and layouts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── ...               # Feature components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🚀 Deployment on Vercel

This project is configured for easy deployment on Vercel via GitHub.

### Prerequisites for Deployment

1. **GitHub Account**: Ensure your code is pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

### Deploy via GitHub

1. **Push to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Import to Vercel**:

   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will automatically detect:
     - **Package Manager**: pnpm (from `pnpm-lock.yaml`)
     - **Build Command**: `next build`
     - **Output Directory**: `.next`
     - **Install Command**: `pnpm install`

3. **Deploy**:

   - Click "Deploy"
   - Vercel will build and deploy your project automatically
   - Your site will be live at `your-project.vercel.app`

### Automatic Deployments

Once connected, Vercel will automatically:
- Deploy every push to the `main` branch (production)
- Create preview deployments for pull requests
- Deploy commits to other branches as preview deployments

### Environment Variables

If you need environment variables:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy to apply changes

## 🔧 Configuration

### Package Manager

The project is configured to use **pnpm**. The `packageManager` field in `package.json` ensures Vercel uses the correct version:

```json
"packageManager": "pnpm@10.0.0"
```

### Build Settings

Vercel automatically detects Next.js projects and uses the following defaults:

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

These settings are automatically configured - no manual setup required!

## 📝 Additional Notes

- **Image Optimization**: Images in the `public` folder are automatically optimized by Next.js
- **Type Safety**: Full TypeScript support with strict mode enabled
- **Code Quality**: ESLint configured with Next.js recommended rules
- **Performance**: Optimized for Core Web Vitals and SEO

## 🤝 Contributing

1. Create a new branch
2. Make your changes
3. Test locally with `pnpm run dev`
4. Push to GitHub
5. Create a pull request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js, React, and TypeScript

