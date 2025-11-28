# Day2Day Consultancy — Banking Recruitment (Next.js)

Professional recruitment website for Day2Day Consultancy — a boutique recruiting partner serving the banking sector. This repository contains the Next.js frontend used to showcase services, accept candidate applications, and present corporate clients.

Key site copy and goals (short):
- Recruitment Services for the Banking Sector – Connecting qualified candidates with top banking companies.
- Talent Acquisition & HR Solutions – Helping banks find the right employees efficiently.
- Professional Consultancy – Guidance for both candidates and banks during the recruitment process.
- Local presence in Borivli, Mumbai — trusted local partner.
- Corporate partnerships with India’s leading banks.

---

## 🔧 Tech stack

- Next.js (app directory)
- React
- Tailwind CSS for styling
- next/image for image optimization

This repository lives in the `frontend/` folder of the workspace.

## 🚀 Quick start (local development)

Prerequisites
- Node.js 18+ (or an LTS release compatible with Next 15)
- npm (or your preferred package manager — pnpm, yarn)

Run locally

Open a shell in the `frontend` folder and run:

```powershell
# install dependencies (if needed)
npm install

# start development server (Hot reload at localhost:3000)
npm run dev
```

Then open http://localhost:3000

Build / production preview

```powershell
# build for production
npm run build

# start production server (after build)
npm run start
```

Linting

```powershell
npm run lint
```

---

## 📁 Project layout (key files)

- frontend/
	- package.json — scripts & deps
	- app/
		- page.jsx — main landing page (hero, services, clients, careers, contact)
		- globals.css — global styles
	- public/ — static images (logos, hero image, icons)

If you want to modify the homepage copy and structure, update `app/page.jsx` — the file already includes structured sections for hero, services, clients, careers, contact and footer.

## 🖼️ Updating logos & hero image

- Place new logo images inside `frontend/public/`.
- The clients grid uses images at these paths by default: `/hdfc_logo.webp`, `/icici_logo.png`, `/sbi_logo.png`, `/axis_logo.png`, `/kotak_logo.png`, `/yesbank_logo.png`.
- The hero illustration is `public/hero img.webp`. Keep the file names or update `app/page.jsx` to point to new filenames.

Images are rendered with Next's `<Image />` component for automatic optimization.

## ✏️ Content / copy

The site already uses copy focused on recruitment and banking (hero + services + About). If you'd like custom headings, a short list of exact strings to use will let me update `app/page.jsx` quickly.

## ♻️ Common changes you might want

- Add or replace client logos → put image in `public/` and update the `clients` array in `app/page.jsx`.
- Change hero text or CTA → edit the hero block in `app/page.jsx`.
- Modify colors or spacing → update Tailwind classes in component markup or `globals.css`.

## ☁️ Deployment

Recommended: Vercel (first-class Next.js support). Connect the repo and Vercel will auto-detect the Next.js app and provide CI/CD. The production build command will be `npm run build` and the start command `npm run start`.

## 🤝 Contributing

If this will become collaborative, add a CONTRIBUTING.md and use branches + PRs. Keep each change small and include screenshots for visual updates.

## 📝 License & contact

Add the appropriate license file if this project will be shared publicly. For help editing content or swapping logos, contact the project owner or maintainers.

---

If you'd like, I can:
- preview the site locally (run dev)
- add more visual docs (screenshots) to the README
- create a short CONTRIBUTING.md and CODE_OF_CONDUCT.md for collaboration

Tell me which one you'd like next.
