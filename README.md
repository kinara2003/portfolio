# Kinara Hemachandra — BA Portfolio (React + TypeScript + Tailwind)

## Run locally
    npm install
    npm run dev        # preview at the printed localhost URL
    npm run build      # production build in dist/

## Add your CV
1. Put the PDF at `public/cv/Kinara_Hemachandra_CV.pdf`.
2. In `src/data.ts` set `CV_FILE = 'cv/Kinara_Hemachandra_CV.pdf'`.

## Add contact links
Edit `EMAIL`, `LINKEDIN`, `GITHUB` in `src/data.ts`. An empty `EMAIL` hides the email row.

## Edit content
All text, skills and case studies are in `src/data.ts`.

## Publish free (GitHub Pages)
1. Create a GitHub repo and push this folder to the `main` branch.
2. Repo Settings → Pages → Source: **GitHub Actions**.
3. Each push to `main` builds and deploys via `.github/workflows/deploy.yml`.
(Netlify or Vercel also work: build command `npm run build`, publish folder `dist`.)
