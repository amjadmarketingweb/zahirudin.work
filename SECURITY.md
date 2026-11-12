# Security policy

## Architecture

This portfolio is a statically generated Astro site hosted by GitHub Pages. It has no server-side application, login, database, file-upload endpoint, session state, password store or public API endpoint. Contact actions open the visitor's email client or WhatsApp; the site does not accept or store form submissions.

This deliberately small attack surface means that upload restrictions, login rate limiting, session-cookie settings, password hashing, SQL parameterisation and server-side form validation are not applicable to the current site. If any of those features are introduced later, they must be implemented by a server-side service and reviewed before deployment.

## Implemented controls

- HTTPS is the canonical scheme, and the page-level Content Security Policy upgrades insecure subresources. GitHub Pages' **Enforce HTTPS** setting must remain enabled so HTTP requests are redirected before page delivery.
- The Content Security Policy denies forms, network connections, frames, objects, workers and executable inline scripts.
- JSON-LD is escaped and allowed only by an exact SHA-256 content hash.
- External links opened in a new tab use `noopener noreferrer`.
- Production deployments fail on high-severity dependency advisories.
- GitHub Actions are pinned to full commit SHAs to reduce supply-chain risk.
- Dependabot checks npm and GitHub Actions dependencies weekly.
- Environment files, private keys, dependencies and generated output are excluded from Git.

## Secrets

Never place API keys, passwords or private tokens in `src/`, `public/`, Astro `PUBLIC_*` variables or committed files. GitHub Pages is static: anything shipped to the browser or committed to this public repository must be treated as public. A future secret-dependent feature must use a trusted server-side service and repository secrets.

## Reporting a vulnerability

Please report a suspected vulnerability privately by email to `zahierkhairul@gmail.com`. Do not include passwords, API keys or other sensitive personal information in the initial message.
