# 3D Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Three.js. This project uses the T3 Stack as its foundation, providing a robust and scalable architecture.

## Features

- Interactive 3D background with particle effects
- Smooth scrolling sections with animated transitions
- Dark/light theme toggle
- Responsive design for all devices
- TypeScript for type safety
- Built on the T3 Stack (Next.js, TypeScript, Tailwind CSS, tRPC)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/src
  /app                 # Next.js App Router
    /_components       # React components
      /3d              # Three.js components
      /sections        # Page sections (About, Projects, etc.)
      /ui              # UI components (Navigation, ThemeToggle, etc.)
    /styles            # Global styles
  /server              # Server-side code (tRPC, auth)
  /trpc                # tRPC setup
```

## Customization

### Sections

The portfolio is divided into sections that can be customized:

- **Hero**: Update the `HeroSection.tsx` component with your name, title, and social links
- **About**: Create an `AboutSection.tsx` component in the sections directory
- **Projects**: Create a `ProjectsSection.tsx` component to showcase your work
- **Skills**: Create a `SkillsSection.tsx` component to highlight your skills
- **Contact**: Create a `ContactSection.tsx` component with your contact information

### 3D Elements

The 3D background can be customized by modifying the components in the `3d` directory:

- `Scene3D.tsx`: Main 3D scene setup
- `ParticleField.tsx`: Particle system
- `FloatingElements.tsx`: Additional floating 3D objects

### Theme

The theme colors can be customized in the Tailwind configuration file.

## Deployment

### Deploying to Vercel

1. Make sure your project is pushed to a GitHub repository

2. Set up environment variables in Vercel:
   - `AUTH_SECRET`: Generate a secure random string using `npx auth secret`
   - `AUTH_DISCORD_ID`: Your Discord OAuth client ID (if using Discord auth)
   - `AUTH_DISCORD_SECRET`: Your Discord OAuth client secret (if using Discord auth)
   - `SKIP_ENV_VALIDATION`: Set to `true` for initial deployment

3. Deploy using one of these methods:

   **Option 1: Vercel Dashboard**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure the project settings
   - Deploy

   **Option 2: Vercel CLI**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory
   - Follow the prompts to deploy

   **Option 3: One-Click Deploy**
   
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio)

### Troubleshooting Deployment Issues

- If you encounter build errors, check the Vercel build logs
- Ensure all required environment variables are set correctly
- The `vercel.json` file in this project configures build settings
- For Next.js 15+ specific issues, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## License

This project is open source and available under the [MIT License](LICENSE).
