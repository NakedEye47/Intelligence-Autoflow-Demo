# Intelligence AutoFlow Demo For GitHub Live

This folder contains a fully standalone static demo of `Intelligence AutoFlow` designed for:

- GitHub Pages
- GitHub repository previews
- stakeholder product walkthroughs
- portfolio / showcase publishing

It does not use the live Next.js backend. Everything here is front-end only, so it is safe to host publicly as a visual demo.

## Contents

- `index.html` - demo entry page
- `styles.css` - visual system and responsive layout
- `app.js` - interactive tab switching and simulated data rendering

## What The Demo Shows

- Dashboard overview
- Workflows
- Reports
- AI operations
- Integrations
- Deployment / readiness summary

## How To Run Locally

Open `index.html` in your browser.

For a cleaner local preview, you can also run a simple static server from this folder:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## How To Publish On GitHub Pages

## Option 1: Use the included GitHub Actions workflow

This repository now includes:

- `.github/workflows/deploy-demo-pages.yml`

That workflow deploys the contents of `github-live-demo` directly to GitHub Pages.

### Steps

1. Push this repository to GitHub.
2. In GitHub, open `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, set:
   - `Source`: `GitHub Actions`
5. Push to your default branch or run the workflow manually.

GitHub Pages will publish the static demo from this folder.

## Option 2: Copy this folder into a dedicated demo repository

1. Create a new GitHub repository.
2. Copy the contents of this folder into that repository root.
3. Push the repository.
4. Enable GitHub Pages from the root branch or from GitHub Actions.

## Option 3: Move the contents into `/docs`

If you want branch-based GitHub Pages without Actions:

1. Copy the contents of this folder into a top-level `docs` folder.
2. In GitHub `Pages`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: your main branch
   - `Folder`: `/docs`

## Recommended Repo Description

Use something like:

> Static GitHub Pages demo for Intelligence AutoFlow, a company-ready automation, AI, reporting, and integrations platform.

## How To Customize

### Update branding

Edit these files:

- `index.html`
- `styles.css`

### Update the demo content

Edit:

- `app.js`

The sample datasets are grouped by:

- `workflows`
- `reports`
- `aiTasks`
- `integrations`
- `activity`
- `readinessChecks`

## Notes

- This demo is intentionally static.
- No real credentials, APIs, or secrets are used.
- It is suitable for public GitHub display.
- Your real production application remains in the main project codebase outside this folder.
