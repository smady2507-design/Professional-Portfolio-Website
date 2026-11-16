# Sumana Dey — Executive Portfolio

Responsive executive portfolio website for **Sumana Dey**, Business Transformation & Operations Leader with 25+ years of cross-functional leadership across E-Commerce, Retail, BFSI, Telecom, and Global Shared Services.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, configured for zero-friction GitHub integration and Vercel deployment.

## Local Development

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Typecheck and build production bundle
npm run lint
npm run build
```

## Integrating with GitHub

```bash
git init
git add .
git commit -m "feat: initial executive portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploying to Vercel

### Option 1: Vercel GitHub Integration (Recommended)
1. Push this repository to GitHub.
2. Open [vercel.com/new](https://vercel.com/new) and import your GitHub repository.
3. Vercel automatically detects **Vite** via `vercel.json`:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Every push to `main` will trigger an automatic production deployment, and pull requests will generate preview URLs.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```
