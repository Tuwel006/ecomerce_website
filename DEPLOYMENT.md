# Vercel Deployment Guide

This guide will help you deploy your MERN ecommerce application to Vercel.

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas** - For your production database
4. **Environment Variables** - All required API keys and secrets

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Ready for deployment"

# Add remote origin (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/my-ecommerce-store.git

# Push to GitHub
git push -u origin main
```

### 2. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is fine for testing)
3. Create a database user
4. Whitelist all IP addresses (0.0.0.0/0) for Vercel
5. Get your connection string

### 3. Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 4. Configure Environment Variables

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your-super-secure-jwt-secret-for-production
CLIENT_URL=https://your-app.vercel.app
GOOGLE_CALLBACK_URL=https://your-app.vercel.app/api/auth/google/callback
FACEBOOK_CALLBACK_URL=https://your-app.vercel.app/api/auth/facebook/callback
```

**Important:** Replace `your-app` with your actual Vercel app name.

### 5. Optional Services Setup

#### AWS S3 (for file uploads)
```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket-name
```

#### Mailgun (for emails)
```
MAILGUN_KEY=your-mailgun-key
MAILGUN_DOMAIN=your-domain.com
MAILGUN_EMAIL_SENDER=noreply@your-domain.com
```

#### OAuth (Google/Facebook)
```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

### 6. Update OAuth Callback URLs

If using OAuth, update your OAuth app settings:

**Google Console:**
- Authorized redirect URIs: `https://your-app.vercel.app/api/auth/google/callback`

**Facebook App:**
- Valid OAuth Redirect URIs: `https://your-app.vercel.app/api/auth/facebook/callback`

### 7. Test Your Deployment

1. Visit your Vercel app URL
2. Test user registration/login
3. Test product browsing
4. Test cart functionality
5. Check admin dashboard (if applicable)

## Troubleshooting

### Common Issues

**Build Fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify environment variables are set

**API Routes Not Working:**
- Check that your API routes start with `/api/`
- Verify server/index.js is properly configured
- Check Vercel function logs

**Database Connection Issues:**
- Verify MongoDB Atlas connection string
- Ensure IP whitelist includes 0.0.0.0/0
- Check database user permissions

**Environment Variables:**
- Make sure all required variables are set in Vercel
- Check for typos in variable names
- Ensure production URLs are used

### Debugging

1. **Check Vercel Function Logs:**
   - Go to your project dashboard
   - Click on "Functions" tab
   - View logs for your API routes

2. **Check Build Logs:**
   - Go to "Deployments" tab
   - Click on a deployment
   - View build logs

3. **Test Locally:**
   ```bash
   # Test production build locally
   npm run build
   npm start
   ```

## Continuous Deployment

Once set up, Vercel will automatically deploy when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main
# Vercel automatically deploys
```

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update environment variables with new domain

## Performance Optimization

1. **Enable Vercel Analytics** in project settings
2. **Use Vercel Edge Functions** for better performance
3. **Optimize images** using Vercel Image Optimization
4. **Enable caching** for static assets

## Security Checklist

- [ ] Strong JWT secret in production
- [ ] MongoDB Atlas IP whitelist configured
- [ ] Environment variables properly set
- [ ] OAuth callback URLs updated
- [ ] HTTPS enforced (automatic with Vercel)
- [ ] Sensitive data not in repository

## Support

If you encounter issues:
1. Check Vercel documentation
2. Review function logs
3. Test locally first
4. Check GitHub issues for similar problems