# Muhammad Zahiruddin — Professional Portfolio

Production source for [zahiruddin.work](https://zahiruddin.work), the executive portfolio of Muhammad Zahiruddin (Zahier Khairul).

The site presents his HR Business Partnering, Talent Management, Learning & Development, Organisational Development, workforce strategy and organisation design experience. It is a static Astro website designed for performance, accessibility, search visibility and straightforward future editing.

## Public pages

- `/` — professional profile, expertise, career journey, impact and credentials
- `/ebooks/` — ebooks, publications and selected professional intellectual property
- `/contact/` — professional contact details and CV download

Technical files such as `robots.txt`, `sitemap.xml` and the 404 page support the site but are not primary navigation pages.

## Technology

- Astro
- TypeScript
- Semantic HTML and responsive CSS
- pnpm
- GitHub Actions
- GitHub Pages
- NameSilo DNS for `zahiruddin.work`

The deployed site is static and does not require a server for its core functionality.

## Local development

### Requirements

- Node.js 24 or a compatible version declared by the project
- The pnpm version declared in `package.json`

### Install and run

```bash
pnpm install
pnpm dev
```

Astro prints the local preview address in the terminal, normally `http://localhost:4321`.

### Production checks

```bash
pnpm build
pnpm preview
```

The production output is generated in `dist/`. Do not commit that folder unless the repository policy changes; GitHub Actions builds it during deployment.

## Editing content

Structured content is kept under `src/data/` so career facts do not need to be duplicated across components.

- `src/data/profile.ts` — professional profile, positioning and impact metrics
- `src/data/experience.ts` — roles, dates, achievements and competency tags
- `src/data/publications.ts` — publication details, covers and external URLs
- `src/data/credentials.ts` — education and professional certifications
- `src/data/contact.ts` — email, professional links and CV configuration

Reusable presentation components are under `src/components/`. Page routes are under `src/pages/`.

## Replacing assets

- Hero portrait: replace the current portrait under `public/images/hero/`, preserving the filename used by the data or component configuration.
- Employer logos: store proportion-preserving local copies under `public/logos/` and update `src/data/experience.ts` when a filename changes.
- Publication covers: store local optimized covers under `public/images/publications/` and configure them in `src/data/publications.ts`.
- Publication URLs: edit only the corresponding URL field in `src/data/publications.ts`. Never use placeholder `#` links.
- CV: replace the existing PDF under `public/cv/`, preserving the configured filename, or update its path in `src/data/contact.ts`.
- Contact details: update `src/data/contact.ts`. Do not add private residential details.

After replacing a public asset, check capitalization and paths carefully. GitHub Pages runs on Linux and treats filenames as case-sensitive.

## Deployment

Every push to `main` starts `.github/workflows/deploy-pages.yml`. The workflow:

1. installs pnpm and Node.js;
2. installs locked dependencies;
3. builds the Astro site;
4. uploads the generated `dist/` directory;
5. deploys it to the protected `github-pages` environment.

GitHub Actions custom deployments are controlled by **Repository Settings → Pages → Custom domain**, which must contain `zahiruddin.work`. A repository `CNAME` file is not required for this workflow.

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Desktop, GitHub Pages, NameSilo DNS, HTTPS and troubleshooting instructions.

## Repository

- Owner: `amjadmarketingweb`
- Repository: `zahirudin.work`
- Default branch: `main`
- Production domain: `https://zahiruddin.work`

## Factual and editorial standards

- Preserve the distinction between planned workforce growth, current headcount, direct reports, client workforce and volunteer networks.
- Do not invent employers, credentials, statistics, contact details, publication links or testimonials.
- Keep important recruiter information visible without hover-only interactions.
- Use local, legitimate organisation logos only; use a text fallback if a valid logo is unavailable.
- Maintain semantic HTML, keyboard navigation, visible focus states, strong contrast and reduced-motion support.
