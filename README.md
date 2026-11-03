# Joao Keya — Portfolio

Personal portfolio built with React 19, Vite and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

## Contact form

The contact form sends messages through [Web3Forms](https://web3forms.com), which forwards each submission to your inbox.

1. Go to https://web3forms.com, enter the email address that should receive messages, and copy the access key they send you.
2. Copy `.env.example` to `.env` and paste the key as `VITE_WEB3FORMS_KEY`.
3. In Vercel, add the same variable under **Settings → Environment Variables** and redeploy.

Until a key is configured the form falls back to opening the visitor's email app with the message pre-filled, so nothing is lost.

Submissions can also be viewed in the Web3Forms dashboard if you create a free account with the same email.

## Content

All text lives in data files so it can be edited without touching components:

- `src/utils/constants.js` — name, title, bio, stats, nav links, resume path
- `src/data/projects.js` — project cards and modal content
- `src/data/experience.js` — work history, education, working principles
- `src/data/skills.js` — skill groups
- `src/data/services.js` — services section

Project screenshots live in `public/images/projects/` and the downloadable CV in `public/`.
