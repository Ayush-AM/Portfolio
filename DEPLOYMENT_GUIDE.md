# Vercel Deployment Guide

This guide provides detailed instructions for deploying your Next.js 15 portfolio to Vercel, including troubleshooting common issues.

## Prerequisites

- A GitHub account with your portfolio repository pushed to it
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)

## Step 1: Prepare Your Project

1. Ensure your project has the following files:
   - `vercel.json` (already created in your project)
   - `.env` file with required environment variables

2. Check that your `package.json` has the correct build scripts:
   ```json
   "scripts": {
     "build": "next build",
     "start": "next start"
   }
   ```

## Step 2: Set Up Environment Variables

1. Generate a secure AUTH_SECRET:
   ```bash
   npx auth secret
   ```
   Copy the generated string.

2. Prepare your environment variables:
   - `AUTH_SECRET`: The secret you generated
   - `AUTH_DISCORD_ID`: Your Discord OAuth client ID (if using Discord auth)
   - `AUTH_DISCORD_SECRET`: Your Discord OAuth client secret (if using Discord auth)
   - `SKIP_ENV_VALIDATION`: Set to `true` for initial deployment

## Step 3: Deploy to Vercel

### Option 1: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. Add environment variables from Step 2
6. Click "Deploy"

### Option 2: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts and provide environment variables when asked

## Troubleshooting Common Issues

### Build Failures

If you encounter the error shown in your message:

```
Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/Ayush-AM/Portfolio (Branch: main, Commit: 2b4784c)
Previous build caches not available
Cloning completed: 433.000ms
Running "vercel build"
Vercel CLI 44.6.4
Installing dependencies...
added 441 packages in 16s
161 packages are looking for funding
  run `npm fund` for details
Detected Next.js version: 15.4.2
Running "npm run build"
> ayush-portfolio@0.1.0 build
```

Try these solutions:

1. **Environment Variables**: Ensure all required environment variables are set in Vercel
   - Go to your project in Vercel Dashboard
   - Navigate to Settings → Environment Variables
   - Add all required variables from Step 2

2. **Skip Environment Validation**: Add `SKIP_ENV_VALIDATION=true` to your environment variables

3. **Check Build Logs**: Review the complete build logs in Vercel for specific error messages

4. **Redeploy**: After making changes, trigger a new deployment

## Next.js 15 Specific Considerations

Next.js 15 has some specific requirements for deployment:

1. Node.js version: Ensure Vercel is using Node.js 18.17 or later
   - In Vercel Dashboard, go to Settings → General → Node.js Version

2. Output directory: Confirm the output directory is set to `.next`

3. Server components: Next.js 15 uses React Server Components by default, which are fully supported by Vercel

## Monitoring Your Deployment

After successful deployment:

1. Check your deployment status in the Vercel Dashboard
2. Review Analytics for performance metrics
3. Set up monitoring and alerts in Vercel

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository:

1. Every push to your main branch will trigger a new production deployment
2. Pull requests will create preview deployments

You can customize this behavior in the Vercel Dashboard under Settings → Git.