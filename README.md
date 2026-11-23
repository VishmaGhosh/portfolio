# Vishma Ghosh Portfolio

Responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and MUI icons.

Project case studies live at `/work/hiphopgrails`, `/work/berides`, and `/work/onlydrops`. Personal projects also have detail pages at `/work/live-store`, `/work/daily-task-manager`, `/work/music-library`, `/work/expense-tracker`, and `/work/mail-box`. The beRides case study separates the Main Site, Admin, and Studio surfaces.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Analytics

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GA_ID` when the GA4 property is ready. Analytics remains disabled while the value is empty.

## Deploy to Vercel

The project uses Next.js defaults and is ready for Vercel deployment:

1. Push this repository to GitHub.
2. In Vercel, choose **New Project**, import the GitHub repository, and keep the detected Next.js settings.
3. Add `NEXT_PUBLIC_GA_ID` only if a GA4 property is configured, then deploy.

Vercel will build and deploy the site after pushes to the production branch. Preview deployments are created for other branches and pull requests.

## Content still to personalize

- Confirm biography, role, experience, skills, and contact links against the resume.
- Confirm the wording for outcomes and any project details that should remain private.
- Add Redclub project details when provided; it is not listed on the Origami work page.
- Replace the CSS project art with approved project screenshots when available.
- Set the canonical domain before launch.
