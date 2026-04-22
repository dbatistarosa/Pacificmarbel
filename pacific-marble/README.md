# Pacific Marble Restoration — Website

**Client:** Pacific Marble Restoration Corp.  
**Location:** 4411 N Dixie Hwy, Boca Raton, FL 33431  
**Phone:** 1-855-680-7239  
**Email:** info@pmarble.com  
**Stack:** React 18 + Vite 5 → Deployed on Vercel

---

## Project Structure

```
pacific-marble/
├── index.html          # HTML shell with SEO meta, schema, fonts
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel SPA routing + cache headers
├── package.json
├── .gitignore
└── src/
    ├── main.jsx        # React entry point
    ├── index.css       # Global reset + responsive helpers
    └── App.jsx         # Full site — all 12 pages in one component
```

---

## Pages Included

| Page | Route (internal) |
|---|---|
| Home | `home` |
| About Us | `about` |
| Marble Polishing / Restoration | `marble-polishing` |
| Porcelain Cleaning | `porcelain` |
| Yacht Services | `yacht` |
| Grout Services | `grout` |
| Photo Gallery | `photo-gallery` |
| Video Gallery | `video-gallery` |
| Before / After | `before-after` |
| Our Process | `our-process` |
| FAQ | `faq` |
| Contact Us | `contact` |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build
# → Output in /dist folder

# 4. Preview production build locally
npm run preview
```

---

## Deploy to GitHub

```bash
# 1. Initialize git (run inside the pacific-marble folder)
git init
git add .
git commit -m "Initial commit — Pacific Marble Restoration website"

# 2. Create a new repo on github.com
#    → Go to github.com → New repository
#    → Name it: pacific-marble-restoration
#    → Set to Private or Public
#    → Do NOT initialize with README (we already have one)

# 3. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/pacific-marble-restoration.git
git branch -M main
git push -u origin main
```

---

## Deploy to Vercel

### Option A — Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** → select `pacific-marble-restoration`
4. Vercel auto-detects **Vite** — no settings to change
5. Click **"Deploy"**
6. Done. Your site is live at `https://pacific-marble-restoration.vercel.app`

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the project folder
vercel

# Follow prompts:
# → Link to existing project? No
# → Project name: pacific-marble-restoration
# → Directory: ./  (press Enter)
# → Override settings? No

# For production deploy:
vercel --prod
```

### Custom Domain (optional)

1. In Vercel dashboard → Project → Settings → Domains
2. Add: `pmarble.com` and `www.pmarble.com`
3. Update DNS at your domain registrar:
   - `A` record → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`

---

## Environment Variables

No environment variables needed. All data is static and sourced directly from `pmarble.com`'s existing CDN.

---

## Notes

- All images load directly from `https://pmarble.com/wp-content/uploads/` (their existing WordPress CDN). No images are bundled in this repo.
- The MP4 video also streams from pmarble.com's server.
- If pmarble.com changes their image paths in the future, update the `IMGS` and `GALLERY` constants at the top of `src/App.jsx`.
- The site uses client-side routing (no URL changes on navigation). `vercel.json` handles SPA rewrite rules.

---

© 2026 Pacific Marble Restoration Corp. — Website built as a design proposal.
