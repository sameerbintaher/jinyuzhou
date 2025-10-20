# 🚀 Deployment Guide — GitHub + Vercel

## Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `jinyu-zhou-portfolio` (or your preferred name)
3. Description: "Cinematic portfolio with dual desktop/mobile experience"
4. **Keep it Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have them)
6. Click **"Create repository"**

---

## Step 2: Push to GitHub

After creating the repository on GitHub, run these commands:

```bash
cd /Users/macbook/Desktop/Cursor/jin

# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

---

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to **https://vercel.com**
2. Sign in with your GitHub account
3. Click **"Add New..." → "Project"**
4. Import your GitHub repository (`jinyu-zhou-portfolio`)
5. **Framework Preset**: Next.js (auto-detected)
6. **Root Directory**: `./` (leave as default)
7. **Build Command**: `pnpm build` (auto-detected)
8. **Output Directory**: `.next` (auto-detected)
9. **Install Command**: `pnpm install` (auto-detected)
10. Click **"Deploy"**

### Option B: Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: jinyu-zhou-portfolio
# - Framework: Next.js
# - Deploy? Yes
```

---

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings" → "Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

---

## Environment Variables (if needed)

If you add environment variables later:

1. In Vercel dashboard → **"Settings" → "Environment Variables"**
2. Add your variables (e.g., `NEXT_PUBLIC_API_KEY`)
3. Redeploy the project

---

## Automatic Deployments

✅ **Every push to `main` branch** triggers automatic deployment
✅ **Pull requests** get preview deployments
✅ **Production URL** never changes

---

## Build Configuration

The project is already configured for Vercel:

- ✅ **Next.js 15.5.6** (fully supported)
- ✅ **pnpm** package manager
- ✅ **App Router** (optimized)
- ✅ **TailwindCSS v4** (configured)
- ✅ **Framer Motion** (client-side)
- ✅ **Google Fonts** (optimized)

---

## Performance Tips

Your portfolio is already optimized:

- ✅ Server Components by default
- ✅ Client Components only where needed
- ✅ Font optimization (next/font/google)
- ✅ Image optimization ready (if you add images)
- ✅ CSS minimization
- ✅ Automatic code splitting

---

## Post-Deployment Checklist

After deployment:

- [ ] Check mobile responsiveness
- [ ] Test scroll-snap behavior on mobile
- [ ] Verify all animations work
- [ ] Test all navigation links
- [ ] Check scroll-to-top button
- [ ] Verify contact email link
- [ ] Test on different devices/browsers
- [ ] Check accessibility (WCAG)
- [ ] Verify SEO metadata
- [ ] Test performance (Lighthouse)

---

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm build
```

**Error: PostCSS configuration**
- Already fixed: Using `@tailwindcss/postcss`
- Configuration in `postcss.config.js`

### Deployment Issues

**Fonts not loading**
- Already optimized with `next/font/google`
- No action needed

**Animations not working**
- Framer Motion already configured
- Check browser compatibility

---

## Your Project is Ready! 🎉

**Local Development:**
```bash
pnpm dev
```

**Production Build (test before deploy):**
```bash
pnpm build
pnpm start
```

**Deploy to Vercel:**
```bash
git push origin main
# Automatic deployment triggers
```

---

## Support

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **TailwindCSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

---

**Your portfolio is production-ready and optimized for Vercel deployment!** 🚀

