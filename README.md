# Yapn website

The public Yapn marketing site, built with Next.js. Dashboard login links to https://dashboard.yapn.ai.

## Development

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
```

The homepage uses the original Yapn logo, Geist fonts, CSS voice animation and a single contact form. Reduced-motion preferences disable animation. Site copy must not contain em dashes or unverified metrics and promises.

Contact submissions go directly to the isolated AWS endpoint documented in [infra/contact/README.md](infra/contact/README.md). The recipient is fixed to team@yapn.ai. No email credentials are exposed in the website or required in Vercel.

The existing Vercel project deploys the main branch. The previous signup and Google Sheets intake flow have been removed.

Design history is recorded in .superdesign/resume.json. Local generated previews are ignored.
