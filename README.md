# Florus Soundroom

A Next.js portfolio and media site for Florus Soundroom, built with React, MDX, and a custom design system. The project includes a branded landing page, content-driven routes, PWA support, gallery/work/service sections, and analytics integrations.

## Project overview

- Framework: Next.js 15
- Runtime: Node.js 20 LTS
- UI: React 19 + custom design tokens/styles
- Content: MDX and static content modules
- PWA: next-pwa with manifest and offline support
- Deployment-ready: static/site-friendly routing with Next.js app router

## Tech stack

- Next.js
- React
- TypeScript
- Sass
- MDX
- @once-ui-system/core
- next-pwa

## Requirements

- Node.js 20.20.2 (pinned in the project)
- npm 10+
- macOS/Linux shell with nvm installed

## Node version management with nvm

This project includes a pinned Node version in `.nvmrc`.

1. Install nvm if it is not already on your machine:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. Load nvm into your current shell:

   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
   ```

3. In the project directory, activate the correct version:

   ```bash
   cd /path/to/florussoundroom
   nvm install
   nvm use
   ```

   This reads the version from `.nvmrc` and switches the shell to Node 20.20.2.

4. To confirm the version:

   ```bash
   node -v
   npm -v
   ```

## Local setup

```bash
cd /path/to/florussoundroom
nvm use
npm install
cp .env.example .env.local
npm run dev
```

Then open:

- http://localhost:3000

## Environment variables

The project uses environment variables for analytics and route protection. Start from `.env.example` and fill in the values you need:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PAGE_ACCESS_PASSWORD=password
```

Notes:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` is used for Google Analytics.
- `PAGE_ACCESS_PASSWORD` protects protected routes.
- Rename `.env.example` to `.env.local` for local development.

## Useful commands

```bash
# Start development server
npm run dev

# Production build
npm run build

# Start built app
npm run start

# Lint
npm run lint
```

## App structure

- `src/app/` – App Router pages, routes, and layouts
- `src/components/` – Reusable UI components
- `src/config/` – Navigation and site configuration
- `src/resources/` – Theme, fonts, content, and styling data
- `public/` – Static assets, icons, manifest, and PWA files
- `docs/` – Supporting documentation

## PWA notes

This app is configured with `next-pwa` and includes a manifest in `public/manifest.json`.

If you want the installable app experience to work properly, make sure the icons exist under `public/icons/` before deployment.

See `PWA_SETUP.md` for more detail.

## Notes for contributors

- Keep the project on the Node version defined in `.nvmrc`.
- Use `npm install` after pulling new dependency changes.
- Prefer running the app through `nvm use` before development commands.
- If you add environment variables, document them in `.env.example`.

## License

This project is distributed under the license in `LICENSE`.

