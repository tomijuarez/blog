# The Monolith — a static blog

A minimalist, static blog that lives in this GitHub repo and auto-deploys to
GitHub Pages on every push. No database, no CMS, no server. Posts are `.mdx`
files under `src/content/posts/`, versioned by git.

**Features**
- LaTeX math via KaTeX (`$inline$` and `$$display$$`)
- Images (local or remote) via standard Markdown
- Tag filtering (`/tags/<tag>`) and a full archive (`/archive`)
- RSS feed (`/rss.xml`)
- Zero runtime cost — hosted free on GitHub Pages

---

## Writing a new entry

1. Create a new file: `src/content/posts/my-new-entry.mdx`
2. Add frontmatter:
   ```mdx
   ---
   title: My new entry
   date: 2026-05-01
   tags: [Linear Algebra, Category Theory]
   excerpt: One-sentence summary shown on the home page.
   ---

   Your content here. LaTeX works: $e^{i\pi} + 1 = 0$.

   Display math:

   $$
   \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
   $$

   Images:

   ![caption](/images/my-diagram.png)
   ```
3. Place local images in `public/images/` and reference them as `/images/name.png`.
4. `git add`, commit, push to `main`. GitHub Actions builds and deploys automatically.

Set `draft: true` in frontmatter to exclude a post from the production build (it
still renders in `yarn dev`).

---

## Running locally

```bash
nvm use 22   # or any Node >= 18.17
yarn install
yarn dev     # http://localhost:4321/blog
```

Build:
```bash
yarn build     # outputs to ./dist
yarn preview   # serves the build locally
```

---

## First-time GitHub Pages setup

This repo is configured to deploy to **`https://tomasjuarez.github.io/blog`** (subpath).

1. Push this repo to GitHub under the name `blog`:
   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:tomasjuarez/blog.git
   git push -u origin main
   ```
2. In the repo's GitHub page, go to **Settings → Pages** and set **Source** to
   **GitHub Actions** (not "Deploy from branch").
3. The `Deploy to GitHub Pages` workflow runs on every push to `main`. First
   deploy takes ~1–2 minutes.

If you later rename the repo (e.g. to `tomasjuarez.github.io` for a root-domain
site), edit `astro.config.mjs`:
```js
site: 'https://tomasjuarez.github.io',
base: '/',          // instead of '/blog'
```

## Custom domain (when you buy one)

1. In **Settings → Pages**, add your domain in the "Custom domain" field. GitHub
   creates a `CNAME` file in the repo.
2. In your DNS provider, point the domain at GitHub Pages:
   - Apex (`example.com`): four `A` records to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`.
   - `www.example.com`: a `CNAME` to `tomasjuarez.github.io`.
3. Update `astro.config.mjs`:
   ```js
   site: 'https://example.com',
   base: '/',
   ```
4. Enable **Enforce HTTPS**.

---

## Design tokens

All styling lives in `src/styles/global.css`. The palette, type scale, and layout
widths are defined as CSS variables at the top of the file — change them there to
re-skin the site without touching any component.

Site metadata (title, author, bio, nav) is in `src/consts.ts`.
