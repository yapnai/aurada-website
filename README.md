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

The homepage is a light, friendly page: the original Yapn logo (with a dark-wordmark copy, `public/yapn-logo-dark.svg`, for the light background), Bricolage Grotesque and Figtree fonts, an example call in the hero, a how-it-works section for inbound and outbound calls, and a single contact form. Reduced-motion preferences disable animation. Site copy must not contain em dashes or unverified metrics and promises, and example calls and campaigns are labeled as examples.

Contact submissions go directly to the isolated AWS endpoint documented in [infra/contact/README.md](infra/contact/README.md). The recipient is fixed to team@yapn.ai. No email credentials are exposed in the website or required in Vercel.

The existing Vercel project deploys the main branch. The previous signup and Google Sheets intake flow have been removed.

The approved design direction is recorded in .superdesign/design-system.md (.superdesign/resume.json is SuperDesign tool state from the previous design). Local generated previews are ignored.
