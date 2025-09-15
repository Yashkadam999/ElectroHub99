# Copilot Instructions for ElectroHub11

## Project Overview
ElectroHub11 is an Angular 20+ web application. The codebase follows standard Angular CLI conventions, with all source code under `src/`. Major app features are organized into `app/core` (reusable components), `app/pages` (route-based pages), and `app` (root config and routing).

## Architecture & Patterns
- **Component Structure:**
  - Reusable UI elements (e.g., `carousel`, `footer`, `navbar`) are in `src/app/core/`.
  - Page-level features (e.g., `about`, `contact`, `home`, `product`, `services`) are in `src/app/pages/`.
  - Each feature has its own `.ts`, `.html`, `.css`, and `.spec.ts` files.
- **Routing:**
  - Route definitions are split for browser/server in `app.routes.ts` and `app.routes.server.ts`.
- **Configuration:**
  - App config is split for browser/server in `app.config.ts` and `app.config.server.ts`.
- **Entry Points:**
  - Main entry files: `main.ts` (browser), `main.server.ts` (server), `server.ts` (SSR setup).
- **Styling:**
  - Global styles in `src/styles.css`. Component/page styles are local.

## Developer Workflows
- **Start Dev Server:**
  - `ng serve` (default port 4200)
- **Build:**
  - `ng build` (output in `dist/`)
- **Unit Tests:**
  - `ng test` (Karma runner)
- **E2E Tests:**
  - `ng e2e` (framework not included by default)
- **Scaffolding:**
  - Generate components/services/etc. with `ng generate <type> <name>`

## Conventions & Practices
- **File Naming:**
  - Use kebab-case for files and folders (e.g., `about.html`, `carousel.ts`).
- **Specs:**
  - Each component/page has a corresponding `.spec.ts` for unit tests.
- **No custom build/test scripts:**
  - All workflows use Angular CLI commands.
- **No global state management detected.**
  - Data flow is likely via Angular services and @Input/@Output.

## Integration Points
- **External Dependencies:**
  - Managed via `package.json`. Use `npm install <package>` for new dependencies.
- **Angular CLI:**
  - All major workflows rely on Angular CLI. Custom scripts are not present.

## Examples
- To add a new page:
  1. Run `ng generate component pages/new-page`
  2. Add route in `app.routes.ts`
- To update a shared UI element:
  - Edit files in `src/app/core/<component>/`

## Key Files & Directories
- `src/app/pages/` — Route-based pages
- `src/app/core/` — Shared/reusable components
- `src/app/app.routes.ts` — Main routing config
- `src/app/app.config.ts` — Main app config
- `src/styles.css` — Global styles
- `angular.json` — Angular CLI project config
- `package.json` — Dependencies and scripts

---
**For more details, see `README.md` or Angular CLI docs.**
