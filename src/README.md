# ALY ELMOHAMDY — BEYOND CODE
## Premium 3D Cinematic Developer Portfolio & Personal Brand

Production-ready personal brand and digital portfolio built for **Aly Elmohamdy** — Full-Stack Developer & Creative Builder, HR @ Amrix.

---

### Tech Stack
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Dark Cinematic Theme: Obsidian `#080B12`, Deep Navy `#0D1422`, Electric Blue `#57C8FF`)
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Validation:** Zod
- **Typography:** Space Grotesk (Headlines), Inter (Body), JetBrains Mono (Technical Labels)

---

### Key Features

1. **Original AE Monogram Logo System:**
   - Architectural geometric mark merging **A** and **E** through precise shared vectors and deliberate negative space.
   - 8 production variations: Primary AE symbol, horizontal lockup, vertical lockup, monochrome white, monochrome black, electric blue, favicon, and animated SVG stroke-reveal component.

2. **Cinematic Hero & Real-Time 3D Energy Core:**
   - Full-screen entrance sequence with headline reveal and status badge.
   - Real-time 3D interactive sculpture featuring concentric geometric rings, luminous core sphere, pointer tracking parallax, and an accessible static fallback.

3. **Image-Free Project Showcase:**
   - Strict text-first, editorial design showcasing all 4 verified projects:
     1. *Women's Health Physiotherapy Website* (Healthcare Website)
     2. *Discord System Bot* (Discord Automation)
     3. *Study Bot* (Discord Productivity)
     4. *Study Website* (Web Application)
   - Dynamic 3D tilt hover physics, geometric dividers, and dedicated case study routes (`/projects/[slug]`).

4. **Public GitHub API Integration:**
   - Live synchronization with `@AliElmohamdy` repositories, star counts, fork counts, and primary languages with rate-limit and offline safety fallbacks.

5. **Type-Safe Content Store:**
   - Centralized, editable data layers located in:
     - `src/data/site.ts`
     - `src/data/projects.ts`
     - `src/data/skills.ts`
     - `src/data/services.ts`
     - `src/data/socials.ts`

6. **SEO, OpenGraph & Performance:**
   - Dynamic OpenGraph preview generation (`/opengraph-image`)
   - `sitemap.xml` and `robots.txt`
   - Mobile-first responsiveness and reduced-motion accessibility support.

---

### Local Development Setup

```bash
# Clone or navigate to the directory
cd proto

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

---

### Production Build & Verification

```bash
# Compile and build for production
npm run build

# Start production server
npm start
```

---

### Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Aly Elmohamdy Beyond Code portfolio"
   git remote add origin https://github.com/AliElmohamdy/<repo-name>.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset will auto-detect **Next.js**.
4. Click **Deploy**. No additional environment variables are required for initial launch.
