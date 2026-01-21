# Vercel Deployment Guide - GreenBasket

## Problem Identified

Your Vercel deployment was failing because:
1. **Missing Vercel Configuration**: No `vercel.json` file to tell Vercel how to build and serve your Create React App
2. **SPA Routing Issue**: React Router needs proper rewrite rules to handle client-side routing
3. **Build Output**: Vercel needs explicit configuration for the build output directory (`build` folder)

## Solution Applied

### ✅ Created `vercel.json` Configuration File

The `vercel.json` file has been created with the following settings:

- **Build Command**: `npm run build` (includes sitemap generation)
- **Output Directory**: `build` (standard Create React App output)
- **SPA Routing**: All routes rewrite to `/index.html` for client-side routing
- **Caching Headers**: Optimized caching for static assets

### ✅ Added Node.js Version Specification

Added `engines` field to `package.json` to ensure compatibility:
- Node.js: >=18.0.0
- npm: >=9.0.0

## Deployment Steps

### 1. Commit and Push Changes

```bash
git add vercel.json package.json
git commit -m "Add Vercel configuration for deployment"
git push origin main
```

### 2. Deploy on Vercel

**Option A: Automatic Deployment (Recommended)**
- If your GitHub repo is connected to Vercel, it will automatically deploy after you push
- Vercel will detect the `vercel.json` file and use the configuration

**Option B: Manual Deployment**
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy
vercel --prod
```

### 3. Verify Deployment

After deployment, check:
- ✅ Build completes successfully
- ✅ All routes work correctly (test `/shop`, `/blog`, etc.)
- ✅ Static assets load properly
- ✅ Sitemap is accessible at `/sitemap.xml`

## Configuration Details

### `vercel.json` Breakdown

```json
{
  "version": 2,                    // Vercel configuration version
  "buildCommand": "npm run build", // Custom build command
  "outputDirectory": "build",      // Where build files are located
  "rewrites": [                    // SPA routing - all routes → index.html
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [                     // Cache optimization for static assets
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Build Fails

1. **Check Node.js Version**
   - Vercel should use Node.js 18+ (specified in `package.json`)
   - You can override in Vercel dashboard: Settings → General → Node.js Version

2. **Check Build Logs**
   - Go to Vercel Dashboard → Your Project → Deployments → Click on failed deployment
   - Check the build logs for specific errors

3. **Common Issues**
   - **Dependency errors**: Run `npm install` locally to check for issues
   - **Memory issues**: Vercel provides 8GB by default, should be sufficient
   - **Timeout**: Build should complete in <5 minutes

### Routes Not Working

- Ensure `rewrites` in `vercel.json` is correct
- Test routes like `/shop`, `/blog` after deployment
- Check browser console for 404 errors

### Sitemap Not Generating

- The build script runs `npm run generate-sitemap` before building
- Check that `scripts/generate-sitemap.js` exists and is executable
- Verify `public/sitemap.xml` is created during build

## Environment Variables (if needed)

If you need environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables like:
   - `REACT_APP_API_URL`
   - `REACT_APP_ANALYTICS_ID`
   - etc.

Note: Variables must start with `REACT_APP_` to be accessible in Create React App

## Performance Optimization

The configuration includes:
- ✅ Static asset caching (1 year)
- ✅ Proper SPA routing
- ✅ Optimized build output

## Next Steps

1. ✅ Push changes to GitHub
2. ✅ Wait for Vercel to auto-deploy (or deploy manually)
3. ✅ Test all routes
4. ✅ Verify sitemap is accessible
5. ✅ Set up custom domain (if needed) in Vercel Dashboard

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Vercel Configuration Reference](https://vercel.com/docs/project-configuration)

---

**Status**: ✅ Configuration complete - Ready for deployment!

